# AppPreviewSetAppPreviewsLinkagesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[AppPreviewSetRelationshipsAppPreviewsDataInner]**](AppPreviewSetRelationshipsAppPreviewsDataInner.md) |  | 
**links** | [**PagedDocumentLinks**](PagedDocumentLinks.md) |  | 
**meta** | [**PagingInformation**](PagingInformation.md) |  | [optional] 

## Example

```python
from openapi_client.models.app_preview_set_app_previews_linkages_response import AppPreviewSetAppPreviewsLinkagesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AppPreviewSetAppPreviewsLinkagesResponse from a JSON string
app_preview_set_app_previews_linkages_response_instance = AppPreviewSetAppPreviewsLinkagesResponse.from_json(json)
# print the JSON string representation of the object
print(AppPreviewSetAppPreviewsLinkagesResponse.to_json())

# convert the object into a dict
app_preview_set_app_previews_linkages_response_dict = app_preview_set_app_previews_linkages_response_instance.to_dict()
# create an instance of AppPreviewSetAppPreviewsLinkagesResponse from a dict
app_preview_set_app_previews_linkages_response_from_dict = AppPreviewSetAppPreviewsLinkagesResponse.from_dict(app_preview_set_app_previews_linkages_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


