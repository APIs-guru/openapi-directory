# LineAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identified_fields** | [**List[LineAttributesIdentifiedFieldsInner]**](LineAttributesIdentifiedFieldsInner.md) |  | [optional] 
**raw_text** | **str** | Linha completa (em texto) | [optional] 

## Example

```python
from openapi_client.models.line_attributes import LineAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of LineAttributes from a JSON string
line_attributes_instance = LineAttributes.from_json(json)
# print the JSON string representation of the object
print(LineAttributes.to_json())

# convert the object into a dict
line_attributes_dict = line_attributes_instance.to_dict()
# create an instance of LineAttributes from a dict
line_attributes_from_dict = LineAttributes.from_dict(line_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


