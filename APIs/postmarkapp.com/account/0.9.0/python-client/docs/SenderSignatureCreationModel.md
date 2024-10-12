# SenderSignatureCreationModel



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**from_email** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**reply_to_email** | **str** |  | [optional] 
**return_path_domain** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.sender_signature_creation_model import SenderSignatureCreationModel

# TODO update the JSON string below
json = "{}"
# create an instance of SenderSignatureCreationModel from a JSON string
sender_signature_creation_model_instance = SenderSignatureCreationModel.from_json(json)
# print the JSON string representation of the object
print(SenderSignatureCreationModel.to_json())

# convert the object into a dict
sender_signature_creation_model_dict = sender_signature_creation_model_instance.to_dict()
# create an instance of SenderSignatureCreationModel from a dict
sender_signature_creation_model_from_dict = SenderSignatureCreationModel.from_dict(sender_signature_creation_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


