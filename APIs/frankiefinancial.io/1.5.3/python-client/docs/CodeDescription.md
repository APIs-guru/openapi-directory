# CodeDescription

A common pairing of a short code and a long description.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** |  | [optional] 
**description** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.code_description import CodeDescription

# TODO update the JSON string below
json = "{}"
# create an instance of CodeDescription from a JSON string
code_description_instance = CodeDescription.from_json(json)
# print the JSON string representation of the object
print(CodeDescription.to_json())

# convert the object into a dict
code_description_dict = code_description_instance.to_dict()
# create an instance of CodeDescription from a dict
code_description_from_dict = CodeDescription.from_dict(code_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


