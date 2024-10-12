# BatchServiceResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_insights_enabled** | **bool** |  | [optional] 
**compute_name** | **str** |  | [optional] 
**entry_script** | **str** |  | [optional] 
**environment_name** | **str** |  | [optional] 
**environment_version** | **str** |  | [optional] 
**error_threshold** | **float** |  | [optional] 
**input_format** | **str** |  | [optional] 
**mini_batch_size** | **int** |  | [optional] 
**model_data_collection** | [**ModelDataCollection**](ModelDataCollection.md) |  | [optional] 
**model_ids** | **List[str]** |  | [optional] 
**node_count** | **int** |  | [optional] 
**output_action** | **str** |  | [optional] 
**process_count_per_node** | **int** |  | [optional] 
**scoring_uri** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.batch_service_response import BatchServiceResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BatchServiceResponse from a JSON string
batch_service_response_instance = BatchServiceResponse.from_json(json)
# print the JSON string representation of the object
print(BatchServiceResponse.to_json())

# convert the object into a dict
batch_service_response_dict = batch_service_response_instance.to_dict()
# create an instance of BatchServiceResponse from a dict
batch_service_response_from_dict = BatchServiceResponse.from_dict(batch_service_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


