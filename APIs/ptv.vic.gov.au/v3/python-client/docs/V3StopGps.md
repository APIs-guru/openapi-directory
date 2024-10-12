# V3StopGps


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**latitude** | **float** | Geographic coordinate of latitude at stop | [optional] 
**longitude** | **float** | Geographic coordinate of longitude at stop | [optional] 

## Example

```python
from openapi_client.models.v3_stop_gps import V3StopGps

# TODO update the JSON string below
json = "{}"
# create an instance of V3StopGps from a JSON string
v3_stop_gps_instance = V3StopGps.from_json(json)
# print the JSON string representation of the object
print(V3StopGps.to_json())

# convert the object into a dict
v3_stop_gps_dict = v3_stop_gps_instance.to_dict()
# create an instance of V3StopGps from a dict
v3_stop_gps_from_dict = V3StopGps.from_dict(v3_stop_gps_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


