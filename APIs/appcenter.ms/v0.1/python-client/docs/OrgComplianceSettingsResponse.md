# OrgComplianceSettingsResponse

org settings response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**certificate_connection_id** | **str** | certificate connection id to wrap and resign the app after wrapping | 
**id** | **str** | The internal unique id (UUID) of the organization compliance setting | 
**is_mam_enabled** | **bool** | flag to tell if mam warpping is enabled on the Org | [optional] 
**org_id** | **str** | The internal unique id (UUID) of the organization. | 

## Example

```python
from openapi_client.models.org_compliance_settings_response import OrgComplianceSettingsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of OrgComplianceSettingsResponse from a JSON string
org_compliance_settings_response_instance = OrgComplianceSettingsResponse.from_json(json)
# print the JSON string representation of the object
print(OrgComplianceSettingsResponse.to_json())

# convert the object into a dict
org_compliance_settings_response_dict = org_compliance_settings_response_instance.to_dict()
# create an instance of OrgComplianceSettingsResponse from a dict
org_compliance_settings_response_from_dict = OrgComplianceSettingsResponse.from_dict(org_compliance_settings_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


