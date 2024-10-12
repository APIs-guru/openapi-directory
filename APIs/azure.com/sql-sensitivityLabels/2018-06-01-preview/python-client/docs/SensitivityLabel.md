# SensitivityLabel

A sensitivity label.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**SensitivityLabelProperties**](SensitivityLabelProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

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


