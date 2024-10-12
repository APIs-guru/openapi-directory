# AppPreviewUpdateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**AppPreviewUpdateRequestData**](AppPreviewUpdateRequestData.md) |  | 

## Example

```python
from openapi_client.models.app_preview_update_request import AppPreviewUpdateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AppPreviewUpdateRequest from a JSON string
app_preview_update_request_instance = AppPreviewUpdateRequest.from_json(json)
# print the JSON string representation of the object
print(AppPreviewUpdateRequest.to_json())

# convert the object into a dict
app_preview_update_request_dict = app_preview_update_request_instance.to_dict()
# create an instance of AppPreviewUpdateRequest from a dict
app_preview_update_request_from_dict = AppPreviewUpdateRequest.from_dict(app_preview_update_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


