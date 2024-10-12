# SenderSignatureExtendedInformation



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**confirmed** | **bool** |  | [optional] 
**dkim_host** | **str** |  | [optional] 
**dkim_pending_host** | **str** |  | [optional] 
**dkim_pending_text_value** | **str** |  | [optional] 
**dkim_revoked_host** | **str** |  | [optional] 
**dkim_revoked_text_value** | **str** |  | [optional] 
**dkim_test_value** | **str** |  | [optional] 
**dkim_update_status** | **str** |  | [optional] 
**dkim_verified** | **bool** |  | [optional] 
**domain** | **str** |  | [optional] 
**email_address** | **str** |  | [optional] 
**id** | **int** |  | [optional] 
**name** | **str** |  | [optional] 
**reply_to_email_address** | **str** |  | [optional] 
**return_path_domain** | **str** |  | [optional] 
**return_path_domain_cname_value** | **str** |  | [optional] 
**return_path_domain_verified** | **bool** |  | [optional] 
**spf_host** | **str** |  | [optional] 
**spf_text_value** | **str** |  | [optional] 
**spf_verified** | **bool** |  | [optional] 
**safe_to_remove_revoked_key_from_dns** | **bool** |  | [optional] 
**weak_dkim** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.sender_signature_extended_information import SenderSignatureExtendedInformation

# TODO update the JSON string below
json = "{}"
# create an instance of SenderSignatureExtendedInformation from a JSON string
sender_signature_extended_information_instance = SenderSignatureExtendedInformation.from_json(json)
# print the JSON string representation of the object
print(SenderSignatureExtendedInformation.to_json())

# convert the object into a dict
sender_signature_extended_information_dict = sender_signature_extended_information_instance.to_dict()
# create an instance of SenderSignatureExtendedInformation from a dict
sender_signature_extended_information_from_dict = SenderSignatureExtendedInformation.from_dict(sender_signature_extended_information_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


