# GoogleCloudDatacatalogLineageV1Run

A lineage run represents an execution of a process that creates lineage events.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | **Dict[str, object]** | Optional. The attributes of the run. Should only be used for the purpose of non-semantic management (classifying, describing or labeling the run). Up to 100 attributes are allowed. | [optional] 
**display_name** | **str** | Optional. A human-readable name you can set to display in a user interface. Must be not longer than 1024 characters and only contain UTF-8 letters or numbers, spaces or characters like &#x60;_-:&amp;.&#x60; | [optional] 
**end_time** | **str** | Optional. The timestamp of the end of the run. | [optional] 
**name** | **str** | Immutable. The resource name of the run. Format: &#x60;projects/{project}/locations/{location}/processes/{process}/runs/{run}&#x60;. Can be specified or auto-assigned. {run} must be not longer than 200 characters and only contain characters in a set: &#x60;a-zA-Z0-9_-:.&#x60; | [optional] 
**start_time** | **str** | Required. The timestamp of the start of the run. | [optional] 
**state** | **str** | Required. The state of the run. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datacatalog_lineage_v1_run import GoogleCloudDatacatalogLineageV1Run

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatacatalogLineageV1Run from a JSON string
google_cloud_datacatalog_lineage_v1_run_instance = GoogleCloudDatacatalogLineageV1Run.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatacatalogLineageV1Run.to_json())

# convert the object into a dict
google_cloud_datacatalog_lineage_v1_run_dict = google_cloud_datacatalog_lineage_v1_run_instance.to_dict()
# create an instance of GoogleCloudDatacatalogLineageV1Run from a dict
google_cloud_datacatalog_lineage_v1_run_from_dict = GoogleCloudDatacatalogLineageV1Run.from_dict(google_cloud_datacatalog_lineage_v1_run_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


