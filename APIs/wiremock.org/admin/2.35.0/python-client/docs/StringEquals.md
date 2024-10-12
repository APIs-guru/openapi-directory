# StringEquals


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**case_insensitive** | **bool** |  | [optional] 
**equal_to** | **bool** |  | 

## Example

```python
from openapi_client.models.string_equals import StringEquals

# TODO update the JSON string below
json = "{}"
# create an instance of StringEquals from a JSON string
string_equals_instance = StringEquals.from_json(json)
# print the JSON string representation of the object
print(StringEquals.to_json())

# convert the object into a dict
string_equals_dict = string_equals_instance.to_dict()
# create an instance of StringEquals from a dict
string_equals_from_dict = StringEquals.from_dict(string_equals_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


