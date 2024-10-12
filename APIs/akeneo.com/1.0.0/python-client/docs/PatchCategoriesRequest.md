# PatchCategoriesRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Category code | 
**labels** | [**CategoriesAllOfEmbeddedItemsInnerAllOfLabels**](CategoriesAllOfEmbeddedItemsInnerAllOfLabels.md) |  | [optional] 
**parent** | **str** | Category code of the parent&#39;s category | [optional] [default to 'null']
**position** | **int** | Position of the category in its level, start from 1 (only available since the 7.0 version and when query parameter \&quot;with_position\&quot; is set to \&quot;true\&quot;) | [optional] 
**updated** | **str** | Date of the last update | [optional] 
**values** | [**CategoriesAllOfEmbeddedItemsInnerAllOfValues**](CategoriesAllOfEmbeddedItemsInnerAllOfValues.md) |  | [optional] 

## Example

```python
from openapi_client.models.patch_categories_request import PatchCategoriesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PatchCategoriesRequest from a JSON string
patch_categories_request_instance = PatchCategoriesRequest.from_json(json)
# print the JSON string representation of the object
print(PatchCategoriesRequest.to_json())

# convert the object into a dict
patch_categories_request_dict = patch_categories_request_instance.to_dict()
# create an instance of PatchCategoriesRequest from a dict
patch_categories_request_from_dict = PatchCategoriesRequest.from_dict(patch_categories_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


