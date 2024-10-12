# DataBoxDiskJobSecrets

The secrets related to disk job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disk_secrets** | [**List[DiskSecret]**](DiskSecret.md) | Contains the list of secrets object for that device. | [optional] [readonly] 
**is_passkey_user_defined** | **bool** | Whether passkey was provided by user. | [optional] [readonly] 
**pass_key** | **str** | PassKey for the disk Job. | [optional] [readonly] 

## Example

```python
from openapi_client.models.data_box_disk_job_secrets import DataBoxDiskJobSecrets

# TODO update the JSON string below
json = "{}"
# create an instance of DataBoxDiskJobSecrets from a JSON string
data_box_disk_job_secrets_instance = DataBoxDiskJobSecrets.from_json(json)
# print the JSON string representation of the object
print(DataBoxDiskJobSecrets.to_json())

# convert the object into a dict
data_box_disk_job_secrets_dict = data_box_disk_job_secrets_instance.to_dict()
# create an instance of DataBoxDiskJobSecrets from a dict
data_box_disk_job_secrets_from_dict = DataBoxDiskJobSecrets.from_dict(data_box_disk_job_secrets_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


