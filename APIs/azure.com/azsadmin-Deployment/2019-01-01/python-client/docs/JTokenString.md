# JTokenString

Error information

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **str** | Parameters as JToken string | [optional] 

## Example

```python
from openapi_client.models.j_token_string import JTokenString

# TODO update the JSON string below
json = "{}"
# create an instance of JTokenString from a JSON string
j_token_string_instance = JTokenString.from_json(json)
# print the JSON string representation of the object
print(JTokenString.to_json())

# convert the object into a dict
j_token_string_dict = j_token_string_instance.to_dict()
# create an instance of JTokenString from a dict
j_token_string_from_dict = JTokenString.from_dict(j_token_string_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


