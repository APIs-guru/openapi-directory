# GoogleCloudDiscoveryengineV1alphaDocumentAclInfoAccessRestriction

AclRestriction to model complex inheritance restrictions. Example: Modeling a \"Both Permit\" inheritance, where to access a child document, user needs to have access to parent document. Document Hierarchy - Space_S --> Page_P. Readers: Space_S: group_1, user_1 Page_P: group_2, group_3, user_2 Space_S ACL Restriction - { \"acl_info\": { \"readers\": [ { \"principals\": [ { \"group_id\": \"group_1\" }, { \"user_id\": \"user_1\" } ] } ] } } Page_P ACL Restriction. { \"acl_info\": { \"readers\": [ { \"principals\": [ { \"group_id\": \"group_2\" }, { \"group_id\": \"group_3\" }, { \"user_id\": \"user_2\" } ], }, { \"principals\": [ { \"group_id\": \"group_1\" }, { \"user_id\": \"user_1\" } ], } ] } }

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**principals** | [**List[GoogleCloudDiscoveryengineV1alphaPrincipal]**](GoogleCloudDiscoveryengineV1alphaPrincipal.md) | List of principals. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1alpha_document_acl_info_access_restriction import GoogleCloudDiscoveryengineV1alphaDocumentAclInfoAccessRestriction

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1alphaDocumentAclInfoAccessRestriction from a JSON string
google_cloud_discoveryengine_v1alpha_document_acl_info_access_restriction_instance = GoogleCloudDiscoveryengineV1alphaDocumentAclInfoAccessRestriction.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1alphaDocumentAclInfoAccessRestriction.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1alpha_document_acl_info_access_restriction_dict = google_cloud_discoveryengine_v1alpha_document_acl_info_access_restriction_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1alphaDocumentAclInfoAccessRestriction from a dict
google_cloud_discoveryengine_v1alpha_document_acl_info_access_restriction_from_dict = GoogleCloudDiscoveryengineV1alphaDocumentAclInfoAccessRestriction.from_dict(google_cloud_discoveryengine_v1alpha_document_acl_info_access_restriction_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


