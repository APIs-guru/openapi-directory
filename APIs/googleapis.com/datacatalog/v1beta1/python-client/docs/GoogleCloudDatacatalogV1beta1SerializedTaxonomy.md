# GoogleCloudDatacatalogV1beta1SerializedTaxonomy

Message capturing a taxonomy and its policy tag hierarchy as a nested proto. Used for taxonomy import/export and mutation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**activated_policy_types** | **List[str]** | A list of policy types that are activated for a taxonomy. | [optional] 
**description** | **str** | Description of the serialized taxonomy. The length of the description is limited to 2000 bytes when encoded in UTF-8. If not set, defaults to an empty description. | [optional] 
**display_name** | **str** | Required. Display name of the taxonomy. Max 200 bytes when encoded in UTF-8. | [optional] 
**policy_tags** | [**List[GoogleCloudDatacatalogV1beta1SerializedPolicyTag]**](GoogleCloudDatacatalogV1beta1SerializedPolicyTag.md) | Top level policy tags associated with the taxonomy if any. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datacatalog_v1beta1_serialized_taxonomy import GoogleCloudDatacatalogV1beta1SerializedTaxonomy

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatacatalogV1beta1SerializedTaxonomy from a JSON string
google_cloud_datacatalog_v1beta1_serialized_taxonomy_instance = GoogleCloudDatacatalogV1beta1SerializedTaxonomy.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatacatalogV1beta1SerializedTaxonomy.to_json())

# convert the object into a dict
google_cloud_datacatalog_v1beta1_serialized_taxonomy_dict = google_cloud_datacatalog_v1beta1_serialized_taxonomy_instance.to_dict()
# create an instance of GoogleCloudDatacatalogV1beta1SerializedTaxonomy from a dict
google_cloud_datacatalog_v1beta1_serialized_taxonomy_from_dict = GoogleCloudDatacatalogV1beta1SerializedTaxonomy.from_dict(google_cloud_datacatalog_v1beta1_serialized_taxonomy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


