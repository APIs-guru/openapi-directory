# PublishingOptions

Options relating to the publication of each CertificateAuthority's CA certificate and CRLs and their inclusion as extensions in issued Certificates. The options set here apply to certificates issued by any CertificateAuthority in the CaPool.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**encoding_format** | **str** | Optional. Specifies the encoding format of each CertificateAuthority&#39;s CA certificate and CRLs. If this is omitted, CA certificates and CRLs will be published in PEM. | [optional] 
**publish_ca_cert** | **bool** | Optional. When true, publishes each CertificateAuthority&#39;s CA certificate and includes its URL in the \&quot;Authority Information Access\&quot; X.509 extension in all issued Certificates. If this is false, the CA certificate will not be published and the corresponding X.509 extension will not be written in issued certificates. | [optional] 
**publish_crl** | **bool** | Optional. When true, publishes each CertificateAuthority&#39;s CRL and includes its URL in the \&quot;CRL Distribution Points\&quot; X.509 extension in all issued Certificates. If this is false, CRLs will not be published and the corresponding X.509 extension will not be written in issued certificates. CRLs will expire 7 days from their creation. However, we will rebuild daily. CRLs are also rebuilt shortly after a certificate is revoked. | [optional] 

## Example

```python
from openapi_client.models.publishing_options import PublishingOptions

# TODO update the JSON string below
json = "{}"
# create an instance of PublishingOptions from a JSON string
publishing_options_instance = PublishingOptions.from_json(json)
# print the JSON string representation of the object
print(PublishingOptions.to_json())

# convert the object into a dict
publishing_options_dict = publishing_options_instance.to_dict()
# create an instance of PublishingOptions from a dict
publishing_options_from_dict = PublishingOptions.from_dict(publishing_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


