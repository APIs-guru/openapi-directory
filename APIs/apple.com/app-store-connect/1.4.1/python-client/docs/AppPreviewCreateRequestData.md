# AppPreviewCreateRequestData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**AppPreviewCreateRequestDataAttributes**](AppPreviewCreateRequestDataAttributes.md) |  | 
**relationships** | [**AppPreviewCreateRequestDataRelationships**](AppPreviewCreateRequestDataRelationships.md) |  | 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.app_preview_create_request_data import AppPreviewCreateRequestData

# TODO update the JSON string below
json = "{}"
# create an instance of AppPreviewCreateRequestData from a JSON string
app_preview_create_request_data_instance = AppPreviewCreateRequestData.from_json(json)
# print the JSON string representation of the object
print(AppPreviewCreateRequestData.to_json())

# convert the object into a dict
app_preview_create_request_data_dict = app_preview_create_request_data_instance.to_dict()
# create an instance of AppPreviewCreateRequestData from a dict
app_preview_create_request_data_from_dict = AppPreviewCreateRequestData.from_dict(app_preview_create_request_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


