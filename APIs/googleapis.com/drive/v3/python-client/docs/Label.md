# Label

Representation of label and label fields.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fields** | [**Dict[str, LabelField]**](LabelField.md) | A map of the fields on the label, keyed by the field&#39;s ID. | [optional] 
**id** | **str** | The ID of the label. | [optional] 
**kind** | **str** | This is always drive#label | [optional] 
**revision_id** | **str** | The revision ID of the label. | [optional] 

## Example

```python
from openapi_client.models.label import Label

# TODO update the JSON string below
json = "{}"
# create an instance of Label from a JSON string
label_instance = Label.from_json(json)
# print the JSON string representation of the object
print(Label.to_json())

# convert the object into a dict
label_dict = label_instance.to_dict()
# create an instance of Label from a dict
label_from_dict = Label.from_dict(label_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


