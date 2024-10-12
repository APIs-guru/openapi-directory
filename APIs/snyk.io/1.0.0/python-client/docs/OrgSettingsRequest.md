# OrgSettingsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**request_access** | [**UpdateOrganizationSettingsRequestRequestAccess**](UpdateOrganizationSettingsRequestRequestAccess.md) |  | [optional] 

## Example

```python
from openapi_client.models.org_settings_request import OrgSettingsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of OrgSettingsRequest from a JSON string
org_settings_request_instance = OrgSettingsRequest.from_json(json)
# print the JSON string representation of the object
print(OrgSettingsRequest.to_json())

# convert the object into a dict
org_settings_request_dict = org_settings_request_instance.to_dict()
# create an instance of OrgSettingsRequest from a dict
org_settings_request_from_dict = OrgSettingsRequest.from_dict(org_settings_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


