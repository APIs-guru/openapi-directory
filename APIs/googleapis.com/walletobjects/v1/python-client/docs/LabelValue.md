# LabelValue

A pair of text strings to be displayed in the details view. Note we no longer display LabelValue/LabelValueRow as a table, instead a list of items.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**label** | **str** | The label for a specific row and column. Recommended maximum is 15 characters for a two-column layout and 30 characters for a one-column layout. | [optional] 
**localized_label** | [**LocalizedString**](LocalizedString.md) |  | [optional] 
**localized_value** | [**LocalizedString**](LocalizedString.md) |  | [optional] 
**value** | **str** | The value for a specific row and column. Recommended maximum is 15 characters for a two-column layout and 30 characters for a one-column layout. | [optional] 

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


