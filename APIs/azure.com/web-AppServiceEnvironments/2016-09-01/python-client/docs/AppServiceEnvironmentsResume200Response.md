# AppServiceEnvironmentsResume200Response

Collection of App Service apps.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to next page of resources. | [optional] [readonly] 
**value** | [**List[AppServiceEnvironmentsResume200ResponseValueInner]**](AppServiceEnvironmentsResume200ResponseValueInner.md) | Collection of resources. | 

## Example

```python
from openapi_client.models.app_service_environments_resume200_response import AppServiceEnvironmentsResume200Response

# TODO update the JSON string below
json = "{}"
# create an instance of AppServiceEnvironmentsResume200Response from a JSON string
app_service_environments_resume200_response_instance = AppServiceEnvironmentsResume200Response.from_json(json)
# print the JSON string representation of the object
print(AppServiceEnvironmentsResume200Response.to_json())

# convert the object into a dict
app_service_environments_resume200_response_dict = app_service_environments_resume200_response_instance.to_dict()
# create an instance of AppServiceEnvironmentsResume200Response from a dict
app_service_environments_resume200_response_from_dict = AppServiceEnvironmentsResume200Response.from_dict(app_service_environments_resume200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


