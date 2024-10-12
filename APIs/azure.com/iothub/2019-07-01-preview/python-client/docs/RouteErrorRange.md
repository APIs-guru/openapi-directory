# RouteErrorRange

Range of route errors

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end** | [**RouteErrorPosition**](RouteErrorPosition.md) |  | [optional] 
**start** | [**RouteErrorPosition**](RouteErrorPosition.md) |  | [optional] 

## Example

```python
from openapi_client.models.route_error_range import RouteErrorRange

# TODO update the JSON string below
json = "{}"
# create an instance of RouteErrorRange from a JSON string
route_error_range_instance = RouteErrorRange.from_json(json)
# print the JSON string representation of the object
print(RouteErrorRange.to_json())

# convert the object into a dict
route_error_range_dict = route_error_range_instance.to_dict()
# create an instance of RouteErrorRange from a dict
route_error_range_from_dict = RouteErrorRange.from_dict(route_error_range_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


