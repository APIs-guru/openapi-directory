# PageCategory


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] 
**name** | **str** |  | [optional] 
**position** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.page_category import PageCategory

# TODO update the JSON string below
json = "{}"
# create an instance of PageCategory from a JSON string
page_category_instance = PageCategory.from_json(json)
# print the JSON string representation of the object
print(PageCategory.to_json())

# convert the object into a dict
page_category_dict = page_category_instance.to_dict()
# create an instance of PageCategory from a dict
page_category_from_dict = PageCategory.from_dict(page_category_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


