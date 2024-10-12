# Category

A category describing what this business is (not what it does). For a list of valid category IDs, and the mappings to their human-readable names, see `categories.list`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Output only. The human-readable name of the category. This is set when reading the location. When modifying the location, &#x60;category_id&#x60; must be set. | [optional] [readonly] 
**more_hours_types** | [**List[MoreHoursType]**](MoreHoursType.md) | Output only. More hours types that are available for this business category. | [optional] [readonly] 
**name** | **str** | Required. A stable ID (provided by Google) for this category. The value must be specified when modifying the category (when creating or updating a location). | [optional] 
**service_types** | [**List[ServiceType]**](ServiceType.md) | Output only. A list of all the service types that are available for this business category. | [optional] [readonly] 

## Example

```python
from openapi_client.models.category import Category

# TODO update the JSON string below
json = "{}"
# create an instance of Category from a JSON string
category_instance = Category.from_json(json)
# print the JSON string representation of the object
print(Category.to_json())

# convert the object into a dict
category_dict = category_instance.to_dict()
# create an instance of Category from a dict
category_from_dict = Category.from_dict(category_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


