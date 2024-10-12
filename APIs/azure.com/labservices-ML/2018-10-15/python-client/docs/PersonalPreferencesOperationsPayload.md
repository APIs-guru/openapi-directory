# PersonalPreferencesOperationsPayload

Represents payload for any Environment operations like get, start, stop, connect

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**add_remove** | **str** | Enum indicating if user is adding or removing a favorite lab | [optional] 
**lab_account_resource_id** | **str** | Resource Id of the lab account | [optional] 
**lab_resource_id** | **str** | Resource Id of the lab to add/remove from the favorites list | [optional] 

## Example

```python
from openapi_client.models.personal_preferences_operations_payload import PersonalPreferencesOperationsPayload

# TODO update the JSON string below
json = "{}"
# create an instance of PersonalPreferencesOperationsPayload from a JSON string
personal_preferences_operations_payload_instance = PersonalPreferencesOperationsPayload.from_json(json)
# print the JSON string representation of the object
print(PersonalPreferencesOperationsPayload.to_json())

# convert the object into a dict
personal_preferences_operations_payload_dict = personal_preferences_operations_payload_instance.to_dict()
# create an instance of PersonalPreferencesOperationsPayload from a dict
personal_preferences_operations_payload_from_dict = PersonalPreferencesOperationsPayload.from_dict(personal_preferences_operations_payload_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


