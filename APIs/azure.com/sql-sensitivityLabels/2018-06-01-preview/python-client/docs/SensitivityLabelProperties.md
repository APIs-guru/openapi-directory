# SensitivityLabelProperties

Properties of a sensitivity label.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**information_type** | **str** | The information type. | [optional] 
**label_name** | **str** | The label name. | [optional] 

## Example

```python
from openapi_client.models.sensitivity_label_properties import SensitivityLabelProperties

# TODO update the JSON string below
json = "{}"
# create an instance of SensitivityLabelProperties from a JSON string
sensitivity_label_properties_instance = SensitivityLabelProperties.from_json(json)
# print the JSON string representation of the object
print(SensitivityLabelProperties.to_json())

# convert the object into a dict
sensitivity_label_properties_dict = sensitivity_label_properties_instance.to_dict()
# create an instance of SensitivityLabelProperties from a dict
sensitivity_label_properties_from_dict = SensitivityLabelProperties.from_dict(sensitivity_label_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


