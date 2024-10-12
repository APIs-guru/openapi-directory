# AttributeGroups


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**PAMAssetCategoriesAllOfLinks**](PAMAssetCategoriesAllOfLinks.md) |  | [optional] 
**current_page** | **int** | Current page number | [optional] 
**embedded** | [**AttributeGroupsAllOfEmbedded**](AttributeGroupsAllOfEmbedded.md) |  | [optional] 

## Example

```python
from openapi_client.models.attribute_groups import AttributeGroups

# TODO update the JSON string below
json = "{}"
# create an instance of AttributeGroups from a JSON string
attribute_groups_instance = AttributeGroups.from_json(json)
# print the JSON string representation of the object
print(AttributeGroups.to_json())

# convert the object into a dict
attribute_groups_dict = attribute_groups_instance.to_dict()
# create an instance of AttributeGroups from a dict
attribute_groups_from_dict = AttributeGroups.from_dict(attribute_groups_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


