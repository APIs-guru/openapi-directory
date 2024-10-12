# GoogleCloudDiscoveryengineV1alphaReply

Defines a reply message to user.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**references** | [**List[GoogleCloudDiscoveryengineV1alphaReplyReference]**](GoogleCloudDiscoveryengineV1alphaReplyReference.md) | References in the reply. | [optional] 
**reply** | **str** | DEPRECATED: use &#x60;summary&#x60; instead. Text reply. | [optional] 
**summary** | [**GoogleCloudDiscoveryengineV1alphaSearchResponseSummary**](GoogleCloudDiscoveryengineV1alphaSearchResponseSummary.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1alpha_reply import GoogleCloudDiscoveryengineV1alphaReply

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1alphaReply from a JSON string
google_cloud_discoveryengine_v1alpha_reply_instance = GoogleCloudDiscoveryengineV1alphaReply.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1alphaReply.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1alpha_reply_dict = google_cloud_discoveryengine_v1alpha_reply_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1alphaReply from a dict
google_cloud_discoveryengine_v1alpha_reply_from_dict = GoogleCloudDiscoveryengineV1alphaReply.from_dict(google_cloud_discoveryengine_v1alpha_reply_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


