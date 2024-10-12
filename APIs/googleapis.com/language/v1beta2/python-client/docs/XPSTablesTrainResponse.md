# XPSTablesTrainResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**model_structure** | [**XPSTablesModelStructure**](XPSTablesModelStructure.md) |  | [optional] 
**prediction_sample_rows** | [**List[XPSRow]**](XPSRow.md) | Sample rows from the dataset this model was trained. | [optional] 
**tables_model_column_info** | [**List[XPSTablesModelColumnInfo]**](XPSTablesModelColumnInfo.md) | Output only. Auxiliary information for each of the input_feature_column_specs, with respect to this particular model. | [optional] 
**train_cost_milli_node_hours** | **str** | The actual training cost of the model, expressed in milli node hours, i.e. 1,000 value in this field means 1 node hour. Guaranteed to not exceed the train budget. | [optional] 

## Example

```python
from openapi_client.models.xps_tables_train_response import XPSTablesTrainResponse

# TODO update the JSON string below
json = "{}"
# create an instance of XPSTablesTrainResponse from a JSON string
xps_tables_train_response_instance = XPSTablesTrainResponse.from_json(json)
# print the JSON string representation of the object
print(XPSTablesTrainResponse.to_json())

# convert the object into a dict
xps_tables_train_response_dict = xps_tables_train_response_instance.to_dict()
# create an instance of XPSTablesTrainResponse from a dict
xps_tables_train_response_from_dict = XPSTablesTrainResponse.from_dict(xps_tables_train_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


