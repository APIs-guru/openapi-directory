# V3VehicleDescriptor


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**air_conditioned** | **bool** | Indicator if vehicle is air conditioned. May be null. Only available for some tram runs. | [optional] 
**description** | **str** | Vehicle description such as \&quot;6 Car Comeng\&quot;, \&quot;6 Car Xtrapolis\&quot;, \&quot;3 Car Comeng\&quot;, \&quot;6 Car Siemens\&quot;, \&quot;3 Car Siemens\&quot;. May be null/empty.              Only available for some metropolitan train runs. | [optional] 
**id** | **str** | Operator identifier of the vehicle such as \&quot;26094\&quot;. May be null/empty. Only available for some tram and bus runs. | [optional] 
**length** | **str** | The length of the vehicle. Applies to CIS - Metro Trains | [optional] 
**low_floor** | **bool** | Indicator if vehicle has a low floor. May be null. Only available for some tram runs. | [optional] 
**operator** | **str** | Operator name of the vehicle such as \&quot;Metro Trains Melbourne\&quot;, \&quot;Yarra Trams\&quot;, \&quot;Ventura Bus Line\&quot;, \&quot;CDC\&quot; or \&quot;Sita Bus Lines\&quot; . May be null/empty.              Only available for train, tram, v/line and some bus runs. | [optional] 
**supplier** | **str** | Supplier of vehicle descriptor data. | [optional] 

## Example

```python
from openapi_client.models.v3_vehicle_descriptor import V3VehicleDescriptor

# TODO update the JSON string below
json = "{}"
# create an instance of V3VehicleDescriptor from a JSON string
v3_vehicle_descriptor_instance = V3VehicleDescriptor.from_json(json)
# print the JSON string representation of the object
print(V3VehicleDescriptor.to_json())

# convert the object into a dict
v3_vehicle_descriptor_dict = v3_vehicle_descriptor_instance.to_dict()
# create an instance of V3VehicleDescriptor from a dict
v3_vehicle_descriptor_from_dict = V3VehicleDescriptor.from_dict(v3_vehicle_descriptor_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


