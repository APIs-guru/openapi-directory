# AppPreviewSetCreateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**AppPreviewSetCreateRequestData**](AppPreviewSetCreateRequestData.md) |  | 

## Example

```python
from openapi_client.models.app_preview_set_create_request import AppPreviewSetCreateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AppPreviewSetCreateRequest from a JSON string
app_preview_set_create_request_instance = AppPreviewSetCreateRequest.from_json(json)
# print the JSON string representation of the object
print(AppPreviewSetCreateRequest.to_json())

# convert the object into a dict
app_preview_set_create_request_dict = app_preview_set_create_request_instance.to_dict()
# create an instance of AppPreviewSetCreateRequest from a dict
app_preview_set_create_request_from_dict = AppPreviewSetCreateRequest.from_dict(app_preview_set_create_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


