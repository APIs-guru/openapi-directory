# ContextAttribute

A named attribute associated with an item which can be used for influencing the ranking of the item based on the context in the request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the attribute. It should not be empty. The maximum length is 32 characters. The name must start with a letter and can only contain letters (A-Z, a-z) or numbers (0-9). The name will be normalized (lower-cased) before being matched. | [optional] 
**values** | **List[str]** | Text values of the attribute. The maximum number of elements is 10. The maximum length of an element in the array is 32 characters. The value will be normalized (lower-cased) before being matched. | [optional] 

## Example

```python
from openapi_client.models.context_attribute import ContextAttribute

# TODO update the JSON string below
json = "{}"
# create an instance of ContextAttribute from a JSON string
context_attribute_instance = ContextAttribute.from_json(json)
# print the JSON string representation of the object
print(ContextAttribute.to_json())

# convert the object into a dict
context_attribute_dict = context_attribute_instance.to_dict()
# create an instance of ContextAttribute from a dict
context_attribute_from_dict = ContextAttribute.from_dict(context_attribute_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


