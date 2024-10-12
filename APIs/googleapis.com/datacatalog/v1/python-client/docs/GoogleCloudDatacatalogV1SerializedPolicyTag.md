# GoogleCloudDatacatalogV1SerializedPolicyTag

A nested protocol buffer that represents a policy tag and all its descendants.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**child_policy_tags** | [**List[GoogleCloudDatacatalogV1SerializedPolicyTag]**](GoogleCloudDatacatalogV1SerializedPolicyTag.md) | Children of the policy tag, if any. | [optional] 
**description** | **str** | Description of the serialized policy tag. At most 2000 bytes when encoded in UTF-8. If not set, defaults to an empty description. | [optional] 
**display_name** | **str** | Required. Display name of the policy tag. At most 200 bytes when encoded in UTF-8. | [optional] 
**policy_tag** | **str** | Resource name of the policy tag. This field is ignored when calling &#x60;ImportTaxonomies&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datacatalog_v1_serialized_policy_tag import GoogleCloudDatacatalogV1SerializedPolicyTag

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatacatalogV1SerializedPolicyTag from a JSON string
google_cloud_datacatalog_v1_serialized_policy_tag_instance = GoogleCloudDatacatalogV1SerializedPolicyTag.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatacatalogV1SerializedPolicyTag.to_json())

# convert the object into a dict
google_cloud_datacatalog_v1_serialized_policy_tag_dict = google_cloud_datacatalog_v1_serialized_policy_tag_instance.to_dict()
# create an instance of GoogleCloudDatacatalogV1SerializedPolicyTag from a dict
google_cloud_datacatalog_v1_serialized_policy_tag_from_dict = GoogleCloudDatacatalogV1SerializedPolicyTag.from_dict(google_cloud_datacatalog_v1_serialized_policy_tag_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


