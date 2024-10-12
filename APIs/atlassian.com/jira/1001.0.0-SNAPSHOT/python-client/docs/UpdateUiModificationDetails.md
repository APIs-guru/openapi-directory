# UpdateUiModificationDetails

The details of a UI modification.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contexts** | [**List[UiModificationContextDetails]**](UiModificationContextDetails.md) | List of contexts of the UI modification. The maximum number of contexts is 1000. If provided, replaces all existing contexts. | [optional] 
**data** | **str** | The data of the UI modification. The maximum size of the data is 50000 characters. | [optional] 
**description** | **str** | The description of the UI modification. The maximum length is 255 characters. | [optional] 
**name** | **str** | The name of the UI modification. The maximum length is 255 characters. | [optional] 

## Example

```python
from openapi_client.models.update_ui_modification_details import UpdateUiModificationDetails

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateUiModificationDetails from a JSON string
update_ui_modification_details_instance = UpdateUiModificationDetails.from_json(json)
# print the JSON string representation of the object
print(UpdateUiModificationDetails.to_json())

# convert the object into a dict
update_ui_modification_details_dict = update_ui_modification_details_instance.to_dict()
# create an instance of UpdateUiModificationDetails from a dict
update_ui_modification_details_from_dict = UpdateUiModificationDetails.from_dict(update_ui_modification_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


