# CustomRPRouteDefinition

A route definition that defines an action or resource that can be interacted with through the custom resource provider.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**endpoint** | **str** | The route definition endpoint URI that the custom resource provider will proxy requests to. This can be in the form of a flat URI (e.g. &#39;https://testendpoint/&#39;) or can specify to route via a path (e.g. &#39;https://testendpoint/{requestPath}&#39;) | 
**name** | **str** | The name of the route definition. This becomes the name for the ARM extension (e.g. &#39;/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomProviders/resourceProviders/{resourceProviderName}/{name}&#39;) | 

## Example

```python
from openapi_client.models.custom_rp_route_definition import CustomRPRouteDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of CustomRPRouteDefinition from a JSON string
custom_rp_route_definition_instance = CustomRPRouteDefinition.from_json(json)
# print the JSON string representation of the object
print(CustomRPRouteDefinition.to_json())

# convert the object into a dict
custom_rp_route_definition_dict = custom_rp_route_definition_instance.to_dict()
# create an instance of CustomRPRouteDefinition from a dict
custom_rp_route_definition_from_dict = CustomRPRouteDefinition.from_dict(custom_rp_route_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


