# CategoryUpdateVersion


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique category identifier | 
**name** | **str** | Category name | 
**samples** | **List[str]** | Category samples | 
**weight** | **float** | Category weight | 

## Example

```python
from openapi_client.models.category_update_version import CategoryUpdateVersion

# TODO update the JSON string below
json = "{}"
# create an instance of CategoryUpdateVersion from a JSON string
category_update_version_instance = CategoryUpdateVersion.from_json(json)
# print the JSON string representation of the object
print(CategoryUpdateVersion.to_json())

# convert the object into a dict
category_update_version_dict = category_update_version_instance.to_dict()
# create an instance of CategoryUpdateVersion from a dict
category_update_version_from_dict = CategoryUpdateVersion.from_dict(category_update_version_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


