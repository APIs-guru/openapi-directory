# OrgComplianceSettingsRequest

org settings Request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**certificate_connection_id** | **str** | certificate connection id to wrap and resign the app after wrapping | 

## Example

```python
from openapi_client.models.org_compliance_settings_request import OrgComplianceSettingsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of OrgComplianceSettingsRequest from a JSON string
org_compliance_settings_request_instance = OrgComplianceSettingsRequest.from_json(json)
# print the JSON string representation of the object
print(OrgComplianceSettingsRequest.to_json())

# convert the object into a dict
org_compliance_settings_request_dict = org_compliance_settings_request_instance.to_dict()
# create an instance of OrgComplianceSettingsRequest from a dict
org_compliance_settings_request_from_dict = OrgComplianceSettingsRequest.from_dict(org_compliance_settings_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


