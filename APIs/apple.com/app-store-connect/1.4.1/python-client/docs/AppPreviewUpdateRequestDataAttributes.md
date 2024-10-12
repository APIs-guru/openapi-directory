# AppPreviewUpdateRequestDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**preview_frame_time_code** | **str** |  | [optional] 
**source_file_checksum** | **str** |  | [optional] 
**uploaded** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.app_preview_update_request_data_attributes import AppPreviewUpdateRequestDataAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of AppPreviewUpdateRequestDataAttributes from a JSON string
app_preview_update_request_data_attributes_instance = AppPreviewUpdateRequestDataAttributes.from_json(json)
# print the JSON string representation of the object
print(AppPreviewUpdateRequestDataAttributes.to_json())

# convert the object into a dict
app_preview_update_request_data_attributes_dict = app_preview_update_request_data_attributes_instance.to_dict()
# create an instance of AppPreviewUpdateRequestDataAttributes from a dict
app_preview_update_request_data_attributes_from_dict = AppPreviewUpdateRequestDataAttributes.from_dict(app_preview_update_request_data_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


