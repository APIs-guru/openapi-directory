# AppPreviewCreateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**AppPreviewCreateRequestData**](AppPreviewCreateRequestData.md) |  | 

## Example

```python
from openapi_client.models.app_preview_create_request import AppPreviewCreateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AppPreviewCreateRequest from a JSON string
app_preview_create_request_instance = AppPreviewCreateRequest.from_json(json)
# print the JSON string representation of the object
print(AppPreviewCreateRequest.to_json())

# convert the object into a dict
app_preview_create_request_dict = app_preview_create_request_instance.to_dict()
# create an instance of AppPreviewCreateRequest from a dict
app_preview_create_request_from_dict = AppPreviewCreateRequest.from_dict(app_preview_create_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


