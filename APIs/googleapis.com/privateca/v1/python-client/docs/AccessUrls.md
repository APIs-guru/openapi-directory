# AccessUrls

URLs where a CertificateAuthority will publish content.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ca_certificate_access_url** | **str** | The URL where this CertificateAuthority&#39;s CA certificate is published. This will only be set for CAs that have been activated. | [optional] 
**crl_access_urls** | **List[str]** | The URLs where this CertificateAuthority&#39;s CRLs are published. This will only be set for CAs that have been activated. | [optional] 

## Example

```python
from openapi_client.models.access_urls import AccessUrls

# TODO update the JSON string below
json = "{}"
# create an instance of AccessUrls from a JSON string
access_urls_instance = AccessUrls.from_json(json)
# print the JSON string representation of the object
print(AccessUrls.to_json())

# convert the object into a dict
access_urls_dict = access_urls_instance.to_dict()
# create an instance of AccessUrls from a dict
access_urls_from_dict = AccessUrls.from_dict(access_urls_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


