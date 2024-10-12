# InListFilter

The result needs to be in a list of string values.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**case_sensitive** | **bool** | If true, the string value is case sensitive. | [optional] 
**values** | **List[str]** | The list of string values. Must be non-empty. | [optional] 

## Example

```python
from openapi_client.models.in_list_filter import InListFilter

# TODO update the JSON string below
json = "{}"
# create an instance of InListFilter from a JSON string
in_list_filter_instance = InListFilter.from_json(json)
# print the JSON string representation of the object
print(InListFilter.to_json())

# convert the object into a dict
in_list_filter_dict = in_list_filter_instance.to_dict()
# create an instance of InListFilter from a dict
in_list_filter_from_dict = InListFilter.from_dict(in_list_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


