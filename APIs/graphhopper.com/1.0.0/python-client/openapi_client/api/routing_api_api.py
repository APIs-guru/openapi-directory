# coding: utf-8

"""
    GraphHopper Directions API

     With the [GraphHopper Directions API](https://www.graphhopper.com/products/) you can integrate A-to-B route planning, turn-by-turn navigation, route optimization, isochrone calculations and other tools in your application.  The GraphHopper Directions API consists of the following RESTful web services:   * [Routing API](#tag/Routing-API),  * [Route Optimization API](#tag/Route-Optimization-API),  * [Isochrone API](#tag/Isochrone-API),  * [Map Matching API](#tag/Map-Matching-API),  * [Matrix API](#tag/Matrix-API),  * [Geocoding API](#tag/Geocoding-API) and  * [Cluster API](#tag/Cluster-API).  # Explore our APIs  ## Get started  1. [Sign up for GraphHopper](https://support.graphhopper.com/a/solutions/articles/44001976025) 2. [Create an API key](https://support.graphhopper.com/a/solutions/articles/44001976027)  Each API part has its own documentation. Jump to the desired API part and learn about the API through the given examples and tutorials.  In addition, for each API there are specific sample requests that you can send via Insomnia or Postman to see what the requests and responses look like.  ## Insomnia  To explore our APIs with [Insomnia](https://insomnia.rest/), follow these steps:  1. Open Insomnia and Import [our workspace](https://raw.githubusercontent.com/graphhopper/directions-api-doc/master/web/restclients/GraphHopper-Direction-API-Insomnia.json). 2. Specify [your API key](https://graphhopper.com/dashboard/#/register) in your workspace: Manage Environments -> Base Environment -> `\"api_key\": your API key` 3. Start exploring  ![Insomnia](./img/insomnia.png)  ## Postman  To explore our APIs with [Postman](https://www.getpostman.com/), follow these steps:  1. Import our [request collections](https://raw.githubusercontent.com/graphhopper/directions-api-doc/master/web/restclients/graphhopper_directions_api.postman_collection.json) as well as our [environment file](https://raw.githubusercontent.com/graphhopper/directions-api-doc/master/web/restclients/graphhopper_directions_api.postman_environment.json). 2. Specify [your API key](https://graphhopper.com/dashboard/#/register) in your environment: `\"api_key\": your API key` 3. Start exploring  ![Postman](./img/postman.png)  ## API Client Libraries  To speed up development and make coding easier, we offer the following client libraries:   * [JavaScript client](https://github.com/graphhopper/directions-api-js-client) - try the [live examples](https://graphhopper.com/api/1/examples/)  * [Others](https://github.com/graphhopper/directions-api-clients) like C#, Ruby, PHP, Python, ... automatically created for the Route Optimization API  ### Bandwidth reduction  If you create your own client, make sure it supports http/2 and gzipped responses for best speed.  If you use the Matrix, the Route Optimization API or the Cluster API and want to solve large problems, we recommend you to reduce bandwidth by [compressing your POST request](https://gist.github.com/karussell/82851e303ea7b3459b2dea01f18949f4) and specifying the header as follows: `Content-Encoding: gzip`. This will also avoid the HTTP 413 error \"Request Entity Too Large\".  ## Contact Us  If you have problems or questions, please read the following information:  - [FAQ](https://graphhopper.com/api/1/docs/FAQ/) - [Public forum](https://discuss.graphhopper.com/c/directions-api) - [Contact us](https://www.graphhopper.com/contact-form/) - [GraphHopper Status Page](https://status.graphhopper.com/)  To stay informed about the latest developments, you can  - follow us on [twitter](https://twitter.com/graphhopper/), - read [our blog](https://graphhopper.com/blog/), - watch [our documentation repository](https://github.com/graphhopper/directions-api-doc), - sign up for our newsletter or - [our forum](https://discuss.graphhopper.com/c/directions-api).  Select the channel you like the most.   # Map Data and Routing Profiles  Currently, our main data source is [OpenStreetMap](https://www.openstreetmap.org). We also integrated other network data providers. This chapter gives an overview about the options you have.  ## OpenStreetMap  #### Geographical Coverage  [OpenStreetMap](https://www.openstreetmap.org) covers the whole world. If you want to see for yourself if we can provide data suitable for your region, please visit [GraphHopper Maps](https://graphhopper.com/maps/). You can edit and modify OpenStreetMap data if you find that important information is missing, e.g. a weight limit for a bridge. [Here](https://wiki.openstreetmap.org/wiki/Beginners%27_guide) is a beginner's guide that shows how to add data. If you have edited data, we usually consider your data after 1 week at the latest.  #### Supported Vehicle Profiles  The Routing, Matrix and Route Optimization APIs support the following vehicle profiles:  Name       | Description           | Restrictions              | Icon -----------|:----------------------|:--------------------------|:--------------------------------------------------------- car        | Car mode              | car access                | ![car image](https://graphhopper.com/maps/img/car.png) small_truck| Small truck like a Mercedes Sprinter, Ford Transit or Iveco Daily | height=2.7m, width=2+0.4m, length=5.5m, weight=2080+1400 kg | ![small truck image](https://graphhopper.com/maps/img/small_truck.png) truck      | Truck like a MAN or Mercedes-Benz Actros | height=3.7m, width=2.6+0.5m, length=12m, weight=13000 + 13000 kg, hgv=yes, 3 Axes | ![truck image](https://graphhopper.com/maps/img/truck.png) scooter    | Moped mode | Fast inner city, often used for food delivery, is able to ignore certain bollards, maximum speed of roughly 50km/h | ![scooter image](https://graphhopper.com/maps/img/scooter.png) foot       | Pedestrian or walking without dangerous [SAC-scales](https://wiki.openstreetmap.org/wiki/Key:sac_scale) | foot access         | ![foot image](https://graphhopper.com/maps/img/foot.png) hike       | Pedestrian or walking with priority for more beautiful hiking tours and potentially a bit longer than `foot`. Walking duration is influenced by elevation differences.  | foot access         | ![hike image](https://graphhopper.com/maps/img/hike.png) bike       | Trekking bike avoiding hills | bike access  | ![bike image](https://graphhopper.com/maps/img/bike.png) mtb        | Mountainbike          | bike access         | ![Mountainbike image](https://graphhopper.com/maps/img/mtb.png) racingbike| Bike preferring roads | bike access         | ![racingbike image](https://graphhopper.com/maps/img/racingbike.png)  Please note:   * all motor vehicles (`car`, `small_truck`, `truck` and `scooter`) support turn restrictions via `turn_costs=true`  * the free package supports only the vehicle profiles `car`, `bike` or `foot`  * up to 2 different vehicle profiles can be used in a single optimization request. The number of vehicles is unaffected and depends on your subscription.  * we offer custom vehicle profiles with different properties, different speed profiles or different access options. To find out more about custom profiles, please [contact us](https://www.graphhopper.com/contact-form/).  * a sophisticated `motorcycle` profile is available up on request. It is powered by the [Kurviger](https://kurviger.de/en) Routing API and favors curves and slopes while avoiding cities and highways.   ## TomTom  If you want to include traffic, you can purchase the TomTom Add-on. This Add-on only uses TomTom's road network and historical traffic information. Live traffic is not yet considered. If you are interested to learn how we consider traffic information, we recommend that you read [this article](https://www.graphhopper.com/blog/2017/11/06/time-dependent-optimization/).  Please note the following:   * Currently we only offer this for our [Route Optimization API](#tag/Route-Optimization-API).  * In addition to our terms, you need to accept TomTom's [End User License Aggreement](https://www.graphhopper.com/tomtom-end-user-license-agreement/).  * We do *not* use TomTom's web services. We only use their data with our software.   [Contact us](https://www.graphhopper.com/contact-form/) for more details.  #### Geographical Coverage  We offer  - Europe including Russia - North, Central and South America - Saudi Arabia - United Arab Emirates - South Africa - Australia  #### Supported Vehicle Profiles  Name       | Description           | Restrictions              | Icon -----------|:----------------------|:--------------------------|:--------------------------------------------------------- car        | Car mode              | car access                | ![car image](https://graphhopper.com/maps/img/car.png) small_truck| Small truck like a Mercedes Sprinter, Ford Transit or Iveco Daily | height=2.7m, width=2+0.4m, length=5.5m, weight=2080+1400 kg | ![small truck image](https://graphhopper.com/maps/img/small_truck.png) 

    The version of the OpenAPI document: 1.0.0
    Contact: support@graphhopper.com
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501

import warnings
from pydantic import validate_call, Field, StrictFloat, StrictStr, StrictInt
from typing import Any, Dict, List, Optional, Tuple, Union
from typing_extensions import Annotated

from pydantic import Field, StrictBool, StrictFloat, StrictInt, StrictStr, field_validator
from typing import List, Optional, Union
from typing_extensions import Annotated
from openapi_client.models.info_response import InfoResponse
from openapi_client.models.route_request import RouteRequest
from openapi_client.models.route_response import RouteResponse
from openapi_client.models.vehicle_profile_id import VehicleProfileId

from openapi_client.api_client import ApiClient, RequestSerialized
from openapi_client.api_response import ApiResponse
from openapi_client.rest import RESTResponseType


class RoutingAPIApi:
    """NOTE: This class is auto generated by OpenAPI Generator
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """

    def __init__(self, api_client=None) -> None:
        if api_client is None:
            api_client = ApiClient.get_default()
        self.api_client = api_client


    @validate_call
    def get_route(
        self,
        point: Annotated[List[StrictStr], Field(description="The points for which the route should be calculated. Format: `[latitude,longitude]`. Specify at least an origin and a destination. Via points are possible. The maximum number depends on your plan. ")],
        point_hint: Annotated[Optional[List[StrictStr]], Field(description="The `point_hint` is typically a road name to which the associated `point` parameter should be snapped to. Specify no `point_hint` parameter or the same number as you have `point` parameters. ")] = None,
        snap_prevention: Annotated[Optional[List[StrictStr]], Field(description="Optional parameter to avoid snapping to a certain road class or road environment. Currently supported values are `motorway`, `trunk`, `ferry`, `tunnel`, `bridge` and `ford`. Multiple values are specified like `snap_prevention=ferry&snap_prevention=motorway`. ")] = None,
        vehicle: Annotated[Optional[VehicleProfileId], Field(description="The vehicle profile for which the route should be calculated. ")] = None,
        curbside: Annotated[Optional[List[StrictStr]], Field(description="Optional parameter. It specifies on which side a point should be relative to the driver when she leaves/arrives at a start/target/via point. You need to specify this parameter for either none or all points. Only supported for motor vehicles and OpenStreetMap. ")] = None,
        turn_costs: Annotated[Optional[StrictBool], Field(description="Specifies if turn restrictions should be considered. Enabling this option increases the route computation time. Only supported for motor vehicles and OpenStreetMap. ")] = None,
        locale: Annotated[Optional[StrictStr], Field(description="The locale of the resulting turn instructions. E.g. `pt_PT` for Portuguese or `de` for German. ")] = None,
        elevation: Annotated[Optional[StrictBool], Field(description="If `true`, a third coordinate, the altitude, is included with all positions in the response. This changes the format of the `points` and `snapped_waypoints` fields of the response, in both their encodings. Unless you switch off the `points_encoded` parameter, you need special code on the client side that can handle three-dimensional coordinates. A request can fail if the vehicle profile does not support elevation. See the features object for every vehicle profile. ")] = None,
        details: Annotated[Optional[List[StrictStr]], Field(description="Optional parameter to retrieve path details. You can request additional details for the route: `street_name`,  `time`, `distance`, `max_speed`, `toll`, `road_class`, `road_class_link`, `road_access`, `road_environment`, `lanes`, and `surface`. Read more about the usage of path details [here](https://discuss.graphhopper.com/t/2539). ")] = None,
        optimize: Annotated[Optional[StrictStr], Field(description="Normally, the calculated route will visit the points in the order you specified them. If you have more than two points, you can set this parameter to `\"true\"` and the points may be re-ordered to minimize the total travel time. Keep in mind that the limits on the number of locations of the Route Optimization API applies, and the request costs more credits. ")] = None,
        instructions: Annotated[Optional[StrictBool], Field(description="If instructions should be calculated and returned ")] = None,
        calc_points: Annotated[Optional[StrictBool], Field(description="If the points for the route should be calculated at all. ")] = None,
        debug: Annotated[Optional[StrictBool], Field(description="If `true`, the output will be formatted. ")] = None,
        points_encoded: Annotated[Optional[StrictBool], Field(description="Allows changing the encoding of location data in the response. The default is polyline encoding, which is compact but requires special client code to unpack. (We provide it in our JavaScript client library!) Set this parameter to `false` to switch the encoding to simple coordinate pairs like `[lon,lat]`, or `[lon,lat,elevation]`. See the description of the response format for more information. ")] = None,
        ch_disable: Annotated[Optional[StrictBool], Field(description="Use this parameter in combination with one or more parameters from below. ")] = None,
        weighting: Annotated[Optional[StrictStr], Field(description="Determines the way the \"best\" route is calculated. Besides `fastest` you can use `short_fastest` which finds a reasonable balance between the distance influence (`shortest`) and the time (`fastest`). You could also use `shortest` but is deprecated and not recommended for motor vehicles. All except `fastest` require `ch.disable=true`. ")] = None,
        heading: Annotated[Optional[List[StrictInt]], Field(description="Favour a heading direction for a certain point. Specify either one heading for the start point or as many as there are points. In this case headings are associated by their order to the specific points. Headings are given as north based clockwise angle between 0 and 360 degree. This parameter also influences the tour generated with `algorithm=round_trip` and forces the initial direction.  Requires `ch.disable=true`. ")] = None,
        heading_penalty: Annotated[Optional[StrictInt], Field(description="Time penalty in seconds for not obeying a specified heading. Requires `ch.disable=true`. ")] = None,
        pass_through: Annotated[Optional[StrictBool], Field(description="If `true`, u-turns are avoided at via-points with regard to the `heading_penalty`. Requires `ch.disable=true`. ")] = None,
        block_area: Annotated[Optional[StrictStr], Field(description="Block road access by specifying a point close to the road segment to be blocked, with the format `lat,lon`. You can also block all road segments crossing a geometric shape. Specify a circle using the format `lat,lon,radius`, or a polygon using the format `lat1,lon1,lat2,lon2,...,latN,lonN`. You can specify several shapes, separating them with `;`. Requires `ch.disable=true`. ")] = None,
        avoid: Annotated[Optional[StrictStr], Field(description="Specify which road classes and environments you would like to avoid.  Possible values are `motorway`, `steps`, `track`, `toll`, `ferry`, `tunnel` and `bridge`. Separate several values with `;`. Obviously not all the values make sense for all vehicle profiles e.g. `bike` is already forbidden on a `motorway`. Requires `ch.disable=true`. ")] = None,
        algorithm: Annotated[Optional[StrictStr], Field(description="Rather than looking for the shortest or fastest path, this parameter lets you solve two different problems related to routing: With `alternative_route`, we give you not one but several routes that are close to optimal, but not too similar to each other.  With `round_trip`, the route will get you back to where you started. This is meant for fun (think of a bike trip), so we will add some randomness. The `round_trip` option requires `ch.disable=true`. You can control both of these features with additional parameters, see below.  ")] = None,
        round_trip_distance: Annotated[Optional[StrictInt], Field(description="If `algorithm=round_trip`, this parameter configures approximative length of the resulting round trip. Requires `ch.disable=true`. ")] = None,
        round_trip_seed: Annotated[Optional[StrictInt], Field(description="If `algorithm=round_trip`, this sets the random seed. Change this to get a different tour for each value. ")] = None,
        alternative_route_max_paths: Annotated[Optional[StrictInt], Field(description="If `algorithm=alternative_route`, this parameter sets the number of maximum paths which should be calculated. Increasing can lead to worse alternatives. ")] = None,
        alternative_route_max_weight_factor: Annotated[Optional[Union[StrictFloat, StrictInt]], Field(description="If `algorithm=alternative_route`, this parameter sets the factor by which the alternatives routes can be longer than the optimal route. Increasing can lead to worse alternatives. ")] = None,
        alternative_route_max_share_factor: Annotated[Optional[Union[StrictFloat, StrictInt]], Field(description="If `algorithm=alternative_route`, this parameter specifies how similar an alternative route can be to the optimal route. Increasing can lead to worse alternatives. ")] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)],
                Annotated[StrictFloat, Field(gt=0)]
            ]
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> RouteResponse:
        """GET Route Endpoint

        The GET request is the most simple one: just specify the parameter in the URL and you are done. Can be tried directly in every browser. 

        :param point: The points for which the route should be calculated. Format: `[latitude,longitude]`. Specify at least an origin and a destination. Via points are possible. The maximum number depends on your plan.  (required)
        :type point: List[str]
        :param point_hint: The `point_hint` is typically a road name to which the associated `point` parameter should be snapped to. Specify no `point_hint` parameter or the same number as you have `point` parameters. 
        :type point_hint: List[str]
        :param snap_prevention: Optional parameter to avoid snapping to a certain road class or road environment. Currently supported values are `motorway`, `trunk`, `ferry`, `tunnel`, `bridge` and `ford`. Multiple values are specified like `snap_prevention=ferry&snap_prevention=motorway`. 
        :type snap_prevention: List[str]
        :param vehicle: The vehicle profile for which the route should be calculated. 
        :type vehicle: VehicleProfileId
        :param curbside: Optional parameter. It specifies on which side a point should be relative to the driver when she leaves/arrives at a start/target/via point. You need to specify this parameter for either none or all points. Only supported for motor vehicles and OpenStreetMap. 
        :type curbside: List[str]
        :param turn_costs: Specifies if turn restrictions should be considered. Enabling this option increases the route computation time. Only supported for motor vehicles and OpenStreetMap. 
        :type turn_costs: bool
        :param locale: The locale of the resulting turn instructions. E.g. `pt_PT` for Portuguese or `de` for German. 
        :type locale: str
        :param elevation: If `true`, a third coordinate, the altitude, is included with all positions in the response. This changes the format of the `points` and `snapped_waypoints` fields of the response, in both their encodings. Unless you switch off the `points_encoded` parameter, you need special code on the client side that can handle three-dimensional coordinates. A request can fail if the vehicle profile does not support elevation. See the features object for every vehicle profile. 
        :type elevation: bool
        :param details: Optional parameter to retrieve path details. You can request additional details for the route: `street_name`,  `time`, `distance`, `max_speed`, `toll`, `road_class`, `road_class_link`, `road_access`, `road_environment`, `lanes`, and `surface`. Read more about the usage of path details [here](https://discuss.graphhopper.com/t/2539). 
        :type details: List[str]
        :param optimize: Normally, the calculated route will visit the points in the order you specified them. If you have more than two points, you can set this parameter to `\"true\"` and the points may be re-ordered to minimize the total travel time. Keep in mind that the limits on the number of locations of the Route Optimization API applies, and the request costs more credits. 
        :type optimize: str
        :param instructions: If instructions should be calculated and returned 
        :type instructions: bool
        :param calc_points: If the points for the route should be calculated at all. 
        :type calc_points: bool
        :param debug: If `true`, the output will be formatted. 
        :type debug: bool
        :param points_encoded: Allows changing the encoding of location data in the response. The default is polyline encoding, which is compact but requires special client code to unpack. (We provide it in our JavaScript client library!) Set this parameter to `false` to switch the encoding to simple coordinate pairs like `[lon,lat]`, or `[lon,lat,elevation]`. See the description of the response format for more information. 
        :type points_encoded: bool
        :param ch_disable: Use this parameter in combination with one or more parameters from below. 
        :type ch_disable: bool
        :param weighting: Determines the way the \"best\" route is calculated. Besides `fastest` you can use `short_fastest` which finds a reasonable balance between the distance influence (`shortest`) and the time (`fastest`). You could also use `shortest` but is deprecated and not recommended for motor vehicles. All except `fastest` require `ch.disable=true`. 
        :type weighting: str
        :param heading: Favour a heading direction for a certain point. Specify either one heading for the start point or as many as there are points. In this case headings are associated by their order to the specific points. Headings are given as north based clockwise angle between 0 and 360 degree. This parameter also influences the tour generated with `algorithm=round_trip` and forces the initial direction.  Requires `ch.disable=true`. 
        :type heading: List[int]
        :param heading_penalty: Time penalty in seconds for not obeying a specified heading. Requires `ch.disable=true`. 
        :type heading_penalty: int
        :param pass_through: If `true`, u-turns are avoided at via-points with regard to the `heading_penalty`. Requires `ch.disable=true`. 
        :type pass_through: bool
        :param block_area: Block road access by specifying a point close to the road segment to be blocked, with the format `lat,lon`. You can also block all road segments crossing a geometric shape. Specify a circle using the format `lat,lon,radius`, or a polygon using the format `lat1,lon1,lat2,lon2,...,latN,lonN`. You can specify several shapes, separating them with `;`. Requires `ch.disable=true`. 
        :type block_area: str
        :param avoid: Specify which road classes and environments you would like to avoid.  Possible values are `motorway`, `steps`, `track`, `toll`, `ferry`, `tunnel` and `bridge`. Separate several values with `;`. Obviously not all the values make sense for all vehicle profiles e.g. `bike` is already forbidden on a `motorway`. Requires `ch.disable=true`. 
        :type avoid: str
        :param algorithm: Rather than looking for the shortest or fastest path, this parameter lets you solve two different problems related to routing: With `alternative_route`, we give you not one but several routes that are close to optimal, but not too similar to each other.  With `round_trip`, the route will get you back to where you started. This is meant for fun (think of a bike trip), so we will add some randomness. The `round_trip` option requires `ch.disable=true`. You can control both of these features with additional parameters, see below.  
        :type algorithm: str
        :param round_trip_distance: If `algorithm=round_trip`, this parameter configures approximative length of the resulting round trip. Requires `ch.disable=true`. 
        :type round_trip_distance: int
        :param round_trip_seed: If `algorithm=round_trip`, this sets the random seed. Change this to get a different tour for each value. 
        :type round_trip_seed: int
        :param alternative_route_max_paths: If `algorithm=alternative_route`, this parameter sets the number of maximum paths which should be calculated. Increasing can lead to worse alternatives. 
        :type alternative_route_max_paths: int
        :param alternative_route_max_weight_factor: If `algorithm=alternative_route`, this parameter sets the factor by which the alternatives routes can be longer than the optimal route. Increasing can lead to worse alternatives. 
        :type alternative_route_max_weight_factor: float
        :param alternative_route_max_share_factor: If `algorithm=alternative_route`, this parameter specifies how similar an alternative route can be to the optimal route. Increasing can lead to worse alternatives. 
        :type alternative_route_max_share_factor: float
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """ # noqa: E501

        _param = self._get_route_serialize(
            point=point,
            point_hint=point_hint,
            snap_prevention=snap_prevention,
            vehicle=vehicle,
            curbside=curbside,
            turn_costs=turn_costs,
            locale=locale,
            elevation=elevation,
            details=details,
            optimize=optimize,
            instructions=instructions,
            calc_points=calc_points,
            debug=debug,
            points_encoded=points_encoded,
            ch_disable=ch_disable,
            weighting=weighting,
            heading=heading,
            heading_penalty=heading_penalty,
            pass_through=pass_through,
            block_area=block_area,
            avoid=avoid,
            algorithm=algorithm,
            round_trip_distance=round_trip_distance,
            round_trip_seed=round_trip_seed,
            alternative_route_max_paths=alternative_route_max_paths,
            alternative_route_max_weight_factor=alternative_route_max_weight_factor,
            alternative_route_max_share_factor=alternative_route_max_share_factor,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "RouteResponse",
            '400': "GHError",
            '401': "GHError",
            '429': "GHError",
            '500': "GHError",
            '501': "GHError",
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        response_data.read()
        return self.api_client.response_deserialize(
            response_data=response_data,
            response_types_map=_response_types_map,
        ).data


    @validate_call
    def get_route_with_http_info(
        self,
        point: Annotated[List[StrictStr], Field(description="The points for which the route should be calculated. Format: `[latitude,longitude]`. Specify at least an origin and a destination. Via points are possible. The maximum number depends on your plan. ")],
        point_hint: Annotated[Optional[List[StrictStr]], Field(description="The `point_hint` is typically a road name to which the associated `point` parameter should be snapped to. Specify no `point_hint` parameter or the same number as you have `point` parameters. ")] = None,
        snap_prevention: Annotated[Optional[List[StrictStr]], Field(description="Optional parameter to avoid snapping to a certain road class or road environment. Currently supported values are `motorway`, `trunk`, `ferry`, `tunnel`, `bridge` and `ford`. Multiple values are specified like `snap_prevention=ferry&snap_prevention=motorway`. ")] = None,
        vehicle: Annotated[Optional[VehicleProfileId], Field(description="The vehicle profile for which the route should be calculated. ")] = None,
        curbside: Annotated[Optional[List[StrictStr]], Field(description="Optional parameter. It specifies on which side a point should be relative to the driver when she leaves/arrives at a start/target/via point. You need to specify this parameter for either none or all points. Only supported for motor vehicles and OpenStreetMap. ")] = None,
        turn_costs: Annotated[Optional[StrictBool], Field(description="Specifies if turn restrictions should be considered. Enabling this option increases the route computation time. Only supported for motor vehicles and OpenStreetMap. ")] = None,
        locale: Annotated[Optional[StrictStr], Field(description="The locale of the resulting turn instructions. E.g. `pt_PT` for Portuguese or `de` for German. ")] = None,
        elevation: Annotated[Optional[StrictBool], Field(description="If `true`, a third coordinate, the altitude, is included with all positions in the response. This changes the format of the `points` and `snapped_waypoints` fields of the response, in both their encodings. Unless you switch off the `points_encoded` parameter, you need special code on the client side that can handle three-dimensional coordinates. A request can fail if the vehicle profile does not support elevation. See the features object for every vehicle profile. ")] = None,
        details: Annotated[Optional[List[StrictStr]], Field(description="Optional parameter to retrieve path details. You can request additional details for the route: `street_name`,  `time`, `distance`, `max_speed`, `toll`, `road_class`, `road_class_link`, `road_access`, `road_environment`, `lanes`, and `surface`. Read more about the usage of path details [here](https://discuss.graphhopper.com/t/2539). ")] = None,
        optimize: Annotated[Optional[StrictStr], Field(description="Normally, the calculated route will visit the points in the order you specified them. If you have more than two points, you can set this parameter to `\"true\"` and the points may be re-ordered to minimize the total travel time. Keep in mind that the limits on the number of locations of the Route Optimization API applies, and the request costs more credits. ")] = None,
        instructions: Annotated[Optional[StrictBool], Field(description="If instructions should be calculated and returned ")] = None,
        calc_points: Annotated[Optional[StrictBool], Field(description="If the points for the route should be calculated at all. ")] = None,
        debug: Annotated[Optional[StrictBool], Field(description="If `true`, the output will be formatted. ")] = None,
        points_encoded: Annotated[Optional[StrictBool], Field(description="Allows changing the encoding of location data in the response. The default is polyline encoding, which is compact but requires special client code to unpack. (We provide it in our JavaScript client library!) Set this parameter to `false` to switch the encoding to simple coordinate pairs like `[lon,lat]`, or `[lon,lat,elevation]`. See the description of the response format for more information. ")] = None,
        ch_disable: Annotated[Optional[StrictBool], Field(description="Use this parameter in combination with one or more parameters from below. ")] = None,
        weighting: Annotated[Optional[StrictStr], Field(description="Determines the way the \"best\" route is calculated. Besides `fastest` you can use `short_fastest` which finds a reasonable balance between the distance influence (`shortest`) and the time (`fastest`). You could also use `shortest` but is deprecated and not recommended for motor vehicles. All except `fastest` require `ch.disable=true`. ")] = None,
        heading: Annotated[Optional[List[StrictInt]], Field(description="Favour a heading direction for a certain point. Specify either one heading for the start point or as many as there are points. In this case headings are associated by their order to the specific points. Headings are given as north based clockwise angle between 0 and 360 degree. This parameter also influences the tour generated with `algorithm=round_trip` and forces the initial direction.  Requires `ch.disable=true`. ")] = None,
        heading_penalty: Annotated[Optional[StrictInt], Field(description="Time penalty in seconds for not obeying a specified heading. Requires `ch.disable=true`. ")] = None,
        pass_through: Annotated[Optional[StrictBool], Field(description="If `true`, u-turns are avoided at via-points with regard to the `heading_penalty`. Requires `ch.disable=true`. ")] = None,
        block_area: Annotated[Optional[StrictStr], Field(description="Block road access by specifying a point close to the road segment to be blocked, with the format `lat,lon`. You can also block all road segments crossing a geometric shape. Specify a circle using the format `lat,lon,radius`, or a polygon using the format `lat1,lon1,lat2,lon2,...,latN,lonN`. You can specify several shapes, separating them with `;`. Requires `ch.disable=true`. ")] = None,
        avoid: Annotated[Optional[StrictStr], Field(description="Specify which road classes and environments you would like to avoid.  Possible values are `motorway`, `steps`, `track`, `toll`, `ferry`, `tunnel` and `bridge`. Separate several values with `;`. Obviously not all the values make sense for all vehicle profiles e.g. `bike` is already forbidden on a `motorway`. Requires `ch.disable=true`. ")] = None,
        algorithm: Annotated[Optional[StrictStr], Field(description="Rather than looking for the shortest or fastest path, this parameter lets you solve two different problems related to routing: With `alternative_route`, we give you not one but several routes that are close to optimal, but not too similar to each other.  With `round_trip`, the route will get you back to where you started. This is meant for fun (think of a bike trip), so we will add some randomness. The `round_trip` option requires `ch.disable=true`. You can control both of these features with additional parameters, see below.  ")] = None,
        round_trip_distance: Annotated[Optional[StrictInt], Field(description="If `algorithm=round_trip`, this parameter configures approximative length of the resulting round trip. Requires `ch.disable=true`. ")] = None,
        round_trip_seed: Annotated[Optional[StrictInt], Field(description="If `algorithm=round_trip`, this sets the random seed. Change this to get a different tour for each value. ")] = None,
        alternative_route_max_paths: Annotated[Optional[StrictInt], Field(description="If `algorithm=alternative_route`, this parameter sets the number of maximum paths which should be calculated. Increasing can lead to worse alternatives. ")] = None,
        alternative_route_max_weight_factor: Annotated[Optional[Union[StrictFloat, StrictInt]], Field(description="If `algorithm=alternative_route`, this parameter sets the factor by which the alternatives routes can be longer than the optimal route. Increasing can lead to worse alternatives. ")] = None,
        alternative_route_max_share_factor: Annotated[Optional[Union[StrictFloat, StrictInt]], Field(description="If `algorithm=alternative_route`, this parameter specifies how similar an alternative route can be to the optimal route. Increasing can lead to worse alternatives. ")] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)],
                Annotated[StrictFloat, Field(gt=0)]
            ]
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> ApiResponse[RouteResponse]:
        """GET Route Endpoint

        The GET request is the most simple one: just specify the parameter in the URL and you are done. Can be tried directly in every browser. 

        :param point: The points for which the route should be calculated. Format: `[latitude,longitude]`. Specify at least an origin and a destination. Via points are possible. The maximum number depends on your plan.  (required)
        :type point: List[str]
        :param point_hint: The `point_hint` is typically a road name to which the associated `point` parameter should be snapped to. Specify no `point_hint` parameter or the same number as you have `point` parameters. 
        :type point_hint: List[str]
        :param snap_prevention: Optional parameter to avoid snapping to a certain road class or road environment. Currently supported values are `motorway`, `trunk`, `ferry`, `tunnel`, `bridge` and `ford`. Multiple values are specified like `snap_prevention=ferry&snap_prevention=motorway`. 
        :type snap_prevention: List[str]
        :param vehicle: The vehicle profile for which the route should be calculated. 
        :type vehicle: VehicleProfileId
        :param curbside: Optional parameter. It specifies on which side a point should be relative to the driver when she leaves/arrives at a start/target/via point. You need to specify this parameter for either none or all points. Only supported for motor vehicles and OpenStreetMap. 
        :type curbside: List[str]
        :param turn_costs: Specifies if turn restrictions should be considered. Enabling this option increases the route computation time. Only supported for motor vehicles and OpenStreetMap. 
        :type turn_costs: bool
        :param locale: The locale of the resulting turn instructions. E.g. `pt_PT` for Portuguese or `de` for German. 
        :type locale: str
        :param elevation: If `true`, a third coordinate, the altitude, is included with all positions in the response. This changes the format of the `points` and `snapped_waypoints` fields of the response, in both their encodings. Unless you switch off the `points_encoded` parameter, you need special code on the client side that can handle three-dimensional coordinates. A request can fail if the vehicle profile does not support elevation. See the features object for every vehicle profile. 
        :type elevation: bool
        :param details: Optional parameter to retrieve path details. You can request additional details for the route: `street_name`,  `time`, `distance`, `max_speed`, `toll`, `road_class`, `road_class_link`, `road_access`, `road_environment`, `lanes`, and `surface`. Read more about the usage of path details [here](https://discuss.graphhopper.com/t/2539). 
        :type details: List[str]
        :param optimize: Normally, the calculated route will visit the points in the order you specified them. If you have more than two points, you can set this parameter to `\"true\"` and the points may be re-ordered to minimize the total travel time. Keep in mind that the limits on the number of locations of the Route Optimization API applies, and the request costs more credits. 
        :type optimize: str
        :param instructions: If instructions should be calculated and returned 
        :type instructions: bool
        :param calc_points: If the points for the route should be calculated at all. 
        :type calc_points: bool
        :param debug: If `true`, the output will be formatted. 
        :type debug: bool
        :param points_encoded: Allows changing the encoding of location data in the response. The default is polyline encoding, which is compact but requires special client code to unpack. (We provide it in our JavaScript client library!) Set this parameter to `false` to switch the encoding to simple coordinate pairs like `[lon,lat]`, or `[lon,lat,elevation]`. See the description of the response format for more information. 
        :type points_encoded: bool
        :param ch_disable: Use this parameter in combination with one or more parameters from below. 
        :type ch_disable: bool
        :param weighting: Determines the way the \"best\" route is calculated. Besides `fastest` you can use `short_fastest` which finds a reasonable balance between the distance influence (`shortest`) and the time (`fastest`). You could also use `shortest` but is deprecated and not recommended for motor vehicles. All except `fastest` require `ch.disable=true`. 
        :type weighting: str
        :param heading: Favour a heading direction for a certain point. Specify either one heading for the start point or as many as there are points. In this case headings are associated by their order to the specific points. Headings are given as north based clockwise angle between 0 and 360 degree. This parameter also influences the tour generated with `algorithm=round_trip` and forces the initial direction.  Requires `ch.disable=true`. 
        :type heading: List[int]
        :param heading_penalty: Time penalty in seconds for not obeying a specified heading. Requires `ch.disable=true`. 
        :type heading_penalty: int
        :param pass_through: If `true`, u-turns are avoided at via-points with regard to the `heading_penalty`. Requires `ch.disable=true`. 
        :type pass_through: bool
        :param block_area: Block road access by specifying a point close to the road segment to be blocked, with the format `lat,lon`. You can also block all road segments crossing a geometric shape. Specify a circle using the format `lat,lon,radius`, or a polygon using the format `lat1,lon1,lat2,lon2,...,latN,lonN`. You can specify several shapes, separating them with `;`. Requires `ch.disable=true`. 
        :type block_area: str
        :param avoid: Specify which road classes and environments you would like to avoid.  Possible values are `motorway`, `steps`, `track`, `toll`, `ferry`, `tunnel` and `bridge`. Separate several values with `;`. Obviously not all the values make sense for all vehicle profiles e.g. `bike` is already forbidden on a `motorway`. Requires `ch.disable=true`. 
        :type avoid: str
        :param algorithm: Rather than looking for the shortest or fastest path, this parameter lets you solve two different problems related to routing: With `alternative_route`, we give you not one but several routes that are close to optimal, but not too similar to each other.  With `round_trip`, the route will get you back to where you started. This is meant for fun (think of a bike trip), so we will add some randomness. The `round_trip` option requires `ch.disable=true`. You can control both of these features with additional parameters, see below.  
        :type algorithm: str
        :param round_trip_distance: If `algorithm=round_trip`, this parameter configures approximative length of the resulting round trip. Requires `ch.disable=true`. 
        :type round_trip_distance: int
        :param round_trip_seed: If `algorithm=round_trip`, this sets the random seed. Change this to get a different tour for each value. 
        :type round_trip_seed: int
        :param alternative_route_max_paths: If `algorithm=alternative_route`, this parameter sets the number of maximum paths which should be calculated. Increasing can lead to worse alternatives. 
        :type alternative_route_max_paths: int
        :param alternative_route_max_weight_factor: If `algorithm=alternative_route`, this parameter sets the factor by which the alternatives routes can be longer than the optimal route. Increasing can lead to worse alternatives. 
        :type alternative_route_max_weight_factor: float
        :param alternative_route_max_share_factor: If `algorithm=alternative_route`, this parameter specifies how similar an alternative route can be to the optimal route. Increasing can lead to worse alternatives. 
        :type alternative_route_max_share_factor: float
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """ # noqa: E501

        _param = self._get_route_serialize(
            point=point,
            point_hint=point_hint,
            snap_prevention=snap_prevention,
            vehicle=vehicle,
            curbside=curbside,
            turn_costs=turn_costs,
            locale=locale,
            elevation=elevation,
            details=details,
            optimize=optimize,
            instructions=instructions,
            calc_points=calc_points,
            debug=debug,
            points_encoded=points_encoded,
            ch_disable=ch_disable,
            weighting=weighting,
            heading=heading,
            heading_penalty=heading_penalty,
            pass_through=pass_through,
            block_area=block_area,
            avoid=avoid,
            algorithm=algorithm,
            round_trip_distance=round_trip_distance,
            round_trip_seed=round_trip_seed,
            alternative_route_max_paths=alternative_route_max_paths,
            alternative_route_max_weight_factor=alternative_route_max_weight_factor,
            alternative_route_max_share_factor=alternative_route_max_share_factor,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "RouteResponse",
            '400': "GHError",
            '401': "GHError",
            '429': "GHError",
            '500': "GHError",
            '501': "GHError",
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        response_data.read()
        return self.api_client.response_deserialize(
            response_data=response_data,
            response_types_map=_response_types_map,
        )


    @validate_call
    def get_route_without_preload_content(
        self,
        point: Annotated[List[StrictStr], Field(description="The points for which the route should be calculated. Format: `[latitude,longitude]`. Specify at least an origin and a destination. Via points are possible. The maximum number depends on your plan. ")],
        point_hint: Annotated[Optional[List[StrictStr]], Field(description="The `point_hint` is typically a road name to which the associated `point` parameter should be snapped to. Specify no `point_hint` parameter or the same number as you have `point` parameters. ")] = None,
        snap_prevention: Annotated[Optional[List[StrictStr]], Field(description="Optional parameter to avoid snapping to a certain road class or road environment. Currently supported values are `motorway`, `trunk`, `ferry`, `tunnel`, `bridge` and `ford`. Multiple values are specified like `snap_prevention=ferry&snap_prevention=motorway`. ")] = None,
        vehicle: Annotated[Optional[VehicleProfileId], Field(description="The vehicle profile for which the route should be calculated. ")] = None,
        curbside: Annotated[Optional[List[StrictStr]], Field(description="Optional parameter. It specifies on which side a point should be relative to the driver when she leaves/arrives at a start/target/via point. You need to specify this parameter for either none or all points. Only supported for motor vehicles and OpenStreetMap. ")] = None,
        turn_costs: Annotated[Optional[StrictBool], Field(description="Specifies if turn restrictions should be considered. Enabling this option increases the route computation time. Only supported for motor vehicles and OpenStreetMap. ")] = None,
        locale: Annotated[Optional[StrictStr], Field(description="The locale of the resulting turn instructions. E.g. `pt_PT` for Portuguese or `de` for German. ")] = None,
        elevation: Annotated[Optional[StrictBool], Field(description="If `true`, a third coordinate, the altitude, is included with all positions in the response. This changes the format of the `points` and `snapped_waypoints` fields of the response, in both their encodings. Unless you switch off the `points_encoded` parameter, you need special code on the client side that can handle three-dimensional coordinates. A request can fail if the vehicle profile does not support elevation. See the features object for every vehicle profile. ")] = None,
        details: Annotated[Optional[List[StrictStr]], Field(description="Optional parameter to retrieve path details. You can request additional details for the route: `street_name`,  `time`, `distance`, `max_speed`, `toll`, `road_class`, `road_class_link`, `road_access`, `road_environment`, `lanes`, and `surface`. Read more about the usage of path details [here](https://discuss.graphhopper.com/t/2539). ")] = None,
        optimize: Annotated[Optional[StrictStr], Field(description="Normally, the calculated route will visit the points in the order you specified them. If you have more than two points, you can set this parameter to `\"true\"` and the points may be re-ordered to minimize the total travel time. Keep in mind that the limits on the number of locations of the Route Optimization API applies, and the request costs more credits. ")] = None,
        instructions: Annotated[Optional[StrictBool], Field(description="If instructions should be calculated and returned ")] = None,
        calc_points: Annotated[Optional[StrictBool], Field(description="If the points for the route should be calculated at all. ")] = None,
        debug: Annotated[Optional[StrictBool], Field(description="If `true`, the output will be formatted. ")] = None,
        points_encoded: Annotated[Optional[StrictBool], Field(description="Allows changing the encoding of location data in the response. The default is polyline encoding, which is compact but requires special client code to unpack. (We provide it in our JavaScript client library!) Set this parameter to `false` to switch the encoding to simple coordinate pairs like `[lon,lat]`, or `[lon,lat,elevation]`. See the description of the response format for more information. ")] = None,
        ch_disable: Annotated[Optional[StrictBool], Field(description="Use this parameter in combination with one or more parameters from below. ")] = None,
        weighting: Annotated[Optional[StrictStr], Field(description="Determines the way the \"best\" route is calculated. Besides `fastest` you can use `short_fastest` which finds a reasonable balance between the distance influence (`shortest`) and the time (`fastest`). You could also use `shortest` but is deprecated and not recommended for motor vehicles. All except `fastest` require `ch.disable=true`. ")] = None,
        heading: Annotated[Optional[List[StrictInt]], Field(description="Favour a heading direction for a certain point. Specify either one heading for the start point or as many as there are points. In this case headings are associated by their order to the specific points. Headings are given as north based clockwise angle between 0 and 360 degree. This parameter also influences the tour generated with `algorithm=round_trip` and forces the initial direction.  Requires `ch.disable=true`. ")] = None,
        heading_penalty: Annotated[Optional[StrictInt], Field(description="Time penalty in seconds for not obeying a specified heading. Requires `ch.disable=true`. ")] = None,
        pass_through: Annotated[Optional[StrictBool], Field(description="If `true`, u-turns are avoided at via-points with regard to the `heading_penalty`. Requires `ch.disable=true`. ")] = None,
        block_area: Annotated[Optional[StrictStr], Field(description="Block road access by specifying a point close to the road segment to be blocked, with the format `lat,lon`. You can also block all road segments crossing a geometric shape. Specify a circle using the format `lat,lon,radius`, or a polygon using the format `lat1,lon1,lat2,lon2,...,latN,lonN`. You can specify several shapes, separating them with `;`. Requires `ch.disable=true`. ")] = None,
        avoid: Annotated[Optional[StrictStr], Field(description="Specify which road classes and environments you would like to avoid.  Possible values are `motorway`, `steps`, `track`, `toll`, `ferry`, `tunnel` and `bridge`. Separate several values with `;`. Obviously not all the values make sense for all vehicle profiles e.g. `bike` is already forbidden on a `motorway`. Requires `ch.disable=true`. ")] = None,
        algorithm: Annotated[Optional[StrictStr], Field(description="Rather than looking for the shortest or fastest path, this parameter lets you solve two different problems related to routing: With `alternative_route`, we give you not one but several routes that are close to optimal, but not too similar to each other.  With `round_trip`, the route will get you back to where you started. This is meant for fun (think of a bike trip), so we will add some randomness. The `round_trip` option requires `ch.disable=true`. You can control both of these features with additional parameters, see below.  ")] = None,
        round_trip_distance: Annotated[Optional[StrictInt], Field(description="If `algorithm=round_trip`, this parameter configures approximative length of the resulting round trip. Requires `ch.disable=true`. ")] = None,
        round_trip_seed: Annotated[Optional[StrictInt], Field(description="If `algorithm=round_trip`, this sets the random seed. Change this to get a different tour for each value. ")] = None,
        alternative_route_max_paths: Annotated[Optional[StrictInt], Field(description="If `algorithm=alternative_route`, this parameter sets the number of maximum paths which should be calculated. Increasing can lead to worse alternatives. ")] = None,
        alternative_route_max_weight_factor: Annotated[Optional[Union[StrictFloat, StrictInt]], Field(description="If `algorithm=alternative_route`, this parameter sets the factor by which the alternatives routes can be longer than the optimal route. Increasing can lead to worse alternatives. ")] = None,
        alternative_route_max_share_factor: Annotated[Optional[Union[StrictFloat, StrictInt]], Field(description="If `algorithm=alternative_route`, this parameter specifies how similar an alternative route can be to the optimal route. Increasing can lead to worse alternatives. ")] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)],
                Annotated[StrictFloat, Field(gt=0)]
            ]
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> RESTResponseType:
        """GET Route Endpoint

        The GET request is the most simple one: just specify the parameter in the URL and you are done. Can be tried directly in every browser. 

        :param point: The points for which the route should be calculated. Format: `[latitude,longitude]`. Specify at least an origin and a destination. Via points are possible. The maximum number depends on your plan.  (required)
        :type point: List[str]
        :param point_hint: The `point_hint` is typically a road name to which the associated `point` parameter should be snapped to. Specify no `point_hint` parameter or the same number as you have `point` parameters. 
        :type point_hint: List[str]
        :param snap_prevention: Optional parameter to avoid snapping to a certain road class or road environment. Currently supported values are `motorway`, `trunk`, `ferry`, `tunnel`, `bridge` and `ford`. Multiple values are specified like `snap_prevention=ferry&snap_prevention=motorway`. 
        :type snap_prevention: List[str]
        :param vehicle: The vehicle profile for which the route should be calculated. 
        :type vehicle: VehicleProfileId
        :param curbside: Optional parameter. It specifies on which side a point should be relative to the driver when she leaves/arrives at a start/target/via point. You need to specify this parameter for either none or all points. Only supported for motor vehicles and OpenStreetMap. 
        :type curbside: List[str]
        :param turn_costs: Specifies if turn restrictions should be considered. Enabling this option increases the route computation time. Only supported for motor vehicles and OpenStreetMap. 
        :type turn_costs: bool
        :param locale: The locale of the resulting turn instructions. E.g. `pt_PT` for Portuguese or `de` for German. 
        :type locale: str
        :param elevation: If `true`, a third coordinate, the altitude, is included with all positions in the response. This changes the format of the `points` and `snapped_waypoints` fields of the response, in both their encodings. Unless you switch off the `points_encoded` parameter, you need special code on the client side that can handle three-dimensional coordinates. A request can fail if the vehicle profile does not support elevation. See the features object for every vehicle profile. 
        :type elevation: bool
        :param details: Optional parameter to retrieve path details. You can request additional details for the route: `street_name`,  `time`, `distance`, `max_speed`, `toll`, `road_class`, `road_class_link`, `road_access`, `road_environment`, `lanes`, and `surface`. Read more about the usage of path details [here](https://discuss.graphhopper.com/t/2539). 
        :type details: List[str]
        :param optimize: Normally, the calculated route will visit the points in the order you specified them. If you have more than two points, you can set this parameter to `\"true\"` and the points may be re-ordered to minimize the total travel time. Keep in mind that the limits on the number of locations of the Route Optimization API applies, and the request costs more credits. 
        :type optimize: str
        :param instructions: If instructions should be calculated and returned 
        :type instructions: bool
        :param calc_points: If the points for the route should be calculated at all. 
        :type calc_points: bool
        :param debug: If `true`, the output will be formatted. 
        :type debug: bool
        :param points_encoded: Allows changing the encoding of location data in the response. The default is polyline encoding, which is compact but requires special client code to unpack. (We provide it in our JavaScript client library!) Set this parameter to `false` to switch the encoding to simple coordinate pairs like `[lon,lat]`, or `[lon,lat,elevation]`. See the description of the response format for more information. 
        :type points_encoded: bool
        :param ch_disable: Use this parameter in combination with one or more parameters from below. 
        :type ch_disable: bool
        :param weighting: Determines the way the \"best\" route is calculated. Besides `fastest` you can use `short_fastest` which finds a reasonable balance between the distance influence (`shortest`) and the time (`fastest`). You could also use `shortest` but is deprecated and not recommended for motor vehicles. All except `fastest` require `ch.disable=true`. 
        :type weighting: str
        :param heading: Favour a heading direction for a certain point. Specify either one heading for the start point or as many as there are points. In this case headings are associated by their order to the specific points. Headings are given as north based clockwise angle between 0 and 360 degree. This parameter also influences the tour generated with `algorithm=round_trip` and forces the initial direction.  Requires `ch.disable=true`. 
        :type heading: List[int]
        :param heading_penalty: Time penalty in seconds for not obeying a specified heading. Requires `ch.disable=true`. 
        :type heading_penalty: int
        :param pass_through: If `true`, u-turns are avoided at via-points with regard to the `heading_penalty`. Requires `ch.disable=true`. 
        :type pass_through: bool
        :param block_area: Block road access by specifying a point close to the road segment to be blocked, with the format `lat,lon`. You can also block all road segments crossing a geometric shape. Specify a circle using the format `lat,lon,radius`, or a polygon using the format `lat1,lon1,lat2,lon2,...,latN,lonN`. You can specify several shapes, separating them with `;`. Requires `ch.disable=true`. 
        :type block_area: str
        :param avoid: Specify which road classes and environments you would like to avoid.  Possible values are `motorway`, `steps`, `track`, `toll`, `ferry`, `tunnel` and `bridge`. Separate several values with `;`. Obviously not all the values make sense for all vehicle profiles e.g. `bike` is already forbidden on a `motorway`. Requires `ch.disable=true`. 
        :type avoid: str
        :param algorithm: Rather than looking for the shortest or fastest path, this parameter lets you solve two different problems related to routing: With `alternative_route`, we give you not one but several routes that are close to optimal, but not too similar to each other.  With `round_trip`, the route will get you back to where you started. This is meant for fun (think of a bike trip), so we will add some randomness. The `round_trip` option requires `ch.disable=true`. You can control both of these features with additional parameters, see below.  
        :type algorithm: str
        :param round_trip_distance: If `algorithm=round_trip`, this parameter configures approximative length of the resulting round trip. Requires `ch.disable=true`. 
        :type round_trip_distance: int
        :param round_trip_seed: If `algorithm=round_trip`, this sets the random seed. Change this to get a different tour for each value. 
        :type round_trip_seed: int
        :param alternative_route_max_paths: If `algorithm=alternative_route`, this parameter sets the number of maximum paths which should be calculated. Increasing can lead to worse alternatives. 
        :type alternative_route_max_paths: int
        :param alternative_route_max_weight_factor: If `algorithm=alternative_route`, this parameter sets the factor by which the alternatives routes can be longer than the optimal route. Increasing can lead to worse alternatives. 
        :type alternative_route_max_weight_factor: float
        :param alternative_route_max_share_factor: If `algorithm=alternative_route`, this parameter specifies how similar an alternative route can be to the optimal route. Increasing can lead to worse alternatives. 
        :type alternative_route_max_share_factor: float
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """ # noqa: E501

        _param = self._get_route_serialize(
            point=point,
            point_hint=point_hint,
            snap_prevention=snap_prevention,
            vehicle=vehicle,
            curbside=curbside,
            turn_costs=turn_costs,
            locale=locale,
            elevation=elevation,
            details=details,
            optimize=optimize,
            instructions=instructions,
            calc_points=calc_points,
            debug=debug,
            points_encoded=points_encoded,
            ch_disable=ch_disable,
            weighting=weighting,
            heading=heading,
            heading_penalty=heading_penalty,
            pass_through=pass_through,
            block_area=block_area,
            avoid=avoid,
            algorithm=algorithm,
            round_trip_distance=round_trip_distance,
            round_trip_seed=round_trip_seed,
            alternative_route_max_paths=alternative_route_max_paths,
            alternative_route_max_weight_factor=alternative_route_max_weight_factor,
            alternative_route_max_share_factor=alternative_route_max_share_factor,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "RouteResponse",
            '400': "GHError",
            '401': "GHError",
            '429': "GHError",
            '500': "GHError",
            '501': "GHError",
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        return response_data.response


    def _get_route_serialize(
        self,
        point,
        point_hint,
        snap_prevention,
        vehicle,
        curbside,
        turn_costs,
        locale,
        elevation,
        details,
        optimize,
        instructions,
        calc_points,
        debug,
        points_encoded,
        ch_disable,
        weighting,
        heading,
        heading_penalty,
        pass_through,
        block_area,
        avoid,
        algorithm,
        round_trip_distance,
        round_trip_seed,
        alternative_route_max_paths,
        alternative_route_max_weight_factor,
        alternative_route_max_share_factor,
        _request_auth,
        _content_type,
        _headers,
        _host_index,
    ) -> RequestSerialized:

        _host = None

        _collection_formats: Dict[str, str] = {
            'point': 'multi',
            'point_hint': 'multi',
            'snap_prevention': 'multi',
            'curbside': 'multi',
            'details': 'multi',
            'heading': 'multi',
        }

        _path_params: Dict[str, str] = {}
        _query_params: List[Tuple[str, str]] = []
        _header_params: Dict[str, Optional[str]] = _headers or {}
        _form_params: List[Tuple[str, str]] = []
        _files: Dict[
            str, Union[str, bytes, List[str], List[bytes], List[Tuple[str, bytes]]]
        ] = {}
        _body_params: Optional[bytes] = None

        # process the path parameters
        # process the query parameters
        if point is not None:
            
            _query_params.append(('point', point))
            
        if point_hint is not None:
            
            _query_params.append(('point_hint', point_hint))
            
        if snap_prevention is not None:
            
            _query_params.append(('snap_prevention', snap_prevention))
            
        if vehicle is not None:
            
            _query_params.append(('vehicle', vehicle.value))
            
        if curbside is not None:
            
            _query_params.append(('curbside', curbside))
            
        if turn_costs is not None:
            
            _query_params.append(('turn_costs', turn_costs))
            
        if locale is not None:
            
            _query_params.append(('locale', locale))
            
        if elevation is not None:
            
            _query_params.append(('elevation', elevation))
            
        if details is not None:
            
            _query_params.append(('details', details))
            
        if optimize is not None:
            
            _query_params.append(('optimize', optimize))
            
        if instructions is not None:
            
            _query_params.append(('instructions', instructions))
            
        if calc_points is not None:
            
            _query_params.append(('calc_points', calc_points))
            
        if debug is not None:
            
            _query_params.append(('debug', debug))
            
        if points_encoded is not None:
            
            _query_params.append(('points_encoded', points_encoded))
            
        if ch_disable is not None:
            
            _query_params.append(('ch.disable', ch_disable))
            
        if weighting is not None:
            
            _query_params.append(('weighting', weighting))
            
        if heading is not None:
            
            _query_params.append(('heading', heading))
            
        if heading_penalty is not None:
            
            _query_params.append(('heading_penalty', heading_penalty))
            
        if pass_through is not None:
            
            _query_params.append(('pass_through', pass_through))
            
        if block_area is not None:
            
            _query_params.append(('block_area', block_area))
            
        if avoid is not None:
            
            _query_params.append(('avoid', avoid))
            
        if algorithm is not None:
            
            _query_params.append(('algorithm', algorithm))
            
        if round_trip_distance is not None:
            
            _query_params.append(('round_trip.distance', round_trip_distance))
            
        if round_trip_seed is not None:
            
            _query_params.append(('round_trip.seed', round_trip_seed))
            
        if alternative_route_max_paths is not None:
            
            _query_params.append(('alternative_route.max_paths', alternative_route_max_paths))
            
        if alternative_route_max_weight_factor is not None:
            
            _query_params.append(('alternative_route.max_weight_factor', alternative_route_max_weight_factor))
            
        if alternative_route_max_share_factor is not None:
            
            _query_params.append(('alternative_route.max_share_factor', alternative_route_max_share_factor))
            
        # process the header parameters
        # process the form parameters
        # process the body parameter


        # set the HTTP header `Accept`
        if 'Accept' not in _header_params:
            _header_params['Accept'] = self.api_client.select_header_accept(
                [
                    'application/json'
                ]
            )


        # authentication setting
        _auth_settings: List[str] = [
            'api_key'
        ]

        return self.api_client.param_serialize(
            method='GET',
            resource_path='/route',
            path_params=_path_params,
            query_params=_query_params,
            header_params=_header_params,
            body=_body_params,
            post_params=_form_params,
            files=_files,
            auth_settings=_auth_settings,
            collection_formats=_collection_formats,
            _host=_host,
            _request_auth=_request_auth
        )




    @validate_call
    def post_route(
        self,
        route_request: Optional[RouteRequest] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)],
                Annotated[StrictFloat, Field(gt=0)]
            ]
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> RouteResponse:
        """POST Route Endpoint

        Please see the [GET endpoint](#operation/getRoute) for a simpler method on how to get started. If you are familiar with POST requests and JSON then do not hesitate to continue here.  Especially when you use many locations you should get familiar with this POST endpoint as the GET endpoint has an URL length limitation. Additionally the request of this POST endpoint can be compressed and can slightly speed up the request.  To do a request you send JSON data. Both request scenarios GET and POST are identical except that all singular parameter names are named as their plural for a POST request. The effected parameters are: `points`, `point_hints` and `snap_preventions`.  **Please note that in opposite to the GET endpoint, points are specified in the order of `longitude, latitude`**.  For example `point=10,11&point=20,22` will be converted to the `points` array (plural): ```json { \"points\": [[11,10], [22,20]] } ``` Note again that also the order changes from `[latitude,longitude]` to `[longitude,latitude]` similar to [GeoJson](http://geojson.org/geojson-spec.html#examples).  Example: ```bash curl -X POST -H \"Content-Type: application/json\" \"https://graphhopper.com/api/1/route?key=[YOUR_KEY]\" -d '{\"elevation\":false,\"points\":[[-0.087891,51.534377],[-0.090637,51.467697]],\"vehicle\":\"car\"}' ``` 

        :param route_request:
        :type route_request: RouteRequest
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """ # noqa: E501

        _param = self._post_route_serialize(
            route_request=route_request,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "RouteResponse",
            '400': "GHError",
            '401': "GHError",
            '429': "GHError",
            '500': "GHError",
            '501': "GHError",
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        response_data.read()
        return self.api_client.response_deserialize(
            response_data=response_data,
            response_types_map=_response_types_map,
        ).data


    @validate_call
    def post_route_with_http_info(
        self,
        route_request: Optional[RouteRequest] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)],
                Annotated[StrictFloat, Field(gt=0)]
            ]
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> ApiResponse[RouteResponse]:
        """POST Route Endpoint

        Please see the [GET endpoint](#operation/getRoute) for a simpler method on how to get started. If you are familiar with POST requests and JSON then do not hesitate to continue here.  Especially when you use many locations you should get familiar with this POST endpoint as the GET endpoint has an URL length limitation. Additionally the request of this POST endpoint can be compressed and can slightly speed up the request.  To do a request you send JSON data. Both request scenarios GET and POST are identical except that all singular parameter names are named as their plural for a POST request. The effected parameters are: `points`, `point_hints` and `snap_preventions`.  **Please note that in opposite to the GET endpoint, points are specified in the order of `longitude, latitude`**.  For example `point=10,11&point=20,22` will be converted to the `points` array (plural): ```json { \"points\": [[11,10], [22,20]] } ``` Note again that also the order changes from `[latitude,longitude]` to `[longitude,latitude]` similar to [GeoJson](http://geojson.org/geojson-spec.html#examples).  Example: ```bash curl -X POST -H \"Content-Type: application/json\" \"https://graphhopper.com/api/1/route?key=[YOUR_KEY]\" -d '{\"elevation\":false,\"points\":[[-0.087891,51.534377],[-0.090637,51.467697]],\"vehicle\":\"car\"}' ``` 

        :param route_request:
        :type route_request: RouteRequest
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """ # noqa: E501

        _param = self._post_route_serialize(
            route_request=route_request,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "RouteResponse",
            '400': "GHError",
            '401': "GHError",
            '429': "GHError",
            '500': "GHError",
            '501': "GHError",
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        response_data.read()
        return self.api_client.response_deserialize(
            response_data=response_data,
            response_types_map=_response_types_map,
        )


    @validate_call
    def post_route_without_preload_content(
        self,
        route_request: Optional[RouteRequest] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)],
                Annotated[StrictFloat, Field(gt=0)]
            ]
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> RESTResponseType:
        """POST Route Endpoint

        Please see the [GET endpoint](#operation/getRoute) for a simpler method on how to get started. If you are familiar with POST requests and JSON then do not hesitate to continue here.  Especially when you use many locations you should get familiar with this POST endpoint as the GET endpoint has an URL length limitation. Additionally the request of this POST endpoint can be compressed and can slightly speed up the request.  To do a request you send JSON data. Both request scenarios GET and POST are identical except that all singular parameter names are named as their plural for a POST request. The effected parameters are: `points`, `point_hints` and `snap_preventions`.  **Please note that in opposite to the GET endpoint, points are specified in the order of `longitude, latitude`**.  For example `point=10,11&point=20,22` will be converted to the `points` array (plural): ```json { \"points\": [[11,10], [22,20]] } ``` Note again that also the order changes from `[latitude,longitude]` to `[longitude,latitude]` similar to [GeoJson](http://geojson.org/geojson-spec.html#examples).  Example: ```bash curl -X POST -H \"Content-Type: application/json\" \"https://graphhopper.com/api/1/route?key=[YOUR_KEY]\" -d '{\"elevation\":false,\"points\":[[-0.087891,51.534377],[-0.090637,51.467697]],\"vehicle\":\"car\"}' ``` 

        :param route_request:
        :type route_request: RouteRequest
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """ # noqa: E501

        _param = self._post_route_serialize(
            route_request=route_request,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "RouteResponse",
            '400': "GHError",
            '401': "GHError",
            '429': "GHError",
            '500': "GHError",
            '501': "GHError",
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        return response_data.response


    def _post_route_serialize(
        self,
        route_request,
        _request_auth,
        _content_type,
        _headers,
        _host_index,
    ) -> RequestSerialized:

        _host = None

        _collection_formats: Dict[str, str] = {
        }

        _path_params: Dict[str, str] = {}
        _query_params: List[Tuple[str, str]] = []
        _header_params: Dict[str, Optional[str]] = _headers or {}
        _form_params: List[Tuple[str, str]] = []
        _files: Dict[
            str, Union[str, bytes, List[str], List[bytes], List[Tuple[str, bytes]]]
        ] = {}
        _body_params: Optional[bytes] = None

        # process the path parameters
        # process the query parameters
        # process the header parameters
        # process the form parameters
        # process the body parameter
        if route_request is not None:
            _body_params = route_request


        # set the HTTP header `Accept`
        if 'Accept' not in _header_params:
            _header_params['Accept'] = self.api_client.select_header_accept(
                [
                    'application/json'
                ]
            )

        # set the HTTP header `Content-Type`
        if _content_type:
            _header_params['Content-Type'] = _content_type
        else:
            _default_content_type = (
                self.api_client.select_header_content_type(
                    [
                        'application/json'
                    ]
                )
            )
            if _default_content_type is not None:
                _header_params['Content-Type'] = _default_content_type

        # authentication setting
        _auth_settings: List[str] = [
            'api_key'
        ]

        return self.api_client.param_serialize(
            method='POST',
            resource_path='/route',
            path_params=_path_params,
            query_params=_query_params,
            header_params=_header_params,
            body=_body_params,
            post_params=_form_params,
            files=_files,
            auth_settings=_auth_settings,
            collection_formats=_collection_formats,
            _host=_host,
            _request_auth=_request_auth
        )




    @validate_call
    def route_info_get(
        self,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)],
                Annotated[StrictFloat, Field(gt=0)]
            ]
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> InfoResponse:
        """Coverage information

        Use this to find out details about the supported vehicle profiles and features, or if you just need to ping the server. 

        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """ # noqa: E501

        _param = self._route_info_get_serialize(
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "InfoResponse",
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        response_data.read()
        return self.api_client.response_deserialize(
            response_data=response_data,
            response_types_map=_response_types_map,
        ).data


    @validate_call
    def route_info_get_with_http_info(
        self,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)],
                Annotated[StrictFloat, Field(gt=0)]
            ]
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> ApiResponse[InfoResponse]:
        """Coverage information

        Use this to find out details about the supported vehicle profiles and features, or if you just need to ping the server. 

        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """ # noqa: E501

        _param = self._route_info_get_serialize(
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "InfoResponse",
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        response_data.read()
        return self.api_client.response_deserialize(
            response_data=response_data,
            response_types_map=_response_types_map,
        )


    @validate_call
    def route_info_get_without_preload_content(
        self,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)],
                Annotated[StrictFloat, Field(gt=0)]
            ]
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> RESTResponseType:
        """Coverage information

        Use this to find out details about the supported vehicle profiles and features, or if you just need to ping the server. 

        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """ # noqa: E501

        _param = self._route_info_get_serialize(
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "InfoResponse",
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        return response_data.response


    def _route_info_get_serialize(
        self,
        _request_auth,
        _content_type,
        _headers,
        _host_index,
    ) -> RequestSerialized:

        _host = None

        _collection_formats: Dict[str, str] = {
        }

        _path_params: Dict[str, str] = {}
        _query_params: List[Tuple[str, str]] = []
        _header_params: Dict[str, Optional[str]] = _headers or {}
        _form_params: List[Tuple[str, str]] = []
        _files: Dict[
            str, Union[str, bytes, List[str], List[bytes], List[Tuple[str, bytes]]]
        ] = {}
        _body_params: Optional[bytes] = None

        # process the path parameters
        # process the query parameters
        # process the header parameters
        # process the form parameters
        # process the body parameter


        # set the HTTP header `Accept`
        if 'Accept' not in _header_params:
            _header_params['Accept'] = self.api_client.select_header_accept(
                [
                    'application/json'
                ]
            )


        # authentication setting
        _auth_settings: List[str] = [
            'api_key'
        ]

        return self.api_client.param_serialize(
            method='GET',
            resource_path='/route/info',
            path_params=_path_params,
            query_params=_query_params,
            header_params=_header_params,
            body=_body_params,
            post_params=_form_params,
            files=_files,
            auth_settings=_auth_settings,
            collection_formats=_collection_formats,
            _host=_host,
            _request_auth=_request_auth
        )


