# AutoCategory


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**categories** | [**List[SubCategory]**](SubCategory.md) | List of sub-categories of the current category if applicable | 
**sentiment_polarity** | **str** | Verbal representation of sentiment score. Can be \&quot;negative\&quot;, \&quot;positive\&quot; or \&quot;neutral\&quot; | 
**sentiment_score** | **float** | The sentiment score associated with this category | 
**strength_score** | **float** | Strength of the category matches with the document content | 
**title** | **str** | The category title, which is its label in the text | 
**type** | **str** | Type of category; can be either \&quot;node\&quot; (root level) or \&quot;leaf\&quot; (nested) value | 

## Example

```python
from openapi_client.models.auto_category import AutoCategory

# TODO update the JSON string below
json = "{}"
# create an instance of AutoCategory from a JSON string
auto_category_instance = AutoCategory.from_json(json)
# print the JSON string representation of the object
print(AutoCategory.to_json())

# convert the object into a dict
auto_category_dict = auto_category_instance.to_dict()
# create an instance of AutoCategory from a dict
auto_category_from_dict = AutoCategory.from_dict(auto_category_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


