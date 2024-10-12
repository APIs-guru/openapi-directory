# AppPreviewSetCreateRequestDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**preview_type** | [**PreviewType**](PreviewType.md) |  | 

## Example

```python
from openapi_client.models.app_preview_set_create_request_data_attributes import AppPreviewSetCreateRequestDataAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of AppPreviewSetCreateRequestDataAttributes from a JSON string
app_preview_set_create_request_data_attributes_instance = AppPreviewSetCreateRequestDataAttributes.from_json(json)
# print the JSON string representation of the object
print(AppPreviewSetCreateRequestDataAttributes.to_json())

# convert the object into a dict
app_preview_set_create_request_data_attributes_dict = app_preview_set_create_request_data_attributes_instance.to_dict()
# create an instance of AppPreviewSetCreateRequestDataAttributes from a dict
app_preview_set_create_request_data_attributes_from_dict = AppPreviewSetCreateRequestDataAttributes.from_dict(app_preview_set_create_request_data_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


