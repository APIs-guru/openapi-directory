# AppServiceEnvironmentsListUsages200Response

Collection of CSM usage quotas.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to next page of resources. | [optional] [readonly] 
**value** | [**List[AppServiceEnvironmentsListUsages200ResponseValueInner]**](AppServiceEnvironmentsListUsages200ResponseValueInner.md) | Collection of resources. | 

## Example

```python
from openapi_client.models.app_service_environments_list_usages200_response import AppServiceEnvironmentsListUsages200Response

# TODO update the JSON string below
json = "{}"
# create an instance of AppServiceEnvironmentsListUsages200Response from a JSON string
app_service_environments_list_usages200_response_instance = AppServiceEnvironmentsListUsages200Response.from_json(json)
# print the JSON string representation of the object
print(AppServiceEnvironmentsListUsages200Response.to_json())

# convert the object into a dict
app_service_environments_list_usages200_response_dict = app_service_environments_list_usages200_response_instance.to_dict()
# create an instance of AppServiceEnvironmentsListUsages200Response from a dict
app_service_environments_list_usages200_response_from_dict = AppServiceEnvironmentsListUsages200Response.from_dict(app_service_environments_list_usages200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


