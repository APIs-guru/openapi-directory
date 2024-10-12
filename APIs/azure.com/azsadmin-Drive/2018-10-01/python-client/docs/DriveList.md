# DriveList

Pageable list of storage drives.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URI to the next page. | [optional] 
**value** | [**List[Drive]**](Drive.md) | List of storage drives. | [optional] 

## Example

```python
from openapi_client.models.drive_list import DriveList

# TODO update the JSON string below
json = "{}"
# create an instance of DriveList from a JSON string
drive_list_instance = DriveList.from_json(json)
# print the JSON string representation of the object
print(DriveList.to_json())

# convert the object into a dict
drive_list_dict = drive_list_instance.to_dict()
# create an instance of DriveList from a dict
drive_list_from_dict = DriveList.from_dict(drive_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


