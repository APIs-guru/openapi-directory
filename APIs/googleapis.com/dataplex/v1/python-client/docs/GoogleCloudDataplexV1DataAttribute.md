# GoogleCloudDataplexV1DataAttribute

Denotes one dataAttribute in a dataTaxonomy, for example, PII. DataAttribute resources can be defined in a hierarchy. A single dataAttribute resource can contain specs of multiple types PII - ResourceAccessSpec : - readers :foo@bar.com - DataAccessSpec : - readers :bar@foo.com 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attribute_count** | **int** | Output only. The number of child attributes present for this attribute. | [optional] [readonly] 
**create_time** | **str** | Output only. The time when the DataAttribute was created. | [optional] [readonly] 
**data_access_spec** | [**GoogleCloudDataplexV1DataAccessSpec**](GoogleCloudDataplexV1DataAccessSpec.md) |  | [optional] 
**description** | **str** | Optional. Description of the DataAttribute. | [optional] 
**display_name** | **str** | Optional. User friendly display name. | [optional] 
**etag** | **str** | This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. | [optional] 
**labels** | **Dict[str, str]** | Optional. User-defined labels for the DataAttribute. | [optional] 
**name** | **str** | Output only. The relative resource name of the dataAttribute, of the form: projects/{project_number}/locations/{location_id}/dataTaxonomies/{dataTaxonomy}/attributes/{data_attribute_id}. | [optional] [readonly] 
**parent_id** | **str** | Optional. The ID of the parent DataAttribute resource, should belong to the same data taxonomy. Circular dependency in parent chain is not valid. Maximum depth of the hierarchy allowed is 4. a -&gt; b -&gt; c -&gt; d -&gt; e, depth &#x3D; 4 | [optional] 
**resource_access_spec** | [**GoogleCloudDataplexV1ResourceAccessSpec**](GoogleCloudDataplexV1ResourceAccessSpec.md) |  | [optional] 
**uid** | **str** | Output only. System generated globally unique ID for the DataAttribute. This ID will be different if the DataAttribute is deleted and re-created with the same name. | [optional] [readonly] 
**update_time** | **str** | Output only. The time when the DataAttribute was last updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_dataplex_v1_data_attribute import GoogleCloudDataplexV1DataAttribute

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDataplexV1DataAttribute from a JSON string
google_cloud_dataplex_v1_data_attribute_instance = GoogleCloudDataplexV1DataAttribute.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDataplexV1DataAttribute.to_json())

# convert the object into a dict
google_cloud_dataplex_v1_data_attribute_dict = google_cloud_dataplex_v1_data_attribute_instance.to_dict()
# create an instance of GoogleCloudDataplexV1DataAttribute from a dict
google_cloud_dataplex_v1_data_attribute_from_dict = GoogleCloudDataplexV1DataAttribute.from_dict(google_cloud_dataplex_v1_data_attribute_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


