# GoogleCloudDiscoveryengineV1betaReplyReference

Defines reference in reply.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**anchor_text** | **str** | Anchor text. | [optional] 
**end** | **int** | Anchor text end index. | [optional] 
**start** | **int** | Anchor text start index. | [optional] 
**uri** | **str** | URI link reference. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1beta_reply_reference import GoogleCloudDiscoveryengineV1betaReplyReference

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1betaReplyReference from a JSON string
google_cloud_discoveryengine_v1beta_reply_reference_instance = GoogleCloudDiscoveryengineV1betaReplyReference.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1betaReplyReference.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1beta_reply_reference_dict = google_cloud_discoveryengine_v1beta_reply_reference_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1betaReplyReference from a dict
google_cloud_discoveryengine_v1beta_reply_reference_from_dict = GoogleCloudDiscoveryengineV1betaReplyReference.from_dict(google_cloud_discoveryengine_v1beta_reply_reference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


