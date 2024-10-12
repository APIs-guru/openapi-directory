# LogLevelSummaryModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** |  | [optional] 
**level** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.log_level_summary_model import LogLevelSummaryModel

# TODO update the JSON string below
json = "{}"
# create an instance of LogLevelSummaryModel from a JSON string
log_level_summary_model_instance = LogLevelSummaryModel.from_json(json)
# print the JSON string representation of the object
print(LogLevelSummaryModel.to_json())

# convert the object into a dict
log_level_summary_model_dict = log_level_summary_model_instance.to_dict()
# create an instance of LogLevelSummaryModel from a dict
log_level_summary_model_from_dict = LogLevelSummaryModel.from_dict(log_level_summary_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


