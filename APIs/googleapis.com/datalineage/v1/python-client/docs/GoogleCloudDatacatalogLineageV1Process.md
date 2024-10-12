# GoogleCloudDatacatalogLineageV1Process

A process is the definition of a data transformation operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | **Dict[str, object]** | Optional. The attributes of the process. Should only be used for the purpose of non-semantic management (classifying, describing or labeling the process). Up to 100 attributes are allowed. | [optional] 
**display_name** | **str** | Optional. A human-readable name you can set to display in a user interface. Must be not longer than 200 characters and only contain UTF-8 letters or numbers, spaces or characters like &#x60;_-:&amp;.&#x60; | [optional] 
**name** | **str** | Immutable. The resource name of the lineage process. Format: &#x60;projects/{project}/locations/{location}/processes/{process}&#x60;. Can be specified or auto-assigned. {process} must be not longer than 200 characters and only contain characters in a set: &#x60;a-zA-Z0-9_-:.&#x60; | [optional] 
**origin** | [**GoogleCloudDatacatalogLineageV1Origin**](GoogleCloudDatacatalogLineageV1Origin.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datacatalog_lineage_v1_process import GoogleCloudDatacatalogLineageV1Process

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatacatalogLineageV1Process from a JSON string
google_cloud_datacatalog_lineage_v1_process_instance = GoogleCloudDatacatalogLineageV1Process.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatacatalogLineageV1Process.to_json())

# convert the object into a dict
google_cloud_datacatalog_lineage_v1_process_dict = google_cloud_datacatalog_lineage_v1_process_instance.to_dict()
# create an instance of GoogleCloudDatacatalogLineageV1Process from a dict
google_cloud_datacatalog_lineage_v1_process_from_dict = GoogleCloudDatacatalogLineageV1Process.from_dict(google_cloud_datacatalog_lineage_v1_process_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


