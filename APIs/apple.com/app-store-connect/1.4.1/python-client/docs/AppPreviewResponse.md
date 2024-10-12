# AppPreviewResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**AppPreview**](AppPreview.md) |  | 
**links** | [**DocumentLinks**](DocumentLinks.md) |  | 

## Example

```python
from openapi_client.models.app_preview_response import AppPreviewResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AppPreviewResponse from a JSON string
app_preview_response_instance = AppPreviewResponse.from_json(json)
# print the JSON string representation of the object
print(AppPreviewResponse.to_json())

# convert the object into a dict
app_preview_response_dict = app_preview_response_instance.to_dict()
# create an instance of AppPreviewResponse from a dict
app_preview_response_from_dict = AppPreviewResponse.from_dict(app_preview_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


