# DeviceDetails

Class containing more granular details about the device

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**available_local_storage_in_bytes** | **int** | Local pending storage available on the device in bytes | [optional] 
**available_storage_in_bytes** | **int** | Total pending available storage on the device in bytes | [optional] 
**endpoint_count** | **int** | Total number of endpoints that are currently on the device ( i.e. number of shares on FileServer or number of volumes on IscsiServer) | [optional] 
**provisioned_local_storage_in_bytes** | **int** | Storage in bytes that has been provisioned locally on the device | [optional] 
**provisioned_storage_in_bytes** | **int** | Storage in bytes that has been provisioned on the device including both local and cloud | [optional] 
**total_backup_size_in_bytes** | **int** | Total size taken up by backups in bytes | [optional] 
**total_local_storage_in_bytes** | **int** | Total local storage capacity in device in bytes. | [optional] 
**total_storage_in_bytes** | **int** | Total storage available on the device in bytes. | [optional] 
**using_local_storage_in_bytes** | **int** | Local Storage that is being currently used in bytes | [optional] 
**using_storage_in_bytes** | **int** | Storage that is being currently used in bytes including both local and cloud | [optional] 

## Example

```python
from openapi_client.models.device_details import DeviceDetails

# TODO update the JSON string below
json = "{}"
# create an instance of DeviceDetails from a JSON string
device_details_instance = DeviceDetails.from_json(json)
# print the JSON string representation of the object
print(DeviceDetails.to_json())

# convert the object into a dict
device_details_dict = device_details_instance.to_dict()
# create an instance of DeviceDetails from a dict
device_details_from_dict = DeviceDetails.from_dict(device_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


