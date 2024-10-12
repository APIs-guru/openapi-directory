# SenderSignatureEditingModel



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | [optional] 
**reply_to_email** | **str** |  | [optional] 
**return_path_domain** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.sender_signature_editing_model import SenderSignatureEditingModel

# TODO update the JSON string below
json = "{}"
# create an instance of SenderSignatureEditingModel from a JSON string
sender_signature_editing_model_instance = SenderSignatureEditingModel.from_json(json)
# print the JSON string representation of the object
print(SenderSignatureEditingModel.to_json())

# convert the object into a dict
sender_signature_editing_model_dict = sender_signature_editing_model_instance.to_dict()
# create an instance of SenderSignatureEditingModel from a dict
sender_signature_editing_model_from_dict = SenderSignatureEditingModel.from_dict(sender_signature_editing_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


