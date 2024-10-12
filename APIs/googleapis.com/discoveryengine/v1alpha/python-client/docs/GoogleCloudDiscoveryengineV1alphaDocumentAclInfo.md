# GoogleCloudDiscoveryengineV1alphaDocumentAclInfo

ACL Information of the Document.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**readers** | [**List[GoogleCloudDiscoveryengineV1alphaDocumentAclInfoAccessRestriction]**](GoogleCloudDiscoveryengineV1alphaDocumentAclInfoAccessRestriction.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1alpha_document_acl_info import GoogleCloudDiscoveryengineV1alphaDocumentAclInfo

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1alphaDocumentAclInfo from a JSON string
google_cloud_discoveryengine_v1alpha_document_acl_info_instance = GoogleCloudDiscoveryengineV1alphaDocumentAclInfo.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1alphaDocumentAclInfo.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1alpha_document_acl_info_dict = google_cloud_discoveryengine_v1alpha_document_acl_info_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1alphaDocumentAclInfo from a dict
google_cloud_discoveryengine_v1alpha_document_acl_info_from_dict = GoogleCloudDiscoveryengineV1alphaDocumentAclInfo.from_dict(google_cloud_discoveryengine_v1alpha_document_acl_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


