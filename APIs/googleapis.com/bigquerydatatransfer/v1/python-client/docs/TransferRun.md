# TransferRun

Represents a data transfer run.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_source_id** | **str** | Output only. Data source id. | [optional] [readonly] 
**destination_dataset_id** | **str** | Output only. The BigQuery target dataset id. | [optional] [readonly] 
**email_preferences** | [**EmailPreferences**](EmailPreferences.md) |  | [optional] 
**end_time** | **str** | Output only. Time when transfer run ended. Parameter ignored by server for input requests. | [optional] [readonly] 
**error_status** | [**Status**](Status.md) |  | [optional] 
**name** | **str** | The resource name of the transfer run. Transfer run names have the form &#x60;projects/{project_id}/locations/{location}/transferConfigs/{config_id}/runs/{run_id}&#x60;. The name is ignored when creating a transfer run. | [optional] 
**notification_pubsub_topic** | **str** | Output only. Pub/Sub topic where a notification will be sent after this transfer run finishes. The format for specifying a pubsub topic is: &#x60;projects/{project_id}/topics/{topic_id}&#x60; | [optional] [readonly] 
**params** | **Dict[str, object]** | Output only. Parameters specific to each data source. For more information see the bq tab in the &#39;Setting up a data transfer&#39; section for each data source. For example the parameters for Cloud Storage transfers are listed here: https://cloud.google.com/bigquery-transfer/docs/cloud-storage-transfer#bq | [optional] [readonly] 
**run_time** | **str** | For batch transfer runs, specifies the date and time of the data should be ingested. | [optional] 
**schedule** | **str** | Output only. Describes the schedule of this transfer run if it was created as part of a regular schedule. For batch transfer runs that are scheduled manually, this is empty. NOTE: the system might choose to delay the schedule depending on the current load, so &#x60;schedule_time&#x60; doesn&#39;t always match this. | [optional] [readonly] 
**schedule_time** | **str** | Minimum time after which a transfer run can be started. | [optional] 
**start_time** | **str** | Output only. Time when transfer run was started. Parameter ignored by server for input requests. | [optional] [readonly] 
**state** | **str** | Data transfer run state. Ignored for input requests. | [optional] 
**update_time** | **str** | Output only. Last time the data transfer run state was updated. | [optional] [readonly] 
**user_id** | **str** | Deprecated. Unique ID of the user on whose behalf transfer is done. | [optional] 

## Example

```python
from openapi_client.models.transfer_run import TransferRun

# TODO update the JSON string below
json = "{}"
# create an instance of TransferRun from a JSON string
transfer_run_instance = TransferRun.from_json(json)
# print the JSON string representation of the object
print(TransferRun.to_json())

# convert the object into a dict
transfer_run_dict = transfer_run_instance.to_dict()
# create an instance of TransferRun from a dict
transfer_run_from_dict = TransferRun.from_dict(transfer_run_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


