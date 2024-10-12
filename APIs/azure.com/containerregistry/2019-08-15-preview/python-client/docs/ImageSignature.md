# ImageSignature

Signature of a signed manifest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**header** | [**JWK**](JWK.md) |  | [optional] 
**protected** | **str** | The signed protected header | [optional] 
**signature** | **str** | A signature for the image manifest, signed by a libtrust private key | [optional] 

## Example

```python
from openapi_client.models.image_signature import ImageSignature

# TODO update the JSON string below
json = "{}"
# create an instance of ImageSignature from a JSON string
image_signature_instance = ImageSignature.from_json(json)
# print the JSON string representation of the object
print(ImageSignature.to_json())

# convert the object into a dict
image_signature_dict = image_signature_instance.to_dict()
# create an instance of ImageSignature from a dict
image_signature_from_dict = ImageSignature.from_dict(image_signature_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


