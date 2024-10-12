# UiModificationIdentifiers

Identifiers for a UI modification.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The ID of the UI modification. | [readonly] 
**var_self** | **str** | The URL of the UI modification. | [readonly] 

## Example

```python
from openapi_client.models.ui_modification_identifiers import UiModificationIdentifiers

# TODO update the JSON string below
json = "{}"
# create an instance of UiModificationIdentifiers from a JSON string
ui_modification_identifiers_instance = UiModificationIdentifiers.from_json(json)
# print the JSON string representation of the object
print(UiModificationIdentifiers.to_json())

# convert the object into a dict
ui_modification_identifiers_dict = ui_modification_identifiers_instance.to_dict()
# create an instance of UiModificationIdentifiers from a dict
ui_modification_identifiers_from_dict = UiModificationIdentifiers.from_dict(ui_modification_identifiers_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


