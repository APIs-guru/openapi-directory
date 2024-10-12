# AppServicePlansListDefaultResponse

App Service error response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**AppServicePlansListDefaultResponseError**](AppServicePlansListDefaultResponseError.md) |  | [optional] 

## Example

```python
from openapi_client.models.app_service_plans_list_default_response import AppServicePlansListDefaultResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AppServicePlansListDefaultResponse from a JSON string
app_service_plans_list_default_response_instance = AppServicePlansListDefaultResponse.from_json(json)
# print the JSON string representation of the object
print(AppServicePlansListDefaultResponse.to_json())

# convert the object into a dict
app_service_plans_list_default_response_dict = app_service_plans_list_default_response_instance.to_dict()
# create an instance of AppServicePlansListDefaultResponse from a dict
app_service_plans_list_default_response_from_dict = AppServicePlansListDefaultResponse.from_dict(app_service_plans_list_default_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


