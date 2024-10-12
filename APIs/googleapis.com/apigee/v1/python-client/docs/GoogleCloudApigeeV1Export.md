# GoogleCloudApigeeV1Export

Details of an export job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created** | **str** | Output only. Time the export job was created. | [optional] [readonly] 
**datastore_name** | **str** | Name of the datastore that is the destination of the export job [datastore] | [optional] 
**description** | **str** | Description of the export job. | [optional] 
**error** | **str** | Output only. Error is set when export fails | [optional] [readonly] 
**execution_time** | **str** | Output only. Execution time for this export job. If the job is still in progress, it will be set to the amount of time that has elapsed since&#x60;created&#x60;, in seconds. Else, it will set to (&#x60;updated&#x60; - &#x60;created&#x60;), in seconds. | [optional] [readonly] 
**name** | **str** | Display name of the export job. | [optional] 
**var_self** | **str** | Output only. Self link of the export job. A URI that can be used to retrieve the status of an export job. Example: &#x60;/organizations/myorg/environments/myenv/analytics/exports/9cfc0d85-0f30-46d6-ae6f-318d0cb961bd&#x60; | [optional] [readonly] 
**state** | **str** | Output only. Status of the export job. Valid values include &#x60;enqueued&#x60;, &#x60;running&#x60;, &#x60;completed&#x60;, and &#x60;failed&#x60;. | [optional] [readonly] 
**updated** | **str** | Output only. Time the export job was last updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_export import GoogleCloudApigeeV1Export

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1Export from a JSON string
google_cloud_apigee_v1_export_instance = GoogleCloudApigeeV1Export.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1Export.to_json())

# convert the object into a dict
google_cloud_apigee_v1_export_dict = google_cloud_apigee_v1_export_instance.to_dict()
# create an instance of GoogleCloudApigeeV1Export from a dict
google_cloud_apigee_v1_export_from_dict = GoogleCloudApigeeV1Export.from_dict(google_cloud_apigee_v1_export_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


