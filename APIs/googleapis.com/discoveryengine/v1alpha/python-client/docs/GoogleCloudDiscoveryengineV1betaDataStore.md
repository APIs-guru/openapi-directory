# GoogleCloudDiscoveryengineV1betaDataStore

DataStore captures global settings and configs at the DataStore level.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content_config** | **str** | Immutable. The content config of the data store. If this field is unset, the server behavior defaults to ContentConfig.NO_CONTENT. | [optional] 
**create_time** | **str** | Output only. Timestamp the DataStore was created at. | [optional] [readonly] 
**default_schema_id** | **str** | Output only. The id of the default Schema asscociated to this data store. | [optional] [readonly] 
**display_name** | **str** | Required. The data store display name. This field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned. | [optional] 
**document_processing_config** | [**GoogleCloudDiscoveryengineV1betaDocumentProcessingConfig**](GoogleCloudDiscoveryengineV1betaDocumentProcessingConfig.md) |  | [optional] 
**industry_vertical** | **str** | Immutable. The industry vertical that the data store registers. | [optional] 
**name** | **str** | Immutable. The full resource name of the data store. Format: &#x60;projects/{project}/locations/{location}/collections/{collection_id}/dataStores/{data_store_id}&#x60;. This field must be a UTF-8 encoded string with a length limit of 1024 characters. | [optional] 
**solution_types** | **List[str]** | The solutions that the data store enrolls. Available solutions for each industry_vertical: * &#x60;MEDIA&#x60;: &#x60;SOLUTION_TYPE_RECOMMENDATION&#x60; and &#x60;SOLUTION_TYPE_SEARCH&#x60;. * &#x60;SITE_SEARCH&#x60;: &#x60;SOLUTION_TYPE_SEARCH&#x60; is automatically enrolled. Other solutions cannot be enrolled. | [optional] 
**starting_schema** | [**GoogleCloudDiscoveryengineV1betaSchema**](GoogleCloudDiscoveryengineV1betaSchema.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1beta_data_store import GoogleCloudDiscoveryengineV1betaDataStore

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1betaDataStore from a JSON string
google_cloud_discoveryengine_v1beta_data_store_instance = GoogleCloudDiscoveryengineV1betaDataStore.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1betaDataStore.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1beta_data_store_dict = google_cloud_discoveryengine_v1beta_data_store_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1betaDataStore from a dict
google_cloud_discoveryengine_v1beta_data_store_from_dict = GoogleCloudDiscoveryengineV1betaDataStore.from_dict(google_cloud_discoveryengine_v1beta_data_store_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


