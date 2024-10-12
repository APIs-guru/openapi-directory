# DriveStatus

Provides information about the drive's status

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bit_locker_key** | **str** | The BitLocker key used to encrypt the drive. | [optional] 
**bytes_succeeded** | **int** | Bytes successfully transferred for the drive. | [optional] 
**copy_status** | **str** | Detailed status about the data transfer process. This field is not returned in the response until the drive is in the Transferring state. | [optional] 
**drive_header_hash** | **str** | The drive header hash value. | [optional] 
**drive_id** | **str** | The drive&#39;s hardware serial number, without spaces. | [optional] 
**error_log_uri** | **str** | A URI that points to the blob containing the error log for the data transfer operation. | [optional] 
**manifest_file** | **str** | The relative path of the manifest file on the drive.  | [optional] 
**manifest_hash** | **str** | The Base16-encoded MD5 hash of the manifest file on the drive. | [optional] 
**manifest_uri** | **str** | A URI that points to the blob containing the drive manifest file.  | [optional] 
**percent_complete** | **int** | Percentage completed for the drive.  | [optional] 
**state** | **str** | The drive&#39;s current state.  | [optional] 
**verbose_log_uri** | **str** | A URI that points to the blob containing the verbose log for the data transfer operation.  | [optional] 

## Example

```python
from openapi_client.models.drive_status import DriveStatus

# TODO update the JSON string below
json = "{}"
# create an instance of DriveStatus from a JSON string
drive_status_instance = DriveStatus.from_json(json)
# print the JSON string representation of the object
print(DriveStatus.to_json())

# convert the object into a dict
drive_status_dict = drive_status_instance.to_dict()
# create an instance of DriveStatus from a dict
drive_status_from_dict = DriveStatus.from_dict(drive_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


