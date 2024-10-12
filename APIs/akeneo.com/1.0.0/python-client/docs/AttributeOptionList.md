# AttributeOptionList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**PAMAssetCategoriesAllOfEmbeddedItemsInnerAllOfLinks**](PAMAssetCategoriesAllOfEmbeddedItemsInnerAllOfLinks.md) |  | [optional] 
**attribute** | **str** | Code of attribute related to the attribute option | [optional] 
**code** | **str** | Code of option | 
**labels** | [**AttributeOptionsAllOfEmbeddedItemsInnerAllOfLabels**](AttributeOptionsAllOfEmbeddedItemsInnerAllOfLabels.md) |  | [optional] 
**sort_order** | **int** | Order of attribute option | [optional] 

## Example

```python
from openapi_client.models.attribute_option_list import AttributeOptionList

# TODO update the JSON string below
json = "{}"
# create an instance of AttributeOptionList from a JSON string
attribute_option_list_instance = AttributeOptionList.from_json(json)
# print the JSON string representation of the object
print(AttributeOptionList.to_json())

# convert the object into a dict
attribute_option_list_dict = attribute_option_list_instance.to_dict()
# create an instance of AttributeOptionList from a dict
attribute_option_list_from_dict = AttributeOptionList.from_dict(attribute_option_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


