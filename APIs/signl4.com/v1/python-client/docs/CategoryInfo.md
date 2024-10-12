# CategoryInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**augmentations** | [**List[CategoryAugmentation]**](CategoryAugmentation.md) |  | [optional] 
**color** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**image_name** | **str** |  | [optional] 
**is_default** | **bool** |  | [optional] [readonly] 
**keyword_matching** | [**KeywordMatchingType**](KeywordMatchingType.md) |  | [optional] 
**keywords** | **List[str]** |  | [optional] 
**last_match** | **datetime** |  | [optional] 
**name** | **str** |  | [optional] 
**options** | [**CategoryInfoOptions**](CategoryInfoOptions.md) |  | [optional] 
**order** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.category_info import CategoryInfo

# TODO update the JSON string below
json = "{}"
# create an instance of CategoryInfo from a JSON string
category_info_instance = CategoryInfo.from_json(json)
# print the JSON string representation of the object
print(CategoryInfo.to_json())

# convert the object into a dict
category_info_dict = category_info_instance.to_dict()
# create an instance of CategoryInfo from a dict
category_info_from_dict = CategoryInfo.from_dict(category_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


