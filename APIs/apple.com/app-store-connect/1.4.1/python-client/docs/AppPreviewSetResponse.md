# AppPreviewSetResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**AppPreviewSet**](AppPreviewSet.md) |  | 
**included** | [**List[AppPreview]**](AppPreview.md) |  | [optional] 
**links** | [**DocumentLinks**](DocumentLinks.md) |  | 

## Example

```python
from openapi_client.models.app_preview_set_response import AppPreviewSetResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AppPreviewSetResponse from a JSON string
app_preview_set_response_instance = AppPreviewSetResponse.from_json(json)
# print the JSON string representation of the object
print(AppPreviewSetResponse.to_json())

# convert the object into a dict
app_preview_set_response_dict = app_preview_set_response_instance.to_dict()
# create an instance of AppPreviewSetResponse from a dict
app_preview_set_response_from_dict = AppPreviewSetResponse.from_dict(app_preview_set_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


