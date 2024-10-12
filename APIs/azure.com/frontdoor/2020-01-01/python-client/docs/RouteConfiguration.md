# RouteConfiguration

Base class for all types of Route.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**odata_type** | **str** |  | 

## Example

```python
from openapi_client.models.route_configuration import RouteConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of RouteConfiguration from a JSON string
route_configuration_instance = RouteConfiguration.from_json(json)
# print the JSON string representation of the object
print(RouteConfiguration.to_json())

# convert the object into a dict
route_configuration_dict = route_configuration_instance.to_dict()
# create an instance of RouteConfiguration from a dict
route_configuration_from_dict = RouteConfiguration.from_dict(route_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


