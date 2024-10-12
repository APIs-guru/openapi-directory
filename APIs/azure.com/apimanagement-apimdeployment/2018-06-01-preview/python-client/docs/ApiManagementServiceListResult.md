# ApiManagementServiceListResult

The response of the List API Management services operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to the next set of results. Not empty if Value contains incomplete list of API Management services. | [optional] 
**value** | [**List[ApiManagementServiceResource]**](ApiManagementServiceResource.md) | Result of the List API Management services operation. | 

## Example

```python
from openapi_client.models.api_management_service_list_result import ApiManagementServiceListResult

# TODO update the JSON string below
json = "{}"
# create an instance of ApiManagementServiceListResult from a JSON string
api_management_service_list_result_instance = ApiManagementServiceListResult.from_json(json)
# print the JSON string representation of the object
print(ApiManagementServiceListResult.to_json())

# convert the object into a dict
api_management_service_list_result_dict = api_management_service_list_result_instance.to_dict()
# create an instance of ApiManagementServiceListResult from a dict
api_management_service_list_result_from_dict = ApiManagementServiceListResult.from_dict(api_management_service_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


