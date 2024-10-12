# TdeCertificate

A TDE certificate that can be uploaded into a server.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**TdeCertificateProperties**](TdeCertificateProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.tde_certificate import TdeCertificate

# TODO update the JSON string below
json = "{}"
# create an instance of TdeCertificate from a JSON string
tde_certificate_instance = TdeCertificate.from_json(json)
# print the JSON string representation of the object
print(TdeCertificate.to_json())

# convert the object into a dict
tde_certificate_dict = tde_certificate_instance.to_dict()
# create an instance of TdeCertificate from a dict
tde_certificate_from_dict = TdeCertificate.from_dict(tde_certificate_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


