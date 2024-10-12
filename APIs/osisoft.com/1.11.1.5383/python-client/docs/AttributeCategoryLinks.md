# AttributeCategoryLinks


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**database** | **str** |  | [optional] 
**security** | **str** |  | [optional] 
**security_entries** | **str** |  | [optional] 
**var_self** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.attribute_category_links import AttributeCategoryLinks

# TODO update the JSON string below
json = "{}"
# create an instance of AttributeCategoryLinks from a JSON string
attribute_category_links_instance = AttributeCategoryLinks.from_json(json)
# print the JSON string representation of the object
print(AttributeCategoryLinks.to_json())

# convert the object into a dict
attribute_category_links_dict = attribute_category_links_instance.to_dict()
# create an instance of AttributeCategoryLinks from a dict
attribute_category_links_from_dict = AttributeCategoryLinks.from_dict(attribute_category_links_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


