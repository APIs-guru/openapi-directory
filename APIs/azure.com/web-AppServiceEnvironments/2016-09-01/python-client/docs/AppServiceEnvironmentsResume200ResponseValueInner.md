# AppServiceEnvironmentsResume200ResponseValueInner

A web app, a mobile app backend, or an API app.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identity** | [**AppServiceEnvironmentsResume200ResponseValueInnerIdentity**](AppServiceEnvironmentsResume200ResponseValueInnerIdentity.md) |  | [optional] 
**properties** | [**AppServiceEnvironmentsResume200ResponseValueInnerProperties**](AppServiceEnvironmentsResume200ResponseValueInnerProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.app_service_environments_resume200_response_value_inner import AppServiceEnvironmentsResume200ResponseValueInner

# TODO update the JSON string below
json = "{}"
# create an instance of AppServiceEnvironmentsResume200ResponseValueInner from a JSON string
app_service_environments_resume200_response_value_inner_instance = AppServiceEnvironmentsResume200ResponseValueInner.from_json(json)
# print the JSON string representation of the object
print(AppServiceEnvironmentsResume200ResponseValueInner.to_json())

# convert the object into a dict
app_service_environments_resume200_response_value_inner_dict = app_service_environments_resume200_response_value_inner_instance.to_dict()
# create an instance of AppServiceEnvironmentsResume200ResponseValueInner from a dict
app_service_environments_resume200_response_value_inner_from_dict = AppServiceEnvironmentsResume200ResponseValueInner.from_dict(app_service_environments_resume200_response_value_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


