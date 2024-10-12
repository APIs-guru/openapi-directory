# FieldValue

Contains a value of a Field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_date** | [**ModelDate**](ModelDate.md) |  | [optional] 
**integer** | [**Integer**](Integer.md) |  | [optional] 
**selection** | [**Selection**](Selection.md) |  | [optional] 
**selection_list** | [**SelectionList**](SelectionList.md) |  | [optional] 
**text** | [**Text**](Text.md) |  | [optional] 
**text_list** | [**TextList**](TextList.md) |  | [optional] 
**user** | [**SingleUser**](SingleUser.md) |  | [optional] 
**user_list** | [**UserList**](UserList.md) |  | [optional] 

## Example

```python
from openapi_client.models.field_value import FieldValue

# TODO update the JSON string below
json = "{}"
# create an instance of FieldValue from a JSON string
field_value_instance = FieldValue.from_json(json)
# print the JSON string representation of the object
print(FieldValue.to_json())

# convert the object into a dict
field_value_dict = field_value_instance.to_dict()
# create an instance of FieldValue from a dict
field_value_from_dict = FieldValue.from_dict(field_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


