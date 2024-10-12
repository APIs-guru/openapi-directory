# AttributeGroupList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**PAMAssetCategoriesAllOfEmbeddedItemsInnerAllOfLinks**](PAMAssetCategoriesAllOfEmbeddedItemsInnerAllOfLinks.md) |  | [optional] 
**attributes** | **List[str]** | Attribute codes that compose the attribute group | [optional] 
**code** | **str** | Attribute group code | 
**labels** | [**AttributeGroupsAllOfEmbeddedItemsInnerAllOfLabels**](AttributeGroupsAllOfEmbeddedItemsInnerAllOfLabels.md) |  | [optional] 
**sort_order** | **int** | Attribute group order among other attribute groups | [optional] 

## Example

```python
from openapi_client.models.attribute_group_list import AttributeGroupList

# TODO update the JSON string below
json = "{}"
# create an instance of AttributeGroupList from a JSON string
attribute_group_list_instance = AttributeGroupList.from_json(json)
# print the JSON string representation of the object
print(AttributeGroupList.to_json())

# convert the object into a dict
attribute_group_list_dict = attribute_group_list_instance.to_dict()
# create an instance of AttributeGroupList from a dict
attribute_group_list_from_dict = AttributeGroupList.from_dict(attribute_group_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


