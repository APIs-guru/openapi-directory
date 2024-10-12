# Route


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**pattern** | **str** |  | [optional] 
**url** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.route import Route

# TODO update the JSON string below
json = "{}"
# create an instance of Route from a JSON string
route_instance = Route.from_json(json)
# print the JSON string representation of the object
print(Route.to_json())

# convert the object into a dict
route_dict = route_instance.to_dict()
# create an instance of Route from a dict
route_from_dict = Route.from_dict(route_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


