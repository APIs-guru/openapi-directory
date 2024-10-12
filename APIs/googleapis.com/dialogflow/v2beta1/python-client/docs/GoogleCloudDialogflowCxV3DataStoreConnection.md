# GoogleCloudDialogflowCxV3DataStoreConnection

A data store connection. It represents a data store in Discovery Engine and the type of the contents it contains.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_store** | **str** | The full name of the referenced data store. Formats: &#x60;projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}&#x60; &#x60;projects/{project}/locations/{location}/dataStores/{data_store}&#x60; | [optional] 
**data_store_type** | **str** | The type of the connected data store. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3_data_store_connection import GoogleCloudDialogflowCxV3DataStoreConnection

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3DataStoreConnection from a JSON string
google_cloud_dialogflow_cx_v3_data_store_connection_instance = GoogleCloudDialogflowCxV3DataStoreConnection.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3DataStoreConnection.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3_data_store_connection_dict = google_cloud_dialogflow_cx_v3_data_store_connection_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3DataStoreConnection from a dict
google_cloud_dialogflow_cx_v3_data_store_connection_from_dict = GoogleCloudDialogflowCxV3DataStoreConnection.from_dict(google_cloud_dialogflow_cx_v3_data_store_connection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


