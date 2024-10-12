# StringList

A metric value representing a list of strings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**elements** | **List[str]** | Elements of the list. | [optional] 

## Example

```python
from openapi_client.models.string_list import StringList

# TODO update the JSON string below
json = "{}"
# create an instance of StringList from a JSON string
string_list_instance = StringList.from_json(json)
# print the JSON string representation of the object
print(StringList.to_json())

# convert the object into a dict
string_list_dict = string_list_instance.to_dict()
# create an instance of StringList from a dict
string_list_from_dict = StringList.from_dict(string_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


