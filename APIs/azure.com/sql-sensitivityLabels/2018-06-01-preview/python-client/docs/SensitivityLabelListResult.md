# SensitivityLabelListResult

A list of sensitivity labels.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to retrieve next page of results. | [optional] [readonly] 
**value** | [**List[SensitivityLabel]**](SensitivityLabel.md) | Array of results. | [optional] [readonly] 

## Example

```python
from openapi_client.models.sensitivity_label_list_result import SensitivityLabelListResult

# TODO update the JSON string below
json = "{}"
# create an instance of SensitivityLabelListResult from a JSON string
sensitivity_label_list_result_instance = SensitivityLabelListResult.from_json(json)
# print the JSON string representation of the object
print(SensitivityLabelListResult.to_json())

# convert the object into a dict
sensitivity_label_list_result_dict = sensitivity_label_list_result_instance.to_dict()
# create an instance of SensitivityLabelListResult from a dict
sensitivity_label_list_result_from_dict = SensitivityLabelListResult.from_dict(sensitivity_label_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


