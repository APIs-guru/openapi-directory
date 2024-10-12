# CertificateIssuanceConfig

CertificateIssuanceConfig specifies how to issue and manage a certificate.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**certificate_authority_config** | [**CertificateAuthorityConfig**](CertificateAuthorityConfig.md) |  | [optional] 
**create_time** | **str** | Output only. The creation timestamp of a CertificateIssuanceConfig. | [optional] [readonly] 
**description** | **str** | One or more paragraphs of text description of a CertificateIssuanceConfig. | [optional] 
**key_algorithm** | **str** | Required. The key algorithm to use when generating the private key. | [optional] 
**labels** | **Dict[str, str]** | Set of labels associated with a CertificateIssuanceConfig. | [optional] 
**lifetime** | **str** | Required. Workload certificate lifetime requested. | [optional] 
**name** | **str** | A user-defined name of the certificate issuance config. CertificateIssuanceConfig names must be unique globally and match pattern &#x60;projects/*/locations/*/certificateIssuanceConfigs/*&#x60;. | [optional] 
**rotation_window_percentage** | **int** | Required. Specifies the percentage of elapsed time of the certificate lifetime to wait before renewing the certificate. Must be a number between 1-99, inclusive. | [optional] 
**update_time** | **str** | Output only. The last update timestamp of a CertificateIssuanceConfig. | [optional] [readonly] 

## Example

```python
from openapi_client.models.certificate_issuance_config import CertificateIssuanceConfig

# TODO update the JSON string below
json = "{}"
# create an instance of CertificateIssuanceConfig from a JSON string
certificate_issuance_config_instance = CertificateIssuanceConfig.from_json(json)
# print the JSON string representation of the object
print(CertificateIssuanceConfig.to_json())

# convert the object into a dict
certificate_issuance_config_dict = certificate_issuance_config_instance.to_dict()
# create an instance of CertificateIssuanceConfig from a dict
certificate_issuance_config_from_dict = CertificateIssuanceConfig.from_dict(certificate_issuance_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


