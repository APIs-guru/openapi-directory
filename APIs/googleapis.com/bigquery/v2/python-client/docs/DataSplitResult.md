# DataSplitResult

Data split result. This contains references to the training and evaluation data tables that were used to train the model.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**evaluation_table** | [**TableReference**](TableReference.md) |  | [optional] 
**test_table** | [**TableReference**](TableReference.md) |  | [optional] 
**training_table** | [**TableReference**](TableReference.md) |  | [optional] 

## Example

```python
from openapi_client.models.data_split_result import DataSplitResult

# TODO update the JSON string below
json = "{}"
# create an instance of DataSplitResult from a JSON string
data_split_result_instance = DataSplitResult.from_json(json)
# print the JSON string representation of the object
print(DataSplitResult.to_json())

# convert the object into a dict
data_split_result_dict = data_split_result_instance.to_dict()
# create an instance of DataSplitResult from a dict
data_split_result_from_dict = DataSplitResult.from_dict(data_split_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


