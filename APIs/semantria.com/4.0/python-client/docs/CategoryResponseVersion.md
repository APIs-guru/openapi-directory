# CategoryResponseVersion


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique category identifier | 
**modified** | **str** | The timestamp of the latest update of the record. Creation date of update didn&#39;t occur | 
**name** | **str** | Category name | 
**samples** | **List[str]** | Category samples | 
**weight** | **float** | Category weight | 

## Example

```python
from openapi_client.models.category_response_version import CategoryResponseVersion

# TODO update the JSON string below
json = "{}"
# create an instance of CategoryResponseVersion from a JSON string
category_response_version_instance = CategoryResponseVersion.from_json(json)
# print the JSON string representation of the object
print(CategoryResponseVersion.to_json())

# convert the object into a dict
category_response_version_dict = category_response_version_instance.to_dict()
# create an instance of CategoryResponseVersion from a dict
category_response_version_from_dict = CategoryResponseVersion.from_dict(category_response_version_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


