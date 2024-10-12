# GoogleCloudBeyondcorpPartnerservicesV1alphaRoutingInfo

Message contains the routing information to direct traffic to the proxy server.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pac_uri** | **str** | Required. Proxy Auto-Configuration (PAC) URI. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_beyondcorp_partnerservices_v1alpha_routing_info import GoogleCloudBeyondcorpPartnerservicesV1alphaRoutingInfo

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudBeyondcorpPartnerservicesV1alphaRoutingInfo from a JSON string
google_cloud_beyondcorp_partnerservices_v1alpha_routing_info_instance = GoogleCloudBeyondcorpPartnerservicesV1alphaRoutingInfo.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudBeyondcorpPartnerservicesV1alphaRoutingInfo.to_json())

# convert the object into a dict
google_cloud_beyondcorp_partnerservices_v1alpha_routing_info_dict = google_cloud_beyondcorp_partnerservices_v1alpha_routing_info_instance.to_dict()
# create an instance of GoogleCloudBeyondcorpPartnerservicesV1alphaRoutingInfo from a dict
google_cloud_beyondcorp_partnerservices_v1alpha_routing_info_from_dict = GoogleCloudBeyondcorpPartnerservicesV1alphaRoutingInfo.from_dict(google_cloud_beyondcorp_partnerservices_v1alpha_routing_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


