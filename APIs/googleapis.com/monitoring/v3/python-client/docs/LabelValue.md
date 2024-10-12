# LabelValue

A label value.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bool_value** | **bool** | A bool label value. | [optional] 
**int64_value** | **str** | An int64 label value. | [optional] 
**string_value** | **str** | A string label value. | [optional] 

## Example

```python
from openapi_client.models.label_value import LabelValue

# TODO update the JSON string below
json = "{}"
# create an instance of LabelValue from a JSON string
label_value_instance = LabelValue.from_json(json)
# print the JSON string representation of the object
print(LabelValue.to_json())

# convert the object into a dict
label_value_dict = label_value_instance.to_dict()
# create an instance of LabelValue from a dict
label_value_from_dict = LabelValue.from_dict(label_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


