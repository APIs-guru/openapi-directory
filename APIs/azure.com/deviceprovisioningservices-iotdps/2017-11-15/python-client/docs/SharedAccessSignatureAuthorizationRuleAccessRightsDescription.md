# SharedAccessSignatureAuthorizationRuleAccessRightsDescription

Description of the shared access key.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key_name** | **str** | Name of the key. | 
**primary_key** | **str** | Primary SAS key value. | [optional] 
**rights** | **str** | Rights that this key has. | 
**secondary_key** | **str** | Secondary SAS key value. | [optional] 

## Example

```python
from openapi_client.models.shared_access_signature_authorization_rule_access_rights_description import SharedAccessSignatureAuthorizationRuleAccessRightsDescription

# TODO update the JSON string below
json = "{}"
# create an instance of SharedAccessSignatureAuthorizationRuleAccessRightsDescription from a JSON string
shared_access_signature_authorization_rule_access_rights_description_instance = SharedAccessSignatureAuthorizationRuleAccessRightsDescription.from_json(json)
# print the JSON string representation of the object
print(SharedAccessSignatureAuthorizationRuleAccessRightsDescription.to_json())

# convert the object into a dict
shared_access_signature_authorization_rule_access_rights_description_dict = shared_access_signature_authorization_rule_access_rights_description_instance.to_dict()
# create an instance of SharedAccessSignatureAuthorizationRuleAccessRightsDescription from a dict
shared_access_signature_authorization_rule_access_rights_description_from_dict = SharedAccessSignatureAuthorizationRuleAccessRightsDescription.from_dict(shared_access_signature_authorization_rule_access_rights_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


