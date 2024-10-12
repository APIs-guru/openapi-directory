# SharedAccessSignatureAuthorizationRule

The properties of an IoT hub shared access policy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key_name** | **str** | The name of the shared access policy. | 
**primary_key** | **str** | The primary key. | [optional] 
**rights** | **str** | The permissions assigned to the shared access policy. | 
**secondary_key** | **str** | The secondary key. | [optional] 

## Example

```python
from openapi_client.models.shared_access_signature_authorization_rule import SharedAccessSignatureAuthorizationRule

# TODO update the JSON string below
json = "{}"
# create an instance of SharedAccessSignatureAuthorizationRule from a JSON string
shared_access_signature_authorization_rule_instance = SharedAccessSignatureAuthorizationRule.from_json(json)
# print the JSON string representation of the object
print(SharedAccessSignatureAuthorizationRule.to_json())

# convert the object into a dict
shared_access_signature_authorization_rule_dict = shared_access_signature_authorization_rule_instance.to_dict()
# create an instance of SharedAccessSignatureAuthorizationRule from a dict
shared_access_signature_authorization_rule_from_dict = SharedAccessSignatureAuthorizationRule.from_dict(shared_access_signature_authorization_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


