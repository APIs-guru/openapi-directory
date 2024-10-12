# StringInAdvancedFilter

StringIn Filter

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**values** | **List[str]** | The set of filter values | [optional] 

## Example

```python
from openapi_client.models.string_in_advanced_filter import StringInAdvancedFilter

# TODO update the JSON string below
json = "{}"
# create an instance of StringInAdvancedFilter from a JSON string
string_in_advanced_filter_instance = StringInAdvancedFilter.from_json(json)
# print the JSON string representation of the object
print(StringInAdvancedFilter.to_json())

# convert the object into a dict
string_in_advanced_filter_dict = string_in_advanced_filter_instance.to_dict()
# create an instance of StringInAdvancedFilter from a dict
string_in_advanced_filter_from_dict = StringInAdvancedFilter.from_dict(string_in_advanced_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


