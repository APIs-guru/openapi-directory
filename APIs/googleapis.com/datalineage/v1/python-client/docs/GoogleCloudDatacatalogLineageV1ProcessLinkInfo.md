# GoogleCloudDatacatalogLineageV1ProcessLinkInfo

Link details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_time** | **str** | The end of the last event establishing this link-process tuple. | [optional] 
**link** | **str** | The name of the link in the format of &#x60;projects/{project}/locations/{location}/links/{link}&#x60;. | [optional] 
**start_time** | **str** | The start of the first event establishing this link-process tuple. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datacatalog_lineage_v1_process_link_info import GoogleCloudDatacatalogLineageV1ProcessLinkInfo

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatacatalogLineageV1ProcessLinkInfo from a JSON string
google_cloud_datacatalog_lineage_v1_process_link_info_instance = GoogleCloudDatacatalogLineageV1ProcessLinkInfo.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatacatalogLineageV1ProcessLinkInfo.to_json())

# convert the object into a dict
google_cloud_datacatalog_lineage_v1_process_link_info_dict = google_cloud_datacatalog_lineage_v1_process_link_info_instance.to_dict()
# create an instance of GoogleCloudDatacatalogLineageV1ProcessLinkInfo from a dict
google_cloud_datacatalog_lineage_v1_process_link_info_from_dict = GoogleCloudDatacatalogLineageV1ProcessLinkInfo.from_dict(google_cloud_datacatalog_lineage_v1_process_link_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


