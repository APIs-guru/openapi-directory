# HeldDriveQuery

Options for Drive holds.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**include_shared_drive_files** | **bool** | To include files in shared drives in the hold, set to **true**. | [optional] 
**include_team_drive_files** | **bool** | To include files in Team Drives in the hold, set to **true**. | [optional] 

## Example

```python
from openapi_client.models.held_drive_query import HeldDriveQuery

# TODO update the JSON string below
json = "{}"
# create an instance of HeldDriveQuery from a JSON string
held_drive_query_instance = HeldDriveQuery.from_json(json)
# print the JSON string representation of the object
print(HeldDriveQuery.to_json())

# convert the object into a dict
held_drive_query_dict = held_drive_query_instance.to_dict()
# create an instance of HeldDriveQuery from a dict
held_drive_query_from_dict = HeldDriveQuery.from_dict(held_drive_query_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


