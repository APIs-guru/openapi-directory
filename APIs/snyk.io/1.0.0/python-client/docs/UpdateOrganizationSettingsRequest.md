# UpdateOrganizationSettingsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**request_access** | [**UpdateOrganizationSettingsRequestRequestAccess**](UpdateOrganizationSettingsRequestRequestAccess.md) |  | [optional] 

## Example

```python
from openapi_client.models.update_organization_settings_request import UpdateOrganizationSettingsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateOrganizationSettingsRequest from a JSON string
update_organization_settings_request_instance = UpdateOrganizationSettingsRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateOrganizationSettingsRequest.to_json())

# convert the object into a dict
update_organization_settings_request_dict = update_organization_settings_request_instance.to_dict()
# create an instance of UpdateOrganizationSettingsRequest from a dict
update_organization_settings_request_from_dict = UpdateOrganizationSettingsRequest.from_dict(update_organization_settings_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


