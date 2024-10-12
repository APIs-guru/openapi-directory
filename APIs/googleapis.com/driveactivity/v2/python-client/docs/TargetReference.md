# TargetReference

A lightweight reference to the target of activity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**drive** | [**DriveReference**](DriveReference.md) |  | [optional] 
**drive_item** | [**DriveItemReference**](DriveItemReference.md) |  | [optional] 
**team_drive** | [**TeamDriveReference**](TeamDriveReference.md) |  | [optional] 

## Example

```python
from openapi_client.models.target_reference import TargetReference

# TODO update the JSON string below
json = "{}"
# create an instance of TargetReference from a JSON string
target_reference_instance = TargetReference.from_json(json)
# print the JSON string representation of the object
print(TargetReference.to_json())

# convert the object into a dict
target_reference_dict = target_reference_instance.to_dict()
# create an instance of TargetReference from a dict
target_reference_from_dict = TargetReference.from_dict(target_reference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


