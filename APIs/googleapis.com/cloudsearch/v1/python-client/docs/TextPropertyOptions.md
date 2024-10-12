# TextPropertyOptions

The options for text properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operator_options** | [**TextOperatorOptions**](TextOperatorOptions.md) |  | [optional] 
**retrieval_importance** | [**RetrievalImportance**](RetrievalImportance.md) |  | [optional] 

## Example

```python
from openapi_client.models.text_property_options import TextPropertyOptions

# TODO update the JSON string below
json = "{}"
# create an instance of TextPropertyOptions from a JSON string
text_property_options_instance = TextPropertyOptions.from_json(json)
# print the JSON string representation of the object
print(TextPropertyOptions.to_json())

# convert the object into a dict
text_property_options_dict = text_property_options_instance.to_dict()
# create an instance of TextPropertyOptions from a dict
text_property_options_from_dict = TextPropertyOptions.from_dict(text_property_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


