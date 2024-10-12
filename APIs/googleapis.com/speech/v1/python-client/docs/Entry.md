# Entry

A single replacement configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**case_sensitive** | **bool** | Whether the search is case sensitive. | [optional] 
**replace** | **str** | What to replace with. Max length is 100 characters. | [optional] 
**search** | **str** | What to replace. Max length is 100 characters. | [optional] 

## Example

```python
from openapi_client.models.entry import Entry

# TODO update the JSON string below
json = "{}"
# create an instance of Entry from a JSON string
entry_instance = Entry.from_json(json)
# print the JSON string representation of the object
print(Entry.to_json())

# convert the object into a dict
entry_dict = entry_instance.to_dict()
# create an instance of Entry from a dict
entry_from_dict = Entry.from_dict(entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


