# Signature

User signature.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**image** | [**Image**](Image.md) |  | [optional] 
**metadata** | **Dict[str, str]** | Optional. Metadata associated with the user&#39;s signature. For example, the user&#39;s name or the user&#39;s title. | [optional] 
**signature_time** | **str** | Optional. Timestamp of the signature. | [optional] 
**user_id** | **str** | Required. User&#39;s UUID provided by the client. | [optional] 

## Example

```python
from openapi_client.models.signature import Signature

# TODO update the JSON string below
json = "{}"
# create an instance of Signature from a JSON string
signature_instance = Signature.from_json(json)
# print the JSON string representation of the object
print(Signature.to_json())

# convert the object into a dict
signature_dict = signature_instance.to_dict()
# create an instance of Signature from a dict
signature_from_dict = Signature.from_dict(signature_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


