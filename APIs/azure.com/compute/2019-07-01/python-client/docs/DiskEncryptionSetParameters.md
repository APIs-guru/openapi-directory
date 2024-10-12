# DiskEncryptionSetParameters

Describes the parameter of customer managed disk encryption set resource id that can be specified for disk. <br><br> NOTE: The disk encryption set resource id can only be specified for managed disk. Please refer https://aka.ms/mdssewithcmkoverview for more details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Resource Id | [optional] 

## Example

```python
from openapi_client.models.disk_encryption_set_parameters import DiskEncryptionSetParameters

# TODO update the JSON string below
json = "{}"
# create an instance of DiskEncryptionSetParameters from a JSON string
disk_encryption_set_parameters_instance = DiskEncryptionSetParameters.from_json(json)
# print the JSON string representation of the object
print(DiskEncryptionSetParameters.to_json())

# convert the object into a dict
disk_encryption_set_parameters_dict = disk_encryption_set_parameters_instance.to_dict()
# create an instance of DiskEncryptionSetParameters from a dict
disk_encryption_set_parameters_from_dict = DiskEncryptionSetParameters.from_dict(disk_encryption_set_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


