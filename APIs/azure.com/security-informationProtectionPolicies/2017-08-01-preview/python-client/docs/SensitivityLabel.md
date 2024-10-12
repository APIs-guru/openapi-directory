# SensitivityLabel

The sensitivity label.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | The name of the sensitivity label. | [optional] 
**enabled** | **bool** | Indicates whether the label is enabled or not. | [optional] 
**order** | **float** | The order of the sensitivity label. | [optional] 

## Example

```python
from openapi_client.models.sensitivity_label import SensitivityLabel

# TODO update the JSON string below
json = "{}"
# create an instance of SensitivityLabel from a JSON string
sensitivity_label_instance = SensitivityLabel.from_json(json)
# print the JSON string representation of the object
print(SensitivityLabel.to_json())

# convert the object into a dict
sensitivity_label_dict = sensitivity_label_instance.to_dict()
# create an instance of SensitivityLabel from a dict
sensitivity_label_from_dict = SensitivityLabel.from_dict(sensitivity_label_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


