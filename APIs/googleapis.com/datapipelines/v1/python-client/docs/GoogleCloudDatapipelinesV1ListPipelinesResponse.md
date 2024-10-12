# GoogleCloudDatapipelinesV1ListPipelinesResponse

Response message for ListPipelines.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token, which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 
**pipelines** | [**List[GoogleCloudDatapipelinesV1Pipeline]**](GoogleCloudDatapipelinesV1Pipeline.md) | Results that matched the filter criteria and were accessible to the caller. Results are always in descending order of pipeline creation date. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datapipelines_v1_list_pipelines_response import GoogleCloudDatapipelinesV1ListPipelinesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatapipelinesV1ListPipelinesResponse from a JSON string
google_cloud_datapipelines_v1_list_pipelines_response_instance = GoogleCloudDatapipelinesV1ListPipelinesResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatapipelinesV1ListPipelinesResponse.to_json())

# convert the object into a dict
google_cloud_datapipelines_v1_list_pipelines_response_dict = google_cloud_datapipelines_v1_list_pipelines_response_instance.to_dict()
# create an instance of GoogleCloudDatapipelinesV1ListPipelinesResponse from a dict
google_cloud_datapipelines_v1_list_pipelines_response_from_dict = GoogleCloudDatapipelinesV1ListPipelinesResponse.from_dict(google_cloud_datapipelines_v1_list_pipelines_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


