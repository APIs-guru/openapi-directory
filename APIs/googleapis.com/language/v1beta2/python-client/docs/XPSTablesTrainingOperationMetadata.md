# XPSTablesTrainingOperationMetadata


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_model_stage** | **str** | Current stage of creating model. | [optional] 
**optimization_objective** | **str** | The optimization objective for model. | [optional] 
**top_trials** | [**List[XPSTuningTrial]**](XPSTuningTrial.md) | This field is for training. When the operation is terminated successfully, AutoML Backend post this field to operation metadata in spanner. If the metadata has no trials returned, the training operation is supposed to be a failure. | [optional] 
**train_budget_milli_node_hours** | **str** | Creating model budget. | [optional] 
**training_objective_points** | [**List[XPSTrainingObjectivePoint]**](XPSTrainingObjectivePoint.md) | This field records the training objective value with respect to time, giving insight into how the model architecture search is performing as training time elapses. | [optional] 
**training_start_time** | **str** | Timestamp when training process starts. | [optional] 

## Example

```python
from openapi_client.models.xps_tables_training_operation_metadata import XPSTablesTrainingOperationMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of XPSTablesTrainingOperationMetadata from a JSON string
xps_tables_training_operation_metadata_instance = XPSTablesTrainingOperationMetadata.from_json(json)
# print the JSON string representation of the object
print(XPSTablesTrainingOperationMetadata.to_json())

# convert the object into a dict
xps_tables_training_operation_metadata_dict = xps_tables_training_operation_metadata_instance.to_dict()
# create an instance of XPSTablesTrainingOperationMetadata from a dict
xps_tables_training_operation_metadata_from_dict = XPSTablesTrainingOperationMetadata.from_dict(xps_tables_training_operation_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


