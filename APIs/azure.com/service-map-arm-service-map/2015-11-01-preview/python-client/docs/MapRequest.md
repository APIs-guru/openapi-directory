# MapRequest

Specifies the contents of request to generate a map.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_time** | **datetime** | Map interval end time. | [optional] 
**kind** | **str** | The type of map to create. | 
**start_time** | **datetime** | Map interval start time. | [optional] 

## Example

```python
from openapi_client.models.map_request import MapRequest

# TODO update the JSON string below
json = "{}"
# create an instance of MapRequest from a JSON string
map_request_instance = MapRequest.from_json(json)
# print the JSON string representation of the object
print(MapRequest.to_json())

# convert the object into a dict
map_request_dict = map_request_instance.to_dict()
# create an instance of MapRequest from a dict
map_request_from_dict = MapRequest.from_dict(map_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


