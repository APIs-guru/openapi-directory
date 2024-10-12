# GoogleCloudDatacatalogLineageV1ProcessLinks

Links associated with a specific process.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**List[GoogleCloudDatacatalogLineageV1ProcessLinkInfo]**](GoogleCloudDatacatalogLineageV1ProcessLinkInfo.md) | An array containing link details objects of the links provided in the original request. A single process can result in creating multiple links. If any of the links you provide in the request are created by the same process, they all are included in this array. | [optional] 
**process** | **str** | The process name in the format of &#x60;projects/{project}/locations/{location}/processes/{process}&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datacatalog_lineage_v1_process_links import GoogleCloudDatacatalogLineageV1ProcessLinks

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatacatalogLineageV1ProcessLinks from a JSON string
google_cloud_datacatalog_lineage_v1_process_links_instance = GoogleCloudDatacatalogLineageV1ProcessLinks.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatacatalogLineageV1ProcessLinks.to_json())

# convert the object into a dict
google_cloud_datacatalog_lineage_v1_process_links_dict = google_cloud_datacatalog_lineage_v1_process_links_instance.to_dict()
# create an instance of GoogleCloudDatacatalogLineageV1ProcessLinks from a dict
google_cloud_datacatalog_lineage_v1_process_links_from_dict = GoogleCloudDatacatalogLineageV1ProcessLinks.from_dict(google_cloud_datacatalog_lineage_v1_process_links_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


