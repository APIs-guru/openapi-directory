# AkamaiAccessControl

Akamai access control

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**akamai_signature_header_authentication_key_list** | [**List[AkamaiSignatureHeaderAuthenticationKey]**](AkamaiSignatureHeaderAuthenticationKey.md) | authentication key list | [optional] 

## Example

```python
from openapi_client.models.akamai_access_control import AkamaiAccessControl

# TODO update the JSON string below
json = "{}"
# create an instance of AkamaiAccessControl from a JSON string
akamai_access_control_instance = AkamaiAccessControl.from_json(json)
# print the JSON string representation of the object
print(AkamaiAccessControl.to_json())

# convert the object into a dict
akamai_access_control_dict = akamai_access_control_instance.to_dict()
# create an instance of AkamaiAccessControl from a dict
akamai_access_control_from_dict = AkamaiAccessControl.from_dict(akamai_access_control_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


