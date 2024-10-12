# AppPreviewCreateRequestDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file_name** | **str** |  | 
**file_size** | **int** |  | 
**mime_type** | **str** |  | [optional] 
**preview_frame_time_code** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.app_preview_create_request_data_attributes import AppPreviewCreateRequestDataAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of AppPreviewCreateRequestDataAttributes from a JSON string
app_preview_create_request_data_attributes_instance = AppPreviewCreateRequestDataAttributes.from_json(json)
# print the JSON string representation of the object
print(AppPreviewCreateRequestDataAttributes.to_json())

# convert the object into a dict
app_preview_create_request_data_attributes_dict = app_preview_create_request_data_attributes_instance.to_dict()
# create an instance of AppPreviewCreateRequestDataAttributes from a dict
app_preview_create_request_data_attributes_from_dict = AppPreviewCreateRequestDataAttributes.from_dict(app_preview_create_request_data_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


