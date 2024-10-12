# IntuneCategoriesValueInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | the display name for the category | [optional] 
**id** | **str** | the id of the category | [optional] 
**last_modified_date_time** | **str** | modified date for category | [optional] 

## Example

```python
from openapi_client.models.intune_categories_value_inner import IntuneCategoriesValueInner

# TODO update the JSON string below
json = "{}"
# create an instance of IntuneCategoriesValueInner from a JSON string
intune_categories_value_inner_instance = IntuneCategoriesValueInner.from_json(json)
# print the JSON string representation of the object
print(IntuneCategoriesValueInner.to_json())

# convert the object into a dict
intune_categories_value_inner_dict = intune_categories_value_inner_instance.to_dict()
# create an instance of IntuneCategoriesValueInner from a dict
intune_categories_value_inner_from_dict = IntuneCategoriesValueInner.from_dict(intune_categories_value_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


