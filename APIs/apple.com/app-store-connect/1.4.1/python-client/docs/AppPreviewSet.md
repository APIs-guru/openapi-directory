# AppPreviewSet


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**AppPreviewSetAttributes**](AppPreviewSetAttributes.md) |  | [optional] 
**id** | **str** |  | 
**links** | [**ResourceLinks**](ResourceLinks.md) |  | 
**relationships** | [**AppPreviewSetRelationships**](AppPreviewSetRelationships.md) |  | [optional] 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.app_preview_set import AppPreviewSet

# TODO update the JSON string below
json = "{}"
# create an instance of AppPreviewSet from a JSON string
app_preview_set_instance = AppPreviewSet.from_json(json)
# print the JSON string representation of the object
print(AppPreviewSet.to_json())

# convert the object into a dict
app_preview_set_dict = app_preview_set_instance.to_dict()
# create an instance of AppPreviewSet from a dict
app_preview_set_from_dict = AppPreviewSet.from_dict(app_preview_set_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


