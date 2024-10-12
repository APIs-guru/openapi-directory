# AppAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**available_in_new_territories** | **bool** |  | [optional] 
**bundle_id** | **str** |  | [optional] 
**content_rights_declaration** | **str** |  | [optional] 
**is_or_ever_was_made_for_kids** | **bool** |  | [optional] 
**name** | **str** |  | [optional] 
**primary_locale** | **str** |  | [optional] 
**sku** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.app_attributes import AppAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of AppAttributes from a JSON string
app_attributes_instance = AppAttributes.from_json(json)
# print the JSON string representation of the object
print(AppAttributes.to_json())

# convert the object into a dict
app_attributes_dict = app_attributes_instance.to_dict()
# create an instance of AppAttributes from a dict
app_attributes_from_dict = AppAttributes.from_dict(app_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


