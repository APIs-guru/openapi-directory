# SenderSignatureInformation



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**confirmed** | **bool** |  | [optional] 
**domain** | **str** |  | [optional] 
**email_address** | **str** |  | [optional] 
**id** | **int** |  | [optional] 
**name** | **str** |  | [optional] 
**reply_to_email_address** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.sender_signature_information import SenderSignatureInformation

# TODO update the JSON string below
json = "{}"
# create an instance of SenderSignatureInformation from a JSON string
sender_signature_information_instance = SenderSignatureInformation.from_json(json)
# print the JSON string representation of the object
print(SenderSignatureInformation.to_json())

# convert the object into a dict
sender_signature_information_dict = sender_signature_information_instance.to_dict()
# create an instance of SenderSignatureInformation from a dict
sender_signature_information_from_dict = SenderSignatureInformation.from_dict(sender_signature_information_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


