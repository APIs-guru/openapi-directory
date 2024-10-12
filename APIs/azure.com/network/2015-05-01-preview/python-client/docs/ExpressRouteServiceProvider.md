# ExpressRouteServiceProvider

ExpressRouteResourceProvider object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Gets or sets the ID of the resource. | [optional] 
**name** | **str** | Gets or sets the name of the resource. | [optional] 
**properties** | [**ExpressRouteServiceProviderPropertiesFormat**](ExpressRouteServiceProviderPropertiesFormat.md) |  | [optional] 
**type** | **str** | Gets or sets the type of the resource. | [optional] 

## Example

```python
from openapi_client.models.express_route_service_provider import ExpressRouteServiceProvider

# TODO update the JSON string below
json = "{}"
# create an instance of ExpressRouteServiceProvider from a JSON string
express_route_service_provider_instance = ExpressRouteServiceProvider.from_json(json)
# print the JSON string representation of the object
print(ExpressRouteServiceProvider.to_json())

# convert the object into a dict
express_route_service_provider_dict = express_route_service_provider_instance.to_dict()
# create an instance of ExpressRouteServiceProvider from a dict
express_route_service_provider_from_dict = ExpressRouteServiceProvider.from_dict(express_route_service_provider_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


