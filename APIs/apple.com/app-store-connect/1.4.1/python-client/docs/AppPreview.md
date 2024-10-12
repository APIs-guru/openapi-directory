# AppPreview


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**AppPreviewAttributes**](AppPreviewAttributes.md) |  | [optional] 
**id** | **str** |  | 
**links** | [**ResourceLinks**](ResourceLinks.md) |  | 
**relationships** | [**AppPreviewRelationships**](AppPreviewRelationships.md) |  | [optional] 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.app_preview import AppPreview

# TODO update the JSON string below
json = "{}"
# create an instance of AppPreview from a JSON string
app_preview_instance = AppPreview.from_json(json)
# print the JSON string representation of the object
print(AppPreview.to_json())

# convert the object into a dict
app_preview_dict = app_preview_instance.to_dict()
# create an instance of AppPreview from a dict
app_preview_from_dict = AppPreview.from_dict(app_preview_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


