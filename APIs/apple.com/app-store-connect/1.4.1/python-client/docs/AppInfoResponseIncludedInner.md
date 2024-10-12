# AppInfoResponseIncludedInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**AppCategoryAttributes**](AppCategoryAttributes.md) |  | [optional] 
**id** | **str** |  | 
**links** | [**ResourceLinks**](ResourceLinks.md) |  | 
**relationships** | [**AppCategoryRelationships**](AppCategoryRelationships.md) |  | [optional] 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.app_info_response_included_inner import AppInfoResponseIncludedInner

# TODO update the JSON string below
json = "{}"
# create an instance of AppInfoResponseIncludedInner from a JSON string
app_info_response_included_inner_instance = AppInfoResponseIncludedInner.from_json(json)
# print the JSON string representation of the object
print(AppInfoResponseIncludedInner.to_json())

# convert the object into a dict
app_info_response_included_inner_dict = app_info_response_included_inner_instance.to_dict()
# create an instance of AppInfoResponseIncludedInner from a dict
app_info_response_included_inner_from_dict = AppInfoResponseIncludedInner.from_dict(app_info_response_included_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


