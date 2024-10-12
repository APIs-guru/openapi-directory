# AppPreviewSetsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[AppPreviewSet]**](AppPreviewSet.md) |  | 
**included** | [**List[AppPreview]**](AppPreview.md) |  | [optional] 
**links** | [**PagedDocumentLinks**](PagedDocumentLinks.md) |  | 
**meta** | [**PagingInformation**](PagingInformation.md) |  | [optional] 

## Example

```python
from openapi_client.models.app_preview_sets_response import AppPreviewSetsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AppPreviewSetsResponse from a JSON string
app_preview_sets_response_instance = AppPreviewSetsResponse.from_json(json)
# print the JSON string representation of the object
print(AppPreviewSetsResponse.to_json())

# convert the object into a dict
app_preview_sets_response_dict = app_preview_sets_response_instance.to_dict()
# create an instance of AppPreviewSetsResponse from a dict
app_preview_sets_response_from_dict = AppPreviewSetsResponse.from_dict(app_preview_sets_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


