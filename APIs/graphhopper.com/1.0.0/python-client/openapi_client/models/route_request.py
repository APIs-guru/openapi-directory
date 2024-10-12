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

from pydantic import BaseModel, ConfigDict, Field, StrictBool, StrictFloat, StrictInt, StrictStr, field_validator
from typing import Any, ClassVar, Dict, List, Optional, Union
from typing import Optional, Set
from typing_extensions import Self

class RouteRequest(BaseModel):
    """
    RouteRequest
    """ # noqa: E501
    algorithm: Optional[StrictStr] = Field(default=None, description="Rather than looking for the shortest or fastest path, this lets you solve two different problems related to routing: With `round_trip`, the route will get you back to where you started. This is meant for fun (think of a bike trip), so we will add some randomness. This requires `ch.disable=true`. With `alternative_route`, we give you not one but several routes that are close to optimal, but not too similar to each other. You can control both of these features with additional parameters, see below. ")
    alternative_route_max_paths: Optional[StrictInt] = Field(default=2, description="If `algorithm=alternative_route`, this parameter sets the number of maximum paths which should be calculated. Increasing can lead to worse alternatives. ", alias="alternative_route.max_paths")
    alternative_route_max_share_factor: Optional[Union[StrictFloat, StrictInt]] = Field(default=0.6, description="If `algorithm=alternative_route`, this parameter specifies how similar an alternative route can be to the optimal route. Increasing can lead to worse alternatives. ", alias="alternative_route.max_share_factor")
    alternative_route_max_weight_factor: Optional[Union[StrictFloat, StrictInt]] = Field(default=1.4, description="If `algorithm=alternative_route`, this parameter sets the factor by which the alternatives routes can be longer than the optimal route. Increasing can lead to worse alternatives. ", alias="alternative_route.max_weight_factor")
    avoid: Optional[StrictStr] = Field(default=None, description="Specify which road classes and environments you would like to avoid. Possible values are `motorway`, `steps`, `track`, `toll`, `ferry`, `tunnel` and `bridge`. Separate several values with `;`. Obviously not all the values make sense for all vehicle profiles e.g. `bike` is already forbidden on a `motorway`. Requires `ch.disable=true`. ")
    block_area: Optional[StrictStr] = Field(default=None, description="Block road access via a point with the format `latitude,longitude` or an area defined by a circle `lat,lon,radius` or a rectangle `lat1,lon1,lat2,lon2`. Separate several values with `;`. Requires `ch.disable=true`. ")
    calc_points: Optional[StrictBool] = Field(default=True, description="If the points for the route should be calculated at all. ")
    ch_disable: Optional[StrictBool] = Field(default=False, description="Use this parameter in combination with one or more parameters from below. ", alias="ch.disable")
    curbsides: Optional[List[StrictStr]] = Field(default=None, description="Optional parameter. It specifies on which side a point should be relative to the driver when she leaves/arrives at a start/target/via point. You need to specify this parameter for either none or all points. Only supported for motor vehicles and OpenStreetMap.")
    debug: Optional[StrictBool] = Field(default=False, description="If `true`, the output will be formatted. ")
    details: Optional[List[StrictStr]] = Field(default=None, description="Optional parameter to retrieve path details. You can request additional details for the route: `street_name`, `time`, `distance`, `max_speed`, `toll`, `road_class`, `road_class_link`, `road_access`, `road_environment`, `lanes`, and `surface`. Read more about the usage of path details [here](https://discuss.graphhopper.com/t/2539). ")
    elevation: Optional[StrictBool] = Field(default=False, description="If `true`, a third coordinate, the altitude, is included with all positions in the response. This changes the format of the `points` and `snapped_waypoints` fields of the response, in both their encodings. Unless you switch off the `points_encoded` parameter, you need special code on the client side that can handle three-dimensional coordinates. A request can fail if the vehicle profile does not support elevation. See the features object for every vehicle profile. ")
    heading_penalty: Optional[StrictInt] = Field(default=120, description="Time penalty in seconds for not obeying a specified heading. Requires `ch.disable=true`. ")
    headings: Optional[List[StrictInt]] = Field(default=None, description="Favour a heading direction for a certain point. Specify either one heading for the start point or as many as there are points. In this case headings are associated by their order to the specific points. Headings are given as north based clockwise angle between 0 and 360 degree. This parameter also influences the tour generated with `algorithm=round_trip` and forces the initial direction.  Requires `ch.disable=true`. ")
    instructions: Optional[StrictBool] = Field(default=True, description="If instructions should be calculated and returned ")
    locale: Optional[StrictStr] = Field(default='en', description="The locale of the resulting turn instructions. E.g. `pt_PT` for Portuguese or `de` for German. ")
    optimize: Optional[StrictStr] = Field(default='false', description="Normally, the calculated route will visit the points in the order you specified them. If you have more than two points, you can set this parameter to `\"true\"` and the points may be re-ordered to minimize the total travel time. Keep in mind that the limits on the number of locations of the Route Optimization API applies, and the request costs more credits. ")
    pass_through: Optional[StrictBool] = Field(default=False, description="If `true`, u-turns are avoided at via-points with regard to the `heading_penalty`. Requires `ch.disable=true`. ")
    point_hints: Optional[List[StrictStr]] = Field(default=None, description="Optional parameter. Specifies a hint for each point in the `points` array to prefer a certain street for the closest location lookup. E.g. if there is an address or house with two or more neighboring streets you can control for which street the closest location is looked up.")
    points: Optional[List[List[Union[StrictFloat, StrictInt]]]] = Field(default=None, description="The points for the route in an array of `[longitude,latitude]`. For instance, if you want to calculate a route from point A to B to C then you specify `points: [ [A_longitude, A_latitude], [B_longitude, B_latitude], [C_longitude, C_latitude]] ")
    points_encoded: Optional[StrictBool] = Field(default=True, description="Allows changing the encoding of location data in the response. The default is polyline encoding, which is compact but requires special client code to unpack. (We provide it in our JavaScript client library!) Set this parameter to `false` to switch the encoding to simple coordinate pairs like `[lon,lat]`, or `[lon,lat,elevation]`. See the description of the response format for more information. ")
    round_trip_distance: Optional[StrictInt] = Field(default=10000, description="If `algorithm=round_trip`, this parameter configures approximative length of the resulting round trip. Requires `ch.disable=true`. ", alias="round_trip.distance")
    round_trip_seed: Optional[StrictInt] = Field(default=None, description="If `algorithm=round_trip`, this sets the random seed. Change this to get a different tour for each value. ", alias="round_trip.seed")
    snap_preventions: Optional[List[StrictStr]] = Field(default=None, description="Optional parameter to avoid snapping to a certain road class or road environment. Current supported values `motorway`, `trunk`, `ferry`, `tunnel`, `bridge` and `ford`")
    vehicle: Optional[Any] = None
    weighting: Optional[StrictStr] = Field(default='fastest', description="Determines the way the ''best'' route is calculated. Default is `fastest`. Other options are `shortest` (e.g. for `vehicle=foot` or `bike`) and `short_fastest` which finds a reasonable balance between `shortest` and `fastest`. Requires `ch.disable=true`. ")
    __properties: ClassVar[List[str]] = ["algorithm", "alternative_route.max_paths", "alternative_route.max_share_factor", "alternative_route.max_weight_factor", "avoid", "block_area", "calc_points", "ch.disable", "curbsides", "debug", "details", "elevation", "heading_penalty", "headings", "instructions", "locale", "optimize", "pass_through", "point_hints", "points", "points_encoded", "round_trip.distance", "round_trip.seed", "snap_preventions", "vehicle", "weighting"]

    @field_validator('algorithm')
    def algorithm_validate_enum(cls, value):
        """Validates the enum"""
        if value is None:
            return value

        if value not in set(['round_trip', 'alternative_route']):
            raise ValueError("must be one of enum values ('round_trip', 'alternative_route')")
        return value

    @field_validator('curbsides')
    def curbsides_validate_enum(cls, value):
        """Validates the enum"""
        if value is None:
            return value

        for i in value:
            if i not in set(['any', 'right', 'left']):
                raise ValueError("each list item must be one of ('any', 'right', 'left')")
        return value

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
        """Create an instance of RouteRequest from a JSON string"""
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
        # override the default output from pydantic by calling `to_dict()` of vehicle
        if self.vehicle:
            _dict['vehicle'] = self.vehicle.to_dict()
        return _dict

    @classmethod
    def from_dict(cls, obj: Optional[Dict[str, Any]]) -> Optional[Self]:
        """Create an instance of RouteRequest from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "algorithm": obj.get("algorithm"),
            "alternative_route.max_paths": obj.get("alternative_route.max_paths") if obj.get("alternative_route.max_paths") is not None else 2,
            "alternative_route.max_share_factor": obj.get("alternative_route.max_share_factor") if obj.get("alternative_route.max_share_factor") is not None else 0.6,
            "alternative_route.max_weight_factor": obj.get("alternative_route.max_weight_factor") if obj.get("alternative_route.max_weight_factor") is not None else 1.4,
            "avoid": obj.get("avoid"),
            "block_area": obj.get("block_area"),
            "calc_points": obj.get("calc_points") if obj.get("calc_points") is not None else True,
            "ch.disable": obj.get("ch.disable") if obj.get("ch.disable") is not None else False,
            "curbsides": obj.get("curbsides"),
            "debug": obj.get("debug") if obj.get("debug") is not None else False,
            "details": obj.get("details"),
            "elevation": obj.get("elevation") if obj.get("elevation") is not None else False,
            "heading_penalty": obj.get("heading_penalty") if obj.get("heading_penalty") is not None else 120,
            "headings": obj.get("headings"),
            "instructions": obj.get("instructions") if obj.get("instructions") is not None else True,
            "locale": obj.get("locale") if obj.get("locale") is not None else 'en',
            "optimize": obj.get("optimize") if obj.get("optimize") is not None else 'false',
            "pass_through": obj.get("pass_through") if obj.get("pass_through") is not None else False,
            "point_hints": obj.get("point_hints"),
            "points": obj.get("points"),
            "points_encoded": obj.get("points_encoded") if obj.get("points_encoded") is not None else True,
            "round_trip.distance": obj.get("round_trip.distance") if obj.get("round_trip.distance") is not None else 10000,
            "round_trip.seed": obj.get("round_trip.seed"),
            "snap_preventions": obj.get("snap_preventions"),
            "vehicle": VehicleProfileId.from_dict(obj["vehicle"]) if obj.get("vehicle") is not None else None,
            "weighting": obj.get("weighting") if obj.get("weighting") is not None else 'fastest'
        })
        return _obj


