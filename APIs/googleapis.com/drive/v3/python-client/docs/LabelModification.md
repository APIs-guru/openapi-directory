# LabelModification

A modification to a label on a file. A LabelModification can be used to apply a label to a file, update an existing label on a file, or remove a label from a file.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**field_modifications** | [**List[LabelFieldModification]**](LabelFieldModification.md) | The list of modifications to this label&#39;s fields. | [optional] 
**kind** | **str** | This is always drive#labelModification. | [optional] 
**label_id** | **str** | The ID of the label to modify. | [optional] 
**remove_label** | **bool** | If true, the label will be removed from the file. | [optional] 

## Example

```python
from openapi_client.models.label_modification import LabelModification

# TODO update the JSON string below
json = "{}"
# create an instance of LabelModification from a JSON string
label_modification_instance = LabelModification.from_json(json)
# print the JSON string representation of the object
print(LabelModification.to_json())

# convert the object into a dict
label_modification_dict = label_modification_instance.to_dict()
# create an instance of LabelModification from a dict
label_modification_from_dict = LabelModification.from_dict(label_modification_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


