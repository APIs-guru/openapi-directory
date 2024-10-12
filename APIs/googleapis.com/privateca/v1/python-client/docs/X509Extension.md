# X509Extension

An X509Extension specifies an X.509 extension, which may be used in different parts of X.509 objects like certificates, CSRs, and CRLs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**critical** | **bool** | Optional. Indicates whether or not this extension is critical (i.e., if the client does not know how to handle this extension, the client should consider this to be an error). | [optional] 
**object_id** | [**ObjectId**](ObjectId.md) |  | [optional] 
**value** | **bytearray** | Required. The value of this X.509 extension. | [optional] 

## Example

```python
from openapi_client.models.x509_extension import X509Extension

# TODO update the JSON string below
json = "{}"
# create an instance of X509Extension from a JSON string
x509_extension_instance = X509Extension.from_json(json)
# print the JSON string representation of the object
print(X509Extension.to_json())

# convert the object into a dict
x509_extension_dict = x509_extension_instance.to_dict()
# create an instance of X509Extension from a dict
x509_extension_from_dict = X509Extension.from_dict(x509_extension_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


