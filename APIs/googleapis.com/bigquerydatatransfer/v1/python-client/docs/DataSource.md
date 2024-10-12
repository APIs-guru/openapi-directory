# DataSource

Defines the properties and custom parameters for a data source.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authorization_type** | **str** | Indicates the type of authorization. | [optional] 
**client_id** | **str** | Data source client id which should be used to receive refresh token. | [optional] 
**data_refresh_type** | **str** | Specifies whether the data source supports automatic data refresh for the past few days, and how it&#39;s supported. For some data sources, data might not be complete until a few days later, so it&#39;s useful to refresh data automatically. | [optional] 
**data_source_id** | **str** | Data source id. | [optional] 
**default_data_refresh_window_days** | **int** | Default data refresh window on days. Only meaningful when &#x60;data_refresh_type&#x60; &#x3D; &#x60;SLIDING_WINDOW&#x60;. | [optional] 
**default_schedule** | **str** | Default data transfer schedule. Examples of valid schedules include: &#x60;1st,3rd monday of month 15:30&#x60;, &#x60;every wed,fri of jan,jun 13:15&#x60;, and &#x60;first sunday of quarter 00:00&#x60;. | [optional] 
**description** | **str** | User friendly data source description string. | [optional] 
**display_name** | **str** | User friendly data source name. | [optional] 
**help_url** | **str** | Url for the help document for this data source. | [optional] 
**manual_runs_disabled** | **bool** | Disables backfilling and manual run scheduling for the data source. | [optional] 
**minimum_schedule_interval** | **str** | The minimum interval for scheduler to schedule runs. | [optional] 
**name** | **str** | Output only. Data source resource name. | [optional] [readonly] 
**parameters** | [**List[DataSourceParameter]**](DataSourceParameter.md) | Data source parameters. | [optional] 
**scopes** | **List[str]** | Api auth scopes for which refresh token needs to be obtained. These are scopes needed by a data source to prepare data and ingest them into BigQuery, e.g., https://www.googleapis.com/auth/bigquery | [optional] 
**supports_custom_schedule** | **bool** | Specifies whether the data source supports a user defined schedule, or operates on the default schedule. When set to &#x60;true&#x60;, user can override default schedule. | [optional] 
**supports_multiple_transfers** | **bool** | Deprecated. This field has no effect. | [optional] 
**transfer_type** | **str** | Deprecated. This field has no effect. | [optional] 
**update_deadline_seconds** | **int** | The number of seconds to wait for an update from the data source before the Data Transfer Service marks the transfer as FAILED. | [optional] 

## Example

```python
from openapi_client.models.data_source import DataSource

# TODO update the JSON string below
json = "{}"
# create an instance of DataSource from a JSON string
data_source_instance = DataSource.from_json(json)
# print the JSON string representation of the object
print(DataSource.to_json())

# convert the object into a dict
data_source_dict = data_source_instance.to_dict()
# create an instance of DataSource from a dict
data_source_from_dict = DataSource.from_dict(data_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


