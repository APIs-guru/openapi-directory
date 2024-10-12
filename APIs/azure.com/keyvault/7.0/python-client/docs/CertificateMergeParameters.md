# CertificateMergeParameters

The certificate merge parameters

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**CertificateAttributes**](CertificateAttributes.md) |  | [optional] 
**tags** | **Dict[str, str]** | Application specific metadata in the form of key-value pairs. | [optional] 
**x5c** | **List[bytearray]** | The certificate or the certificate chain to merge. | 

## Example

```python
from openapi_client.models.certificate_merge_parameters import CertificateMergeParameters

# TODO update the JSON string below
json = "{}"
# create an instance of CertificateMergeParameters from a JSON string
certificate_merge_parameters_instance = CertificateMergeParameters.from_json(json)
# print the JSON string representation of the object
print(CertificateMergeParameters.to_json())

# convert the object into a dict
certificate_merge_parameters_dict = certificate_merge_parameters_instance.to_dict()
# create an instance of CertificateMergeParameters from a dict
certificate_merge_parameters_from_dict = CertificateMergeParameters.from_dict(certificate_merge_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


