# AppServiceEnvironmentsResume200ResponseValueInnerIdentity

Managed service identity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**principal_id** | **str** | Principal Id of managed service identity. | [optional] [readonly] 
**tenant_id** | **str** | Tenant of managed service identity. | [optional] [readonly] 
**type** | **str** | Type of managed service identity. | [optional] 

## Example

```python
from openapi_client.models.app_service_environments_resume200_response_value_inner_identity import AppServiceEnvironmentsResume200ResponseValueInnerIdentity

# TODO update the JSON string below
json = "{}"
# create an instance of AppServiceEnvironmentsResume200ResponseValueInnerIdentity from a JSON string
app_service_environments_resume200_response_value_inner_identity_instance = AppServiceEnvironmentsResume200ResponseValueInnerIdentity.from_json(json)
# print the JSON string representation of the object
print(AppServiceEnvironmentsResume200ResponseValueInnerIdentity.to_json())

# convert the object into a dict
app_service_environments_resume200_response_value_inner_identity_dict = app_service_environments_resume200_response_value_inner_identity_instance.to_dict()
# create an instance of AppServiceEnvironmentsResume200ResponseValueInnerIdentity from a dict
app_service_environments_resume200_response_value_inner_identity_from_dict = AppServiceEnvironmentsResume200ResponseValueInnerIdentity.from_dict(app_service_environments_resume200_response_value_inner_identity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


