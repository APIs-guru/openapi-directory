# StringDictionary

String dictionary resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **Dict[str, str]** | Settings. | [optional] 
**id** | **str** | Resource Id. | [optional] [readonly] 
**kind** | **str** | Kind of resource. | [optional] 
**name** | **str** | Resource Name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.string_dictionary import StringDictionary

# TODO update the JSON string below
json = "{}"
# create an instance of StringDictionary from a JSON string
string_dictionary_instance = StringDictionary.from_json(json)
# print the JSON string representation of the object
print(StringDictionary.to_json())

# convert the object into a dict
string_dictionary_dict = string_dictionary_instance.to_dict()
# create an instance of StringDictionary from a dict
string_dictionary_from_dict = StringDictionary.from_dict(string_dictionary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


