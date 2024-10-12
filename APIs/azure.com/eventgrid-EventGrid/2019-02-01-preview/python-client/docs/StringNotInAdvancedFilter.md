# StringNotInAdvancedFilter

StringNotIn Advanced Filter.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**values** | **List[str]** | The set of filter values. | [optional] 

## Example

```python
from openapi_client.models.string_not_in_advanced_filter import StringNotInAdvancedFilter

# TODO update the JSON string below
json = "{}"
# create an instance of StringNotInAdvancedFilter from a JSON string
string_not_in_advanced_filter_instance = StringNotInAdvancedFilter.from_json(json)
# print the JSON string representation of the object
print(StringNotInAdvancedFilter.to_json())

# convert the object into a dict
string_not_in_advanced_filter_dict = string_not_in_advanced_filter_instance.to_dict()
# create an instance of StringNotInAdvancedFilter from a dict
string_not_in_advanced_filter_from_dict = StringNotInAdvancedFilter.from_dict(string_not_in_advanced_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


