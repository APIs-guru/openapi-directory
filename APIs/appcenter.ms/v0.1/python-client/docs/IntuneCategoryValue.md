# IntuneCategoryValue


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | the display name for the category | [optional] 
**id** | **str** | the id of the category | [optional] 
**last_modified_date_time** | **str** | modified date for category | [optional] 

## Example

```python
from openapi_client.models.intune_category_value import IntuneCategoryValue

# TODO update the JSON string below
json = "{}"
# create an instance of IntuneCategoryValue from a JSON string
intune_category_value_instance = IntuneCategoryValue.from_json(json)
# print the JSON string representation of the object
print(IntuneCategoryValue.to_json())

# convert the object into a dict
intune_category_value_dict = intune_category_value_instance.to_dict()
# create an instance of IntuneCategoryValue from a dict
intune_category_value_from_dict = IntuneCategoryValue.from_dict(intune_category_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


