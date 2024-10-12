# UpdateSystemModelsUpdateMetricsData

Model that retrieves the data for UpdateMetrics

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active_version** | **str** | Active version (bundle number) of update type. | [optional] 
**active_version_by_client** | [**List[UpdateSystemModelsUpdateMetricsDataActiveVersionByClientRecord]**](UpdateSystemModelsUpdateMetricsDataActiveVersionByClientRecord.md) | Generic collection that is of type ActiveVersionByClientRecord | [optional] 
**current_state_by_client** | [**List[UpdateSystemModelsUpdateMetricsDataCurrentStateByClientRecord]**](UpdateSystemModelsUpdateMetricsDataCurrentStateByClientRecord.md) | Generic collection that is of type CurrentStateByClientRecord | [optional] 
**cut_off_date** | **datetime** | Date that has been configured to only show the most recent clients with a cut off date. (Ex. year from current date) | [optional] 
**data_refreshed** | **datetime** | Data was refreshed at this time. | [optional] 
**filtered_client_count** | **int** | Sum of clients represented              Filtered by updateType and lastCheckedInDate | [optional] 
**package_errors** | [**List[UpdateSystemModelsUpdateMetricsDataPackageErrorsRecord]**](UpdateSystemModelsUpdateMetricsDataPackageErrorsRecord.md) | Generic collection that is of type PackageErrorsRecord | [optional] 
**total_client_count** | **int** | Total clients we have ever serviced | [optional] 

## Example

```python
from openapi_client.models.update_system_models_update_metrics_data import UpdateSystemModelsUpdateMetricsData

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateSystemModelsUpdateMetricsData from a JSON string
update_system_models_update_metrics_data_instance = UpdateSystemModelsUpdateMetricsData.from_json(json)
# print the JSON string representation of the object
print(UpdateSystemModelsUpdateMetricsData.to_json())

# convert the object into a dict
update_system_models_update_metrics_data_dict = update_system_models_update_metrics_data_instance.to_dict()
# create an instance of UpdateSystemModelsUpdateMetricsData from a dict
update_system_models_update_metrics_data_from_dict = UpdateSystemModelsUpdateMetricsData.from_dict(update_system_models_update_metrics_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


