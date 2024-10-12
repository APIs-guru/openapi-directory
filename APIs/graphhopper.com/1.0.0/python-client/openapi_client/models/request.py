# coding: utf-8

"""
    GraphHopper Directions API

     With the [GraphHopper Directions API](https://www.graphhopper.com/products/) you can integrate A-to-B route planning, turn-by-turn navigation, route optimization, isochrone calculations and other tools in your application.  The GraphHopper Directions API consists of the following RESTful web services:   * [Routing API](#tag/Routing-API),  * [Route Optimization API](#tag/Route-Optimization-API),  * [Isochrone API](#tag/Isochrone-API),  * [Map Matching API](#tag/Map-Matching-API),  * [Matrix API](#tag/Matrix-API),  * [Geocoding API](#tag/Geocoding-API) and  * [Cluster API](#tag/Cluster-API).  # Explore our APIs  ## Get started  1. [Sign up for GraphHopper](https://support.graphhopper.com/a/solutions/articles/44001976025) 2. [Create an API key](https://support.graphhopper.com/a/solutions/articles/44001976027)  Each API part has its own documentation. Jump to the desired API part and learn about the API through the given examples and tutorials.  In addition, for each API there are specific sample requests that you can send via Insomnia or Postman to see what the requests and responses look like.  ## Insomnia  To explore our APIs with [Insomnia](https://insomnia.rest/), follow these steps:  1. Open Insomnia and Import [our workspace](https://raw.githubusercontent.com/graphhopper/directions-api-doc/master/web/restclients/GraphHopper-Direction-API-Insomnia.json). 2. Specify [your API key](https://graphhopper.com/dashboard/#/register) in your workspace: Manage Environments -> Base Environment -> `\"api_key\": your API key` 3. Start exploring  ![Insomnia](./img/insomnia.png)  ## Postman  To explore our APIs with [Postman](https://www.getpostman.com/), follow these steps:  1. Import our [request collections](https://raw.githubusercontent.com/graphhopper/directions-api-doc/master/web/restclients/graphhopper_directions_api.postman_collection.json) as well as our [environment file](https://raw.githubusercontent.com/graphhopper/directions-api-doc/master/web/restclients/graphhopper_directions_api.postman_environment.json). 2. Specify [your API key](https://graphhopper.com/dashboard/#/register) in your environment: `\"api_key\": your API key` 3. Start exploring  ![Postman](./img/postman.png)  ## API Client Libraries  To speed up development and make coding easier, we offer the following client libraries:   * [JavaScript client](https://github.com/graphhopper/directions-api-js-client) - try the [live examples](https://graphhopper.com/api/1/examples/)  * [Others](https://github.com/graphhopper/directions-api-clients) like C#, Ruby, PHP, Python, ... automatically created for the Route Optimization API  ### Bandwidth reduction  If you create your own client, make sure it supports http/2 and gzipped responses for best speed.  If you use the Matrix, the Route Optimization API or the Cluster API and want to solve large problems, we recommend you to reduce bandwidth by [compressing your POST request](https://gist.github.com/karussell/82851e303ea7b3459b2dea01f18949f4) and specifying the header as follows: `Content-Encoding: gzip`. This will also avoid the HTTP 413 error \"Request Entity Too Large\".  ## Contact Us  If you have problems or questions, please read the following information:  - [FAQ](https://graphhopper.com/api/1/docs/FAQ/) - [Public forum](https://discuss.graphhopper.com/c/directions-api) - [Contact us](https://www.graphhopper.com/contact-form/) - [GraphHopper Status Page](https://status.graphhopper.com/)  To stay informed about the latest developments, you can  - follow us on [twitter](https://twitter.com/graphhopper/), - read [our blog](https://graphhopper.com/blog/), - watch [our documentation repository](https://github.com/graphhopper/directions-api-doc), - sign up for our newsletter or - [our forum](https://discuss.graphhopper.com/c/directions-api).  Select the channel you like the most.   # Map Data and Routing Profiles  Currently, our main data source is [OpenStreetMap](https://www.openstreetmap.org). We also integrated other network data providers. This chapter gives an overview about the options you have.  ## OpenStreetMap  #### Geographical Coverage  [OpenStreetMap](https://www.openstreetmap.org) covers the whole world. If you want to see for yourself if we can provide data suitable for your region, please visit [GraphHopper Maps](https://graphhopper.com/maps/). You can edit and modify OpenStreetMap data if you find that important information is missing, e.g. a weight limit for a bridge. [Here](https://wiki.openstreetmap.org/wiki/Beginners%27_guide) is a beginner's guide that shows how to add data. If you have edited data, we usually consider your data after 1 week at the latest.  #### Supported Vehicle Profiles  The Routing, Matrix and Route Optimization APIs support the following vehicle profiles:  Name       | Description           | Restrictions              | Icon -----------|:----------------------|:--------------------------|:--------------------------------------------------------- car        | Car mode              | car access                | ![car image](https://graphhopper.com/maps/img/car.png) small_truck| Small truck like a Mercedes Sprinter, Ford Transit or Iveco Daily | height=2.7m, width=2+0.4m, length=5.5m, weight=2080+1400 kg | ![small truck image](https://graphhopper.com/maps/img/small_truck.png) truck      | Truck like a MAN or Mercedes-Benz Actros | height=3.7m, width=2.6+0.5m, length=12m, weight=13000 + 13000 kg, hgv=yes, 3 Axes | ![truck image](https://graphhopper.com/maps/img/truck.png) scooter    | Moped mode | Fast inner city, often used for food delivery, is able to ignore certain bollards, maximum speed of roughly 50km/h | ![scooter image](https://graphhopper.com/maps/img/scooter.png) foot       | Pedestrian or walking without dangerous [SAC-scales](https://wiki.openstreetmap.org/wiki/Key:sac_scale) | foot access         | ![foot image](https://graphhopper.com/maps/img/foot.png) hike       | Pedestrian or walking with priority for more beautiful hiking tours and potentially a bit longer than `foot`. Walking duration is influenced by elevation differences.  | foot access         | ![hike image](https://graphhopper.com/maps/img/hike.png) bike       | Trekking bike avoiding hills | bike access  | ![bike image](https://graphhopper.com/maps/img/bike.png) mtb        | Mountainbike          | bike access         | ![Mountainbike image](https://graphhopper.com/maps/img/mtb.png) racingbike| Bike preferring roads | bike access         | ![racingbike image](https://graphhopper.com/maps/img/racingbike.png)  Please note:   * all motor vehicles (`car`, `small_truck`, `truck` and `scooter`) support turn restrictions via `turn_costs=true`  * the free package supports only the vehicle profiles `car`, `bike` or `foot`  * up to 2 different vehicle profiles can be used in a single optimization request. The number of vehicles is unaffected and depends on your subscription.  * we offer custom vehicle profiles with different properties, different speed profiles or different access options. To find out more about custom profiles, please [contact us](https://www.graphhopper.com/contact-form/).  * a sophisticated `motorcycle` profile is available up on request. It is powered by the [Kurviger](https://kurviger.de/en) Routing API and favors curves and slopes while avoiding cities and highways.   ## TomTom  If you want to include traffic, you can purchase the TomTom Add-on. This Add-on only uses TomTom's road network and historical traffic information. Live traffic is not yet considered. If you are interested to learn how we consider traffic information, we recommend that you read [this article](https://www.graphhopper.com/blog/2017/11/06/time-dependent-optimization/).  Please note the following:   * Currently we only offer this for our [Route Optimization API](#tag/Route-Optimization-API).  * In addition to our terms, you need to accept TomTom's [End User License Aggreement](https://www.graphhopper.com/tomtom-end-user-license-agreement/).  * We do *not* use TomTom's web services. We only use their data with our software.   [Contact us](https://www.graphhopper.com/contact-form/) for more details.  #### Geographical Coverage  We offer  - Europe including Russia - North, Central and South America - Saudi Arabia - United Arab Emirates - South Africa - Australia  #### Supported Vehicle Profiles  Name       | Description           | Restrictions              | Icon -----------|:----------------------|:--------------------------|:--------------------------------------------------------- car        | Car mode              | car access                | ![car image](https://graphhopper.com/maps/img/car.png) small_truck| Small truck like a Mercedes Sprinter, Ford Transit or Iveco Daily | height=2.7m, width=2+0.4m, length=5.5m, weight=2080+1400 kg | ![small truck image](https://graphhopper.com/maps/img/small_truck.png) 

    The version of the OpenAPI document: 1.0.0
    Contact: support@graphhopper.com
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


from __future__ import annotations
import pprint
import re  # noqa: F401
import json

from pydantic import BaseModel, ConfigDict, Field
from typing import Any, ClassVar, Dict, List, Optional
from typing_extensions import Annotated
from openapi_client.models.algorithm import Algorithm
from openapi_client.models.configuration import Configuration
from openapi_client.models.cost_matrix import CostMatrix
from openapi_client.models.objective import Objective
from openapi_client.models.request_relations_inner import RequestRelationsInner
from openapi_client.models.service import Service
from openapi_client.models.shipment import Shipment
from openapi_client.models.vehicle import Vehicle
from openapi_client.models.vehicle_type import VehicleType
from typing import Optional, Set
from typing_extensions import Self

class Request(BaseModel):
    """
    Request
    """ # noqa: E501
    algorithm: Optional[Algorithm] = None
    configuration: Optional[Configuration] = None
    cost_matrices: Optional[List[CostMatrix]] = Field(default=None, description="Specifies your own tranport time and distance matrices.")
    objectives: Optional[List[Objective]] = Field(default=None, description="Specifies an objective function. The vehicle routing problem is solved in such a way that this objective function is minimized.")
    relations: Optional[List[RequestRelationsInner]] = Field(default=None, description="Defines additional relationships between orders.")
    services: Optional[List[Service]] = Field(default=None, description="Specifies the orders of the type \"service\". These are, for example, pick-ups, deliveries or other stops that are to be approached by the specified vehicles. Each of these orders contains only one location.")
    shipments: Optional[List[Shipment]] = Field(default=None, description="Specifies the available shipments. Each shipment contains a pickup and a delivery stop, which must be processed one after the other.")
    vehicle_types: Optional[List[VehicleType]] = Field(default=None, description="Specifies the available vehicle types. These types can be assigned to vehicles.")
    vehicles: Optional[Annotated[List[Vehicle], Field(min_length=1)]] = Field(default=None, description="Specifies the available vehicles.")
    __properties: ClassVar[List[str]] = ["algorithm", "configuration", "cost_matrices", "objectives", "relations", "services", "shipments", "vehicle_types", "vehicles"]

    model_config = ConfigDict(
        populate_by_name=True,
        validate_assignment=True,
        protected_namespaces=(),
    )


    def to_str(self) -> str:
        """Returns the string representation of the model using alias"""
        return pprint.pformat(self.model_dump(by_alias=True))

    def to_json(self) -> str:
        """Returns the JSON representation of the model using alias"""
        # TODO: pydantic v2: use .model_dump_json(by_alias=True, exclude_unset=True) instead
        return json.dumps(self.to_dict())

    @classmethod
    def from_json(cls, json_str: str) -> Optional[Self]:
        """Create an instance of Request from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self) -> Dict[str, Any]:
        """Return the dictionary representation of the model using alias.

        This has the following differences from calling pydantic's
        `self.model_dump(by_alias=True)`:

        * `None` is only added to the output dict for nullable fields that
          were set at model initialization. Other fields with value `None`
          are ignored.
        """
        excluded_fields: Set[str] = set([
        ])

        _dict = self.model_dump(
            by_alias=True,
            exclude=excluded_fields,
            exclude_none=True,
        )
        # override the default output from pydantic by calling `to_dict()` of algorithm
        if self.algorithm:
            _dict['algorithm'] = self.algorithm.to_dict()
        # override the default output from pydantic by calling `to_dict()` of configuration
        if self.configuration:
            _dict['configuration'] = self.configuration.to_dict()
        # override the default output from pydantic by calling `to_dict()` of each item in cost_matrices (list)
        _items = []
        if self.cost_matrices:
            for _item_cost_matrices in self.cost_matrices:
                if _item_cost_matrices:
                    _items.append(_item_cost_matrices.to_dict())
            _dict['cost_matrices'] = _items
        # override the default output from pydantic by calling `to_dict()` of each item in objectives (list)
        _items = []
        if self.objectives:
            for _item_objectives in self.objectives:
                if _item_objectives:
                    _items.append(_item_objectives.to_dict())
            _dict['objectives'] = _items
        # override the default output from pydantic by calling `to_dict()` of each item in relations (list)
        _items = []
        if self.relations:
            for _item_relations in self.relations:
                if _item_relations:
                    _items.append(_item_relations.to_dict())
            _dict['relations'] = _items
        # override the default output from pydantic by calling `to_dict()` of each item in services (list)
        _items = []
        if self.services:
            for _item_services in self.services:
                if _item_services:
                    _items.append(_item_services.to_dict())
            _dict['services'] = _items
        # override the default output from pydantic by calling `to_dict()` of each item in shipments (list)
        _items = []
        if self.shipments:
            for _item_shipments in self.shipments:
                if _item_shipments:
                    _items.append(_item_shipments.to_dict())
            _dict['shipments'] = _items
        # override the default output from pydantic by calling `to_dict()` of each item in vehicle_types (list)
        _items = []
        if self.vehicle_types:
            for _item_vehicle_types in self.vehicle_types:
                if _item_vehicle_types:
                    _items.append(_item_vehicle_types.to_dict())
            _dict['vehicle_types'] = _items
        # override the default output from pydantic by calling `to_dict()` of each item in vehicles (list)
        _items = []
        if self.vehicles:
            for _item_vehicles in self.vehicles:
                if _item_vehicles:
                    _items.append(_item_vehicles.to_dict())
            _dict['vehicles'] = _items
        return _dict

    @classmethod
    def from_dict(cls, obj: Optional[Dict[str, Any]]) -> Optional[Self]:
        """Create an instance of Request from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "algorithm": Algorithm.from_dict(obj["algorithm"]) if obj.get("algorithm") is not None else None,
            "configuration": Configuration.from_dict(obj["configuration"]) if obj.get("configuration") is not None else None,
            "cost_matrices": [CostMatrix.from_dict(_item) for _item in obj["cost_matrices"]] if obj.get("cost_matrices") is not None else None,
            "objectives": [Objective.from_dict(_item) for _item in obj["objectives"]] if obj.get("objectives") is not None else None,
            "relations": [RequestRelationsInner.from_dict(_item) for _item in obj["relations"]] if obj.get("relations") is not None else None,
            "services": [Service.from_dict(_item) for _item in obj["services"]] if obj.get("services") is not None else None,
            "shipments": [Shipment.from_dict(_item) for _item in obj["shipments"]] if obj.get("shipments") is not None else None,
            "vehicle_types": [VehicleType.from_dict(_item) for _item in obj["vehicle_types"]] if obj.get("vehicle_types") is not None else None,
            "vehicles": [Vehicle.from_dict(_item) for _item in obj["vehicles"]] if obj.get("vehicles") is not None else None
        })
        return _obj


