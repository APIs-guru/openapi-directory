# AttributeOption


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attribute** | **str** | Code of attribute related to the attribute option | [optional] 
**code** | **str** | Code of option | 
**labels** | [**AttributeOptionsAllOfEmbeddedItemsInnerAllOfLabels**](AttributeOptionsAllOfEmbeddedItemsInnerAllOfLabels.md) |  | [optional] 
**sort_order** | **int** | Order of attribute option | [optional] 

## Example

```python
from openapi_client.models.attribute_option import AttributeOption

# TODO update the JSON string below
json = "{}"
# create an instance of AttributeOption from a JSON string
attribute_option_instance = AttributeOption.from_json(json)
# print the JSON string representation of the object
print(AttributeOption.to_json())

# convert the object into a dict
attribute_option_dict = attribute_option_instance.to_dict()
# create an instance of AttributeOption from a dict
attribute_option_from_dict = AttributeOption.from_dict(attribute_option_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


