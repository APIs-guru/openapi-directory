# GoogleCloudDatapipelinesV1Pipeline

The main pipeline entity and all the necessary metadata for launching and managing linked jobs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. Immutable. The timestamp when the pipeline was initially created. Set by the Data Pipelines service. | [optional] [readonly] 
**display_name** | **str** | Required. The display name of the pipeline. It can contain only letters ([A-Za-z]), numbers ([0-9]), hyphens (-), and underscores (_). | [optional] 
**job_count** | **int** | Output only. Number of jobs. | [optional] [readonly] 
**last_update_time** | **str** | Output only. Immutable. The timestamp when the pipeline was last modified. Set by the Data Pipelines service. | [optional] [readonly] 
**name** | **str** | The pipeline name. For example: &#x60;projects/PROJECT_ID/locations/LOCATION_ID/pipelines/PIPELINE_ID&#x60;. * &#x60;PROJECT_ID&#x60; can contain letters ([A-Za-z]), numbers ([0-9]), hyphens (-), colons (:), and periods (.). For more information, see [Identifying projects](https://cloud.google.com/resource-manager/docs/creating-managing-projects#identifying_projects). * &#x60;LOCATION_ID&#x60; is the canonical ID for the pipeline&#39;s location. The list of available locations can be obtained by calling &#x60;google.cloud.location.Locations.ListLocations&#x60;. Note that the Data Pipelines service is not available in all regions. It depends on Cloud Scheduler, an App Engine application, so it&#39;s only available in [App Engine regions](https://cloud.google.com/about/locations#region). * &#x60;PIPELINE_ID&#x60; is the ID of the pipeline. Must be unique for the selected project and location. | [optional] 
**pipeline_sources** | **Dict[str, str]** | Immutable. The sources of the pipeline (for example, Dataplex). The keys and values are set by the corresponding sources during pipeline creation. | [optional] 
**schedule_info** | [**GoogleCloudDatapipelinesV1ScheduleSpec**](GoogleCloudDatapipelinesV1ScheduleSpec.md) |  | [optional] 
**scheduler_service_account_email** | **str** | Optional. A service account email to be used with the Cloud Scheduler job. If not specified, the default compute engine service account will be used. | [optional] 
**state** | **str** | Required. The state of the pipeline. When the pipeline is created, the state is set to &#39;PIPELINE_STATE_ACTIVE&#39; by default. State changes can be requested by setting the state to stopping, paused, or resuming. State cannot be changed through UpdatePipeline requests. | [optional] 
**type** | **str** | Required. The type of the pipeline. This field affects the scheduling of the pipeline and the type of metrics to show for the pipeline. | [optional] 
**workload** | [**GoogleCloudDatapipelinesV1Workload**](GoogleCloudDatapipelinesV1Workload.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datapipelines_v1_pipeline import GoogleCloudDatapipelinesV1Pipeline

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatapipelinesV1Pipeline from a JSON string
google_cloud_datapipelines_v1_pipeline_instance = GoogleCloudDatapipelinesV1Pipeline.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatapipelinesV1Pipeline.to_json())

# convert the object into a dict
google_cloud_datapipelines_v1_pipeline_dict = google_cloud_datapipelines_v1_pipeline_instance.to_dict()
# create an instance of GoogleCloudDatapipelinesV1Pipeline from a dict
google_cloud_datapipelines_v1_pipeline_from_dict = GoogleCloudDatapipelinesV1Pipeline.from_dict(google_cloud_datapipelines_v1_pipeline_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


