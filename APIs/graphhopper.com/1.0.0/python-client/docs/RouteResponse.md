# RouteResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**info** | [**ResponseInfo**](ResponseInfo.md) |  | [optional] 
**paths** | [**List[RouteResponsePath]**](RouteResponsePath.md) |  | [optional] 

## Example

```python
from openapi_client.models.route_response import RouteResponse

# TODO update the JSON string below
json = "{}"
# create an instance of RouteResponse from a JSON string
route_response_instance = RouteResponse.from_json(json)
# print the JSON string representation of the object
print(RouteResponse.to_json())

# convert the object into a dict
route_response_dict = route_response_instance.to_dict()
# create an instance of RouteResponse from a dict
route_response_from_dict = RouteResponse.from_dict(route_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


