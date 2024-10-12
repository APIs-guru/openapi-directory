# SubCategory


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**strength_score** | **float** | Strength of the category matches with the document content | 
**title** | **str** | The category title, which is its label in the text | 
**type** | **str** | Type of category; can be either \&quot;node\&quot; (root level) or \&quot;leaf\&quot; (nested) value | 

## Example

```python
from openapi_client.models.sub_category import SubCategory

# TODO update the JSON string below
json = "{}"
# create an instance of SubCategory from a JSON string
sub_category_instance = SubCategory.from_json(json)
# print the JSON string representation of the object
print(SubCategory.to_json())

# convert the object into a dict
sub_category_dict = sub_category_instance.to_dict()
# create an instance of SubCategory from a dict
sub_category_from_dict = SubCategory.from_dict(sub_category_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


