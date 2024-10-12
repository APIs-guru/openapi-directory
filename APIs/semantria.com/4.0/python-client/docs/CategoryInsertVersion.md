# CategoryInsertVersion


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Category name | 
**samples** | **List[str]** | Category samples | 
**weight** | **float** | Category weight | 

## Example

```python
from openapi_client.models.category_insert_version import CategoryInsertVersion

# TODO update the JSON string below
json = "{}"
# create an instance of CategoryInsertVersion from a JSON string
category_insert_version_instance = CategoryInsertVersion.from_json(json)
# print the JSON string representation of the object
print(CategoryInsertVersion.to_json())

# convert the object into a dict
category_insert_version_dict = category_insert_version_instance.to_dict()
# create an instance of CategoryInsertVersion from a dict
category_insert_version_from_dict = CategoryInsertVersion.from_dict(category_insert_version_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


