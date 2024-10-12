# SlotConfigNames

Class containing names for connection strings and application settings to be marked as sticky to the slot               and not moved during swap operation              This is valid for all deployment slots under the site

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_setting_names** | **List[str]** | List of application settings names | [optional] 
**connection_string_names** | **List[str]** | List of connection string names | [optional] 

## Example

```python
from openapi_client.models.slot_config_names import SlotConfigNames

# TODO update the JSON string below
json = "{}"
# create an instance of SlotConfigNames from a JSON string
slot_config_names_instance = SlotConfigNames.from_json(json)
# print the JSON string representation of the object
print(SlotConfigNames.to_json())

# convert the object into a dict
slot_config_names_dict = slot_config_names_instance.to_dict()
# create an instance of SlotConfigNames from a dict
slot_config_names_from_dict = SlotConfigNames.from_dict(slot_config_names_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


