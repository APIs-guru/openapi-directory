# VehicleType


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**capacity** | **List[int]** | Specifies an array of capacity dimension values which need to be int values. For example, if there are two dimensions such as volume and weight then it needs to be defined as [ 1000, 300 ] assuming a maximum volume of 1000 and a maximum weight of 300. | [optional] [default to [0]]
**consider_traffic** | **bool** | Specifies whether traffic should be considered. if \&quot;tomtom\&quot; is used and this is false, free flow travel times from \&quot;tomtom\&quot; are calculated. If this is true, historical traffic info are used. We do not yet have traffic data for \&quot;openstreetmap\&quot;, thus, setting this true has no effect at all. | [optional] [default to False]
**cost_per_activation** | **float** | **_BETA feature_**! Cost parameter vehicle activation, i.e. fixed costs per vehicle | [optional] 
**cost_per_meter** | **float** | **_BETA feature_**! Cost parameter per distance unit, here meter is used | [optional] 
**cost_per_second** | **float** | **_BETA feature_**! Cost parameter per time unit, here second is used | [optional] 
**network_data_provider** | **str** | Specifies the network data provider. Either use [&#x60;openstreetmap&#x60;](#section/Map-Data-and-Routing-Profiles/OpenStreetMap) (default) or [&#x60;tomtom&#x60;](#section/Map-Data-and-Routing-Profiles/TomTom) (add-on required). | [optional] [default to 'openstreetmap']
**profile** | **object** |  | [optional] 
**service_time_factor** | **float** | Specifies a service time factor for this vehicle type. If the vehicle/driver that uses this type is able to conduct the service as double as fast as it is determined in the corresponding service or shipment then set it to 0.5. | [optional] [default to 1]
**speed_factor** | **float** | Specifies a speed factor for this vehicle type. If the vehicle that uses this type needs to be only half as fast as what is actually calculated with our routing engine then set the speed factor to 0.5. | [optional] [default to 1]
**type_id** | **str** | Specifies the id of the vehicle type. If a vehicle needs to be of this type, it should refer to this with its type_id attribute. | 

## Example

```python
from openapi_client.models.vehicle_type import VehicleType

# TODO update the JSON string below
json = "{}"
# create an instance of VehicleType from a JSON string
vehicle_type_instance = VehicleType.from_json(json)
# print the JSON string representation of the object
print(VehicleType.to_json())

# convert the object into a dict
vehicle_type_dict = vehicle_type_instance.to_dict()
# create an instance of VehicleType from a dict
vehicle_type_from_dict = VehicleType.from_dict(vehicle_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


