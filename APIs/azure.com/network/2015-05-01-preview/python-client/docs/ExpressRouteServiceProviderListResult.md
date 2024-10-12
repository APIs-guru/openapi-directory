# ExpressRouteServiceProviderListResult

Response for ListExpressRouteServiceProvider Api service call

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Gets the URL to get the next set of results. | [optional] 
**value** | [**List[ExpressRouteServiceProvider]**](ExpressRouteServiceProvider.md) | Gets List of ExpressRouteResourceProvider | [optional] 

## Example

```python
from openapi_client.models.express_route_service_provider_list_result import ExpressRouteServiceProviderListResult

# TODO update the JSON string below
json = "{}"
# create an instance of ExpressRouteServiceProviderListResult from a JSON string
express_route_service_provider_list_result_instance = ExpressRouteServiceProviderListResult.from_json(json)
# print the JSON string representation of the object
print(ExpressRouteServiceProviderListResult.to_json())

# convert the object into a dict
express_route_service_provider_list_result_dict = express_route_service_provider_list_result_instance.to_dict()
# create an instance of ExpressRouteServiceProviderListResult from a dict
express_route_service_provider_list_result_from_dict = ExpressRouteServiceProviderListResult.from_dict(express_route_service_provider_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


