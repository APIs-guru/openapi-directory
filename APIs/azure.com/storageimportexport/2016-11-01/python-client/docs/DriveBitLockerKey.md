# DriveBitLockerKey

BitLocker recovery key or password to the specified drive

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bit_locker_key** | **str** | BitLocker recovery key or password | [optional] 
**drive_id** | **str** | Drive ID | [optional] 

## Example

```python
from openapi_client.models.drive_bit_locker_key import DriveBitLockerKey

# TODO update the JSON string below
json = "{}"
# create an instance of DriveBitLockerKey from a JSON string
drive_bit_locker_key_instance = DriveBitLockerKey.from_json(json)
# print the JSON string representation of the object
print(DriveBitLockerKey.to_json())

# convert the object into a dict
drive_bit_locker_key_dict = drive_bit_locker_key_instance.to_dict()
# create an instance of DriveBitLockerKey from a dict
drive_bit_locker_key_from_dict = DriveBitLockerKey.from_dict(drive_bit_locker_key_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


