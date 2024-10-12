# ListMatcher

Specifies the way to match a list value.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**one_of** | [**ValueMatcher**](ValueMatcher.md) |  | [optional] 

## Example

```python
from openapi_client.models.list_matcher import ListMatcher

# TODO update the JSON string below
json = "{}"
# create an instance of ListMatcher from a JSON string
list_matcher_instance = ListMatcher.from_json(json)
# print the JSON string representation of the object
print(ListMatcher.to_json())

# convert the object into a dict
list_matcher_dict = list_matcher_instance.to_dict()
# create an instance of ListMatcher from a dict
list_matcher_from_dict = ListMatcher.from_dict(list_matcher_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


