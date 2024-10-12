# DriveGroupsFilter


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parent_group_id** | **str** | ID of the drive group to filter on | [optional] 

## Example

```python
from openapi_client.models.drive_groups_filter import DriveGroupsFilter

# TODO update the JSON string below
json = "{}"
# create an instance of DriveGroupsFilter from a JSON string
drive_groups_filter_instance = DriveGroupsFilter.from_json(json)
# print the JSON string representation of the object
print(DriveGroupsFilter.to_json())

# convert the object into a dict
drive_groups_filter_dict = drive_groups_filter_instance.to_dict()
# create an instance of DriveGroupsFilter from a dict
drive_groups_filter_from_dict = DriveGroupsFilter.from_dict(drive_groups_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


