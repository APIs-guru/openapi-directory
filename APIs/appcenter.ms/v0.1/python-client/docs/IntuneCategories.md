# IntuneCategories


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**odata_context** | **str** | context | [optional] 
**value** | [**List[IntuneCategoriesValueInner]**](IntuneCategoriesValueInner.md) | categories for intune app | [optional] 

## Example

```python
from openapi_client.models.intune_categories import IntuneCategories

# TODO update the JSON string below
json = "{}"
# create an instance of IntuneCategories from a JSON string
intune_categories_instance = IntuneCategories.from_json(json)
# print the JSON string representation of the object
print(IntuneCategories.to_json())

# convert the object into a dict
intune_categories_dict = intune_categories_instance.to_dict()
# create an instance of IntuneCategories from a dict
intune_categories_from_dict = IntuneCategories.from_dict(intune_categories_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


