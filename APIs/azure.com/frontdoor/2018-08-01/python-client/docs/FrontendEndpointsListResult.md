# FrontendEndpointsListResult

Result of the request to list frontend endpoints. It contains a list of Frontend endpoint objects and a URL link to get the next set of results.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URL to get the next set of frontend endpoints if there are any. | [optional] 
**value** | [**List[FrontendEndpoint]**](FrontendEndpoint.md) | List of Frontend endpoints within a Front Door. | [optional] [readonly] 

## Example

```python
from openapi_client.models.frontend_endpoints_list_result import FrontendEndpointsListResult

# TODO update the JSON string below
json = "{}"
# create an instance of FrontendEndpointsListResult from a JSON string
frontend_endpoints_list_result_instance = FrontendEndpointsListResult.from_json(json)
# print the JSON string representation of the object
print(FrontendEndpointsListResult.to_json())

# convert the object into a dict
frontend_endpoints_list_result_dict = frontend_endpoints_list_result_instance.to_dict()
# create an instance of FrontendEndpointsListResult from a dict
frontend_endpoints_list_result_from_dict = FrontendEndpointsListResult.from_dict(frontend_endpoints_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


