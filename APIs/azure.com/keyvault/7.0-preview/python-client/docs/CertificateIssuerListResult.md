# CertificateIssuerListResult

The certificate issuer list result.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URL to get the next set of certificate issuers. | [optional] [readonly] 
**value** | [**List[CertificateIssuerItem]**](CertificateIssuerItem.md) | A response message containing a list of certificate issuers in the key vault along with a link to the next page of certificate issuers. | [optional] [readonly] 

## Example

```python
from openapi_client.models.certificate_issuer_list_result import CertificateIssuerListResult

# TODO update the JSON string below
json = "{}"
# create an instance of CertificateIssuerListResult from a JSON string
certificate_issuer_list_result_instance = CertificateIssuerListResult.from_json(json)
# print the JSON string representation of the object
print(CertificateIssuerListResult.to_json())

# convert the object into a dict
certificate_issuer_list_result_dict = certificate_issuer_list_result_instance.to_dict()
# create an instance of CertificateIssuerListResult from a dict
certificate_issuer_list_result_from_dict = CertificateIssuerListResult.from_dict(certificate_issuer_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


