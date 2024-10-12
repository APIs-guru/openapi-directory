# GoogleCloudBeyondcorpPartnerservicesV1alphaProxyConfig

Proxy Configuration of a PartnerTenant.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. Timestamp when the resource was created. | [optional] [readonly] 
**display_name** | **str** | Optional. An arbitrary caller-provided name for the ProxyConfig. Cannot exceed 64 characters. | [optional] 
**encryption_info** | [**GoogleCloudBeyondcorpPartnerservicesV1alphaEncryptionInfo**](GoogleCloudBeyondcorpPartnerservicesV1alphaEncryptionInfo.md) |  | [optional] 
**name** | **str** | Output only. ProxyConfig resource name. | [optional] [readonly] 
**proxy_uri** | **str** | Required. The URI of the proxy server. | [optional] 
**routing_info** | [**GoogleCloudBeyondcorpPartnerservicesV1alphaRoutingInfo**](GoogleCloudBeyondcorpPartnerservicesV1alphaRoutingInfo.md) |  | [optional] 
**transport_info** | [**GoogleCloudBeyondcorpPartnerservicesV1alphaTransportInfo**](GoogleCloudBeyondcorpPartnerservicesV1alphaTransportInfo.md) |  | [optional] 
**update_time** | **str** | Output only. Timestamp when the resource was last modified. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_beyondcorp_partnerservices_v1alpha_proxy_config import GoogleCloudBeyondcorpPartnerservicesV1alphaProxyConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudBeyondcorpPartnerservicesV1alphaProxyConfig from a JSON string
google_cloud_beyondcorp_partnerservices_v1alpha_proxy_config_instance = GoogleCloudBeyondcorpPartnerservicesV1alphaProxyConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudBeyondcorpPartnerservicesV1alphaProxyConfig.to_json())

# convert the object into a dict
google_cloud_beyondcorp_partnerservices_v1alpha_proxy_config_dict = google_cloud_beyondcorp_partnerservices_v1alpha_proxy_config_instance.to_dict()
# create an instance of GoogleCloudBeyondcorpPartnerservicesV1alphaProxyConfig from a dict
google_cloud_beyondcorp_partnerservices_v1alpha_proxy_config_from_dict = GoogleCloudBeyondcorpPartnerservicesV1alphaProxyConfig.from_dict(google_cloud_beyondcorp_partnerservices_v1alpha_proxy_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


