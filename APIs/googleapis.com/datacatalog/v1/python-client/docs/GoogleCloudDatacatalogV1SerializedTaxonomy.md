# GoogleCloudDatacatalogV1SerializedTaxonomy

A nested protocol buffer that represents a taxonomy and the hierarchy of its policy tags. Used for taxonomy replacement, import, and export.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**activated_policy_types** | **List[str]** | A list of policy types that are activated per taxonomy. | [optional] 
**description** | **str** | Description of the serialized taxonomy. At most 2000 bytes when encoded in UTF-8. If not set, defaults to an empty description. | [optional] 
**display_name** | **str** | Required. Display name of the taxonomy. At most 200 bytes when encoded in UTF-8. | [optional] 
**policy_tags** | [**List[GoogleCloudDatacatalogV1SerializedPolicyTag]**](GoogleCloudDatacatalogV1SerializedPolicyTag.md) | Top level policy tags associated with the taxonomy, if any. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datacatalog_v1_serialized_taxonomy import GoogleCloudDatacatalogV1SerializedTaxonomy

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatacatalogV1SerializedTaxonomy from a JSON string
google_cloud_datacatalog_v1_serialized_taxonomy_instance = GoogleCloudDatacatalogV1SerializedTaxonomy.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatacatalogV1SerializedTaxonomy.to_json())

# convert the object into a dict
google_cloud_datacatalog_v1_serialized_taxonomy_dict = google_cloud_datacatalog_v1_serialized_taxonomy_instance.to_dict()
# create an instance of GoogleCloudDatacatalogV1SerializedTaxonomy from a dict
google_cloud_datacatalog_v1_serialized_taxonomy_from_dict = GoogleCloudDatacatalogV1SerializedTaxonomy.from_dict(google_cloud_datacatalog_v1_serialized_taxonomy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


