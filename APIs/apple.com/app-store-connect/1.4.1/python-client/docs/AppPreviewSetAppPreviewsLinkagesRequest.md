# AppPreviewSetAppPreviewsLinkagesRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[AppPreviewSetRelationshipsAppPreviewsDataInner]**](AppPreviewSetRelationshipsAppPreviewsDataInner.md) |  | 

## Example

```python
from openapi_client.models.app_preview_set_app_previews_linkages_request import AppPreviewSetAppPreviewsLinkagesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AppPreviewSetAppPreviewsLinkagesRequest from a JSON string
app_preview_set_app_previews_linkages_request_instance = AppPreviewSetAppPreviewsLinkagesRequest.from_json(json)
# print the JSON string representation of the object
print(AppPreviewSetAppPreviewsLinkagesRequest.to_json())

# convert the object into a dict
app_preview_set_app_previews_linkages_request_dict = app_preview_set_app_previews_linkages_request_instance.to_dict()
# create an instance of AppPreviewSetAppPreviewsLinkagesRequest from a dict
app_preview_set_app_previews_linkages_request_from_dict = AppPreviewSetAppPreviewsLinkagesRequest.from_dict(app_preview_set_app_previews_linkages_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


