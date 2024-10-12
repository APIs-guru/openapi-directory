# CreateUiModificationDetails

The details of a UI modification.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contexts** | [**List[UiModificationContextDetails]**](UiModificationContextDetails.md) | List of contexts of the UI modification. The maximum number of contexts is 1000. | [optional] 
**data** | **str** | The data of the UI modification. The maximum size of the data is 50000 characters. | [optional] 
**description** | **str** | The description of the UI modification. The maximum length is 255 characters. | [optional] 
**name** | **str** | The name of the UI modification. The maximum length is 255 characters. | 

## Example

```python
from openapi_client.models.create_ui_modification_details import CreateUiModificationDetails

# TODO update the JSON string below
json = "{}"
# create an instance of CreateUiModificationDetails from a JSON string
create_ui_modification_details_instance = CreateUiModificationDetails.from_json(json)
# print the JSON string representation of the object
print(CreateUiModificationDetails.to_json())

# convert the object into a dict
create_ui_modification_details_dict = create_ui_modification_details_instance.to_dict()
# create an instance of CreateUiModificationDetails from a dict
create_ui_modification_details_from_dict = CreateUiModificationDetails.from_dict(create_ui_modification_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


