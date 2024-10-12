# AppPreviewSetCreateRequestData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**AppPreviewSetCreateRequestDataAttributes**](AppPreviewSetCreateRequestDataAttributes.md) |  | 
**relationships** | [**AppPreviewSetCreateRequestDataRelationships**](AppPreviewSetCreateRequestDataRelationships.md) |  | 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.app_preview_set_create_request_data import AppPreviewSetCreateRequestData

# TODO update the JSON string below
json = "{}"
# create an instance of AppPreviewSetCreateRequestData from a JSON string
app_preview_set_create_request_data_instance = AppPreviewSetCreateRequestData.from_json(json)
# print the JSON string representation of the object
print(AppPreviewSetCreateRequestData.to_json())

# convert the object into a dict
app_preview_set_create_request_data_dict = app_preview_set_create_request_data_instance.to_dict()
# create an instance of AppPreviewSetCreateRequestData from a dict
app_preview_set_create_request_data_from_dict = AppPreviewSetCreateRequestData.from_dict(app_preview_set_create_request_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


