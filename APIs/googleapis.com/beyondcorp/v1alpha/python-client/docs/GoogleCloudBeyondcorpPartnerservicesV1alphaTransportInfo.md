# GoogleCloudBeyondcorpPartnerservicesV1alphaTransportInfo

Message contains the transport layer information to verify the proxy server.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**server_ca_cert_pem** | **str** | Required. PEM encoded CA certificate associated with the proxy server certificate. | [optional] 
**ssl_decrypt_ca_cert_pem** | **str** | Optional. PEM encoded CA certificate associated with the certificate used by proxy server for SSL decryption. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_beyondcorp_partnerservices_v1alpha_transport_info import GoogleCloudBeyondcorpPartnerservicesV1alphaTransportInfo

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudBeyondcorpPartnerservicesV1alphaTransportInfo from a JSON string
google_cloud_beyondcorp_partnerservices_v1alpha_transport_info_instance = GoogleCloudBeyondcorpPartnerservicesV1alphaTransportInfo.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudBeyondcorpPartnerservicesV1alphaTransportInfo.to_json())

# convert the object into a dict
google_cloud_beyondcorp_partnerservices_v1alpha_transport_info_dict = google_cloud_beyondcorp_partnerservices_v1alpha_transport_info_instance.to_dict()
# create an instance of GoogleCloudBeyondcorpPartnerservicesV1alphaTransportInfo from a dict
google_cloud_beyondcorp_partnerservices_v1alpha_transport_info_from_dict = GoogleCloudBeyondcorpPartnerservicesV1alphaTransportInfo.from_dict(google_cloud_beyondcorp_partnerservices_v1alpha_transport_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


