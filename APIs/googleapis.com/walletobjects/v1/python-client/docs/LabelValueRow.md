# LabelValueRow


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**columns** | [**List[LabelValue]**](LabelValue.md) | A list of labels and values. These will be displayed in a singular column, one after the other, not in multiple columns, despite the field name. | [optional] 

## Example

```python
from openapi_client.models.label_value_row import LabelValueRow

# TODO update the JSON string below
json = "{}"
# create an instance of LabelValueRow from a JSON string
label_value_row_instance = LabelValueRow.from_json(json)
# print the JSON string representation of the object
print(LabelValueRow.to_json())

# convert the object into a dict
label_value_row_dict = label_value_row_instance.to_dict()
# create an instance of LabelValueRow from a dict
label_value_row_from_dict = LabelValueRow.from_dict(label_value_row_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


