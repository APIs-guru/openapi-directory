# AppPreviewUpdateRequestData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**AppPreviewUpdateRequestDataAttributes**](AppPreviewUpdateRequestDataAttributes.md) |  | [optional] 
**id** | **str** |  | 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.app_preview_update_request_data import AppPreviewUpdateRequestData

# TODO update the JSON string below
json = "{}"
# create an instance of AppPreviewUpdateRequestData from a JSON string
app_preview_update_request_data_instance = AppPreviewUpdateRequestData.from_json(json)
# print the JSON string representation of the object
print(AppPreviewUpdateRequestData.to_json())

# convert the object into a dict
app_preview_update_request_data_dict = app_preview_update_request_data_instance.to_dict()
# create an instance of AppPreviewUpdateRequestData from a dict
app_preview_update_request_data_from_dict = AppPreviewUpdateRequestData.from_dict(app_preview_update_request_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


