# GoogleCloudBeyondcorpPartnerservicesV1alphaEncryptionInfo

Message contains the JWT encryption information for the proxy server.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**encryption_sa_email** | **str** | Optional. Service Account for encryption key. | [optional] 
**jwk** | **str** | Optional. JWK in string. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_beyondcorp_partnerservices_v1alpha_encryption_info import GoogleCloudBeyondcorpPartnerservicesV1alphaEncryptionInfo

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudBeyondcorpPartnerservicesV1alphaEncryptionInfo from a JSON string
google_cloud_beyondcorp_partnerservices_v1alpha_encryption_info_instance = GoogleCloudBeyondcorpPartnerservicesV1alphaEncryptionInfo.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudBeyondcorpPartnerservicesV1alphaEncryptionInfo.to_json())

# convert the object into a dict
google_cloud_beyondcorp_partnerservices_v1alpha_encryption_info_dict = google_cloud_beyondcorp_partnerservices_v1alpha_encryption_info_instance.to_dict()
# create an instance of GoogleCloudBeyondcorpPartnerservicesV1alphaEncryptionInfo from a dict
google_cloud_beyondcorp_partnerservices_v1alpha_encryption_info_from_dict = GoogleCloudBeyondcorpPartnerservicesV1alphaEncryptionInfo.from_dict(google_cloud_beyondcorp_partnerservices_v1alpha_encryption_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


