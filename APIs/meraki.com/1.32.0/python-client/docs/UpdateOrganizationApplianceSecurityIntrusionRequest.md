# UpdateOrganizationApplianceSecurityIntrusionRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowed_rules** | [**List[UpdateOrganizationApplianceSecurityIntrusionRequestAllowedRulesInner]**](UpdateOrganizationApplianceSecurityIntrusionRequestAllowedRulesInner.md) | Sets a list of specific SNORT signatures to allow | 

## Example

```python
from openapi_client.models.update_organization_appliance_security_intrusion_request import UpdateOrganizationApplianceSecurityIntrusionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateOrganizationApplianceSecurityIntrusionRequest from a JSON string
update_organization_appliance_security_intrusion_request_instance = UpdateOrganizationApplianceSecurityIntrusionRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateOrganizationApplianceSecurityIntrusionRequest.to_json())

# convert the object into a dict
update_organization_appliance_security_intrusion_request_dict = update_organization_appliance_security_intrusion_request_instance.to_dict()
# create an instance of UpdateOrganizationApplianceSecurityIntrusionRequest from a dict
update_organization_appliance_security_intrusion_request_from_dict = UpdateOrganizationApplianceSecurityIntrusionRequest.from_dict(update_organization_appliance_security_intrusion_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


