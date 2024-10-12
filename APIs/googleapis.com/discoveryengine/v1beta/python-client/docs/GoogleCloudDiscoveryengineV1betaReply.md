# GoogleCloudDiscoveryengineV1betaReply

Defines a reply message to user.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**references** | [**List[GoogleCloudDiscoveryengineV1betaReplyReference]**](GoogleCloudDiscoveryengineV1betaReplyReference.md) | References in the reply. | [optional] 
**reply** | **str** | DEPRECATED: use &#x60;summary&#x60; instead. Text reply. | [optional] 
**summary** | [**GoogleCloudDiscoveryengineV1betaSearchResponseSummary**](GoogleCloudDiscoveryengineV1betaSearchResponseSummary.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1beta_reply import GoogleCloudDiscoveryengineV1betaReply

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1betaReply from a JSON string
google_cloud_discoveryengine_v1beta_reply_instance = GoogleCloudDiscoveryengineV1betaReply.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1betaReply.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1beta_reply_dict = google_cloud_discoveryengine_v1beta_reply_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1betaReply from a dict
google_cloud_discoveryengine_v1beta_reply_from_dict = GoogleCloudDiscoveryengineV1betaReply.from_dict(google_cloud_discoveryengine_v1beta_reply_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


