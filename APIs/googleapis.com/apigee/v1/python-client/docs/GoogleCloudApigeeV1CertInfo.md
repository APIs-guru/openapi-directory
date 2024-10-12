# GoogleCloudApigeeV1CertInfo

X.509 certificate as defined in RFC 5280.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**basic_constraints** | **str** | X.509 basic constraints extension. | [optional] 
**expiry_date** | **str** | X.509 &#x60;notAfter&#x60; validity period in milliseconds since epoch. | [optional] 
**is_valid** | **str** | Flag that specifies whether the certificate is valid. Flag is set to &#x60;Yes&#x60; if the certificate is valid, &#x60;No&#x60; if expired, or &#x60;Not yet&#x60; if not yet valid. | [optional] 
**issuer** | **str** | X.509 issuer. | [optional] 
**public_key** | **str** | Public key component of the X.509 subject public key info. | [optional] 
**serial_number** | **str** | X.509 serial number. | [optional] 
**sig_alg_name** | **str** | X.509 signatureAlgorithm. | [optional] 
**subject** | **str** | X.509 subject. | [optional] 
**subject_alternative_names** | **List[str]** | X.509 subject alternative names (SANs) extension. | [optional] 
**valid_from** | **str** | X.509 &#x60;notBefore&#x60; validity period in milliseconds since epoch. | [optional] 
**version** | **int** | X.509 version. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_cert_info import GoogleCloudApigeeV1CertInfo

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1CertInfo from a JSON string
google_cloud_apigee_v1_cert_info_instance = GoogleCloudApigeeV1CertInfo.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1CertInfo.to_json())

# convert the object into a dict
google_cloud_apigee_v1_cert_info_dict = google_cloud_apigee_v1_cert_info_instance.to_dict()
# create an instance of GoogleCloudApigeeV1CertInfo from a dict
google_cloud_apigee_v1_cert_info_from_dict = GoogleCloudApigeeV1CertInfo.from_dict(google_cloud_apigee_v1_cert_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


