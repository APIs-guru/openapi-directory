# UpdateSystemModelsPagedClientStatusMetadata


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**limit** | **int** | The number of entities this paged response is limited to. | [readonly] 
**offset** | **int** | The number of entities prior to this page of items. | [readonly] 
**report_result_expected** | **str** | The label for data contained in ClientStatus.ReportResults | 
**report_result_label** | **str** | The label for data contained in ClientStatus.ReportResults | 
**report_value_label** | **str** | The label for data contained in ClientStatus.ReportValue | 
**total_count** | **int** | The total number of entities matching the request. | [readonly] 

## Example

```python
from openapi_client.models.update_system_models_paged_client_status_metadata import UpdateSystemModelsPagedClientStatusMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateSystemModelsPagedClientStatusMetadata from a JSON string
update_system_models_paged_client_status_metadata_instance = UpdateSystemModelsPagedClientStatusMetadata.from_json(json)
# print the JSON string representation of the object
print(UpdateSystemModelsPagedClientStatusMetadata.to_json())

# convert the object into a dict
update_system_models_paged_client_status_metadata_dict = update_system_models_paged_client_status_metadata_instance.to_dict()
# create an instance of UpdateSystemModelsPagedClientStatusMetadata from a dict
update_system_models_paged_client_status_metadata_from_dict = UpdateSystemModelsPagedClientStatusMetadata.from_dict(update_system_models_paged_client_status_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


