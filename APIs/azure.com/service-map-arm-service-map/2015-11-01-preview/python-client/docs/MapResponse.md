# MapResponse

Specified the contents of a map response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_time** | **datetime** | Map interval end time. | 
**map** | [**Map**](Map.md) |  | 
**start_time** | **datetime** | Map interval start time. | 

## Example

```python
from openapi_client.models.map_response import MapResponse

# TODO update the JSON string below
json = "{}"
# create an instance of MapResponse from a JSON string
map_response_instance = MapResponse.from_json(json)
# print the JSON string representation of the object
print(MapResponse.to_json())

# convert the object into a dict
map_response_dict = map_response_instance.to_dict()
# create an instance of MapResponse from a dict
map_response_from_dict = MapResponse.from_dict(map_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


