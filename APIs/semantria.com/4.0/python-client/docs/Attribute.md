# Attribute


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** | The count of occurrences of the attribute across the documents | 
**label** | **str** | The text of the attribute | 
**mentions** | [**List[Mention]**](Mention.md) | Returns genuine forms of attribute mentioned across the documents | 

## Example

```python
from openapi_client.models.attribute import Attribute

# TODO update the JSON string below
json = "{}"
# create an instance of Attribute from a JSON string
attribute_instance = Attribute.from_json(json)
# print the JSON string representation of the object
print(Attribute.to_json())

# convert the object into a dict
attribute_dict = attribute_instance.to_dict()
# create an instance of Attribute from a dict
attribute_from_dict = Attribute.from_dict(attribute_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


