# OrgSettingsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**request_access** | [**ViewOrganizationSettings200ResponseRequestAccess**](ViewOrganizationSettings200ResponseRequestAccess.md) |  | [optional] 

## Example

```python
from openapi_client.models.org_settings_response import OrgSettingsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of OrgSettingsResponse from a JSON string
org_settings_response_instance = OrgSettingsResponse.from_json(json)
# print the JSON string representation of the object
print(OrgSettingsResponse.to_json())

# convert the object into a dict
org_settings_response_dict = org_settings_response_instance.to_dict()
# create an instance of OrgSettingsResponse from a dict
org_settings_response_from_dict = OrgSettingsResponse.from_dict(org_settings_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


