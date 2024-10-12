# V3StopLocation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gps** | [**V3StopGps**](V3StopGps.md) |  | [optional] 

## Example

```python
from openapi_client.models.v3_stop_location import V3StopLocation

# TODO update the JSON string below
json = "{}"
# create an instance of V3StopLocation from a JSON string
v3_stop_location_instance = V3StopLocation.from_json(json)
# print the JSON string representation of the object
print(V3StopLocation.to_json())

# convert the object into a dict
v3_stop_location_dict = v3_stop_location_instance.to_dict()
# create an instance of V3StopLocation from a dict
v3_stop_location_from_dict = V3StopLocation.from_dict(v3_stop_location_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


