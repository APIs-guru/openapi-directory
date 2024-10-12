# LabelDescriptor

A description of a label.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | A human-readable description for the label. | [optional] 
**key** | **str** | The label key. | [optional] 
**value_type** | **str** | The type of data that can be assigned to the label. | [optional] 

## Example

```python
from openapi_client.models.label_descriptor import LabelDescriptor

# TODO update the JSON string below
json = "{}"
# create an instance of LabelDescriptor from a JSON string
label_descriptor_instance = LabelDescriptor.from_json(json)
# print the JSON string representation of the object
print(LabelDescriptor.to_json())

# convert the object into a dict
label_descriptor_dict = label_descriptor_instance.to_dict()
# create an instance of LabelDescriptor from a dict
label_descriptor_from_dict = LabelDescriptor.from_dict(label_descriptor_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


