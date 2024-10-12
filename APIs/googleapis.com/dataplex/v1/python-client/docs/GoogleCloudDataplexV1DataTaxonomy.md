# GoogleCloudDataplexV1DataTaxonomy

DataTaxonomy represents a set of hierarchical DataAttributes resources, grouped with a common theme Eg: 'SensitiveDataTaxonomy' can have attributes to manage PII data. It is defined at project level.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attribute_count** | **int** | Output only. The number of attributes in the DataTaxonomy. | [optional] [readonly] 
**class_count** | **int** | Output only. The number of classes in the DataTaxonomy. | [optional] [readonly] 
**create_time** | **str** | Output only. The time when the DataTaxonomy was created. | [optional] [readonly] 
**description** | **str** | Optional. Description of the DataTaxonomy. | [optional] 
**display_name** | **str** | Optional. User friendly display name. | [optional] 
**etag** | **str** | This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. | [optional] 
**labels** | **Dict[str, str]** | Optional. User-defined labels for the DataTaxonomy. | [optional] 
**name** | **str** | Output only. The relative resource name of the DataTaxonomy, of the form: projects/{project_number}/locations/{location_id}/dataTaxonomies/{data_taxonomy_id}. | [optional] [readonly] 
**uid** | **str** | Output only. System generated globally unique ID for the dataTaxonomy. This ID will be different if the DataTaxonomy is deleted and re-created with the same name. | [optional] [readonly] 
**update_time** | **str** | Output only. The time when the DataTaxonomy was last updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_dataplex_v1_data_taxonomy import GoogleCloudDataplexV1DataTaxonomy

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDataplexV1DataTaxonomy from a JSON string
google_cloud_dataplex_v1_data_taxonomy_instance = GoogleCloudDataplexV1DataTaxonomy.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDataplexV1DataTaxonomy.to_json())

# convert the object into a dict
google_cloud_dataplex_v1_data_taxonomy_dict = google_cloud_dataplex_v1_data_taxonomy_instance.to_dict()
# create an instance of GoogleCloudDataplexV1DataTaxonomy from a dict
google_cloud_dataplex_v1_data_taxonomy_from_dict = GoogleCloudDataplexV1DataTaxonomy.from_dict(google_cloud_dataplex_v1_data_taxonomy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


