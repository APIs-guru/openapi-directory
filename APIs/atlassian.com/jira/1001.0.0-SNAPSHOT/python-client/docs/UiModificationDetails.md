# UiModificationDetails

The details of a UI modification.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contexts** | [**List[UiModificationContextDetails]**](UiModificationContextDetails.md) | List of contexts of the UI modification. The maximum number of contexts is 1000. | [optional] [readonly] 
**data** | **str** | The data of the UI modification. The maximum size of the data is 50000 characters. | [optional] [readonly] 
**description** | **str** | The description of the UI modification. The maximum length is 255 characters. | [optional] [readonly] 
**id** | **str** | The ID of the UI modification. | [readonly] 
**name** | **str** | The name of the UI modification. The maximum length is 255 characters. | [readonly] 
**var_self** | **str** | The URL of the UI modification. | [readonly] 

## Example

```python
from openapi_client.models.ui_modification_details import UiModificationDetails

# TODO update the JSON string below
json = "{}"
# create an instance of UiModificationDetails from a JSON string
ui_modification_details_instance = UiModificationDetails.from_json(json)
# print the JSON string representation of the object
print(UiModificationDetails.to_json())

# convert the object into a dict
ui_modification_details_dict = ui_modification_details_instance.to_dict()
# create an instance of UiModificationDetails from a dict
ui_modification_details_from_dict = UiModificationDetails.from_dict(ui_modification_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


