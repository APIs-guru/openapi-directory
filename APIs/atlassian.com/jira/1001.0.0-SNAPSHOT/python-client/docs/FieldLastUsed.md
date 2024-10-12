# FieldLastUsed

Information about the most recent use of a field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | Last used value type:   *  *TRACKED*: field is tracked and a last used date is available.  *  *NOT\\_TRACKED*: field is not tracked, last used date is not available.  *  *NO\\_INFORMATION*: field is tracked, but no last used date is available. | [optional] 
**value** | **datetime** | The date when the value of the field last changed. | [optional] 

## Example

```python
from openapi_client.models.field_last_used import FieldLastUsed

# TODO update the JSON string below
json = "{}"
# create an instance of FieldLastUsed from a JSON string
field_last_used_instance = FieldLastUsed.from_json(json)
# print the JSON string representation of the object
print(FieldLastUsed.to_json())

# convert the object into a dict
field_last_used_dict = field_last_used_instance.to_dict()
# create an instance of FieldLastUsed from a dict
field_last_used_from_dict = FieldLastUsed.from_dict(field_last_used_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


