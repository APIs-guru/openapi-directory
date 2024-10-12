# TransferConfig

Represents a data transfer configuration. A transfer configuration contains all metadata needed to perform a data transfer. For example, `destination_dataset_id` specifies where data should be stored. When a new transfer configuration is created, the specified `destination_dataset_id` is created when needed and shared with the appropriate data source service account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_refresh_window_days** | **int** | The number of days to look back to automatically refresh the data. For example, if &#x60;data_refresh_window_days &#x3D; 10&#x60;, then every day BigQuery reingests data for [today-10, today-1], rather than ingesting data for just [today-1]. Only valid if the data source supports the feature. Set the value to 0 to use the default value. | [optional] 
**data_source_id** | **str** | Data source ID. This cannot be changed once data transfer is created. The full list of available data source IDs can be returned through an API call: https://cloud.google.com/bigquery-transfer/docs/reference/datatransfer/rest/v1/projects.locations.dataSources/list | [optional] 
**dataset_region** | **str** | Output only. Region in which BigQuery dataset is located. | [optional] [readonly] 
**destination_dataset_id** | **str** | The BigQuery target dataset id. | [optional] 
**disabled** | **bool** | Is this config disabled. When set to true, no runs will be scheduled for this transfer config. | [optional] 
**display_name** | **str** | User specified display name for the data transfer. | [optional] 
**email_preferences** | [**EmailPreferences**](EmailPreferences.md) |  | [optional] 
**encryption_configuration** | [**EncryptionConfiguration**](EncryptionConfiguration.md) |  | [optional] 
**name** | **str** | The resource name of the transfer config. Transfer config names have the form either &#x60;projects/{project_id}/locations/{region}/transferConfigs/{config_id}&#x60; or &#x60;projects/{project_id}/transferConfigs/{config_id}&#x60;, where &#x60;config_id&#x60; is usually a UUID, even though it is not guaranteed or required. The name is ignored when creating a transfer config. | [optional] 
**next_run_time** | **str** | Output only. Next time when data transfer will run. | [optional] [readonly] 
**notification_pubsub_topic** | **str** | Pub/Sub topic where notifications will be sent after transfer runs associated with this transfer config finish. The format for specifying a pubsub topic is: &#x60;projects/{project_id}/topics/{topic_id}&#x60; | [optional] 
**owner_info** | [**UserInfo**](UserInfo.md) |  | [optional] 
**params** | **Dict[str, object]** | Parameters specific to each data source. For more information see the bq tab in the &#39;Setting up a data transfer&#39; section for each data source. For example the parameters for Cloud Storage transfers are listed here: https://cloud.google.com/bigquery-transfer/docs/cloud-storage-transfer#bq | [optional] 
**schedule** | **str** | Data transfer schedule. If the data source does not support a custom schedule, this should be empty. If it is empty, the default value for the data source will be used. The specified times are in UTC. Examples of valid format: &#x60;1st,3rd monday of month 15:30&#x60;, &#x60;every wed,fri of jan,jun 13:15&#x60;, and &#x60;first sunday of quarter 00:00&#x60;. See more explanation about the format here: https://cloud.google.com/appengine/docs/flexible/python/scheduling-jobs-with-cron-yaml#the_schedule_format NOTE: The minimum interval time between recurring transfers depends on the data source; refer to the documentation for your data source. | [optional] 
**schedule_options** | [**ScheduleOptions**](ScheduleOptions.md) |  | [optional] 
**state** | **str** | Output only. State of the most recently updated transfer run. | [optional] [readonly] 
**update_time** | **str** | Output only. Data transfer modification time. Ignored by server on input. | [optional] [readonly] 
**user_id** | **str** | Deprecated. Unique ID of the user on whose behalf transfer is done. | [optional] 

## Example

```python
from openapi_client.models.transfer_config import TransferConfig

# TODO update the JSON string below
json = "{}"
# create an instance of TransferConfig from a JSON string
transfer_config_instance = TransferConfig.from_json(json)
# print the JSON string representation of the object
print(TransferConfig.to_json())

# convert the object into a dict
transfer_config_dict = transfer_config_instance.to_dict()
# create an instance of TransferConfig from a dict
transfer_config_from_dict = TransferConfig.from_dict(transfer_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


