# InstancesReencryptRequest

Database Instance reencrypt request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backup_reencryption_config** | [**BackupReencryptionConfig**](BackupReencryptionConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.instances_reencrypt_request import InstancesReencryptRequest

# TODO update the JSON string below
json = "{}"
# create an instance of InstancesReencryptRequest from a JSON string
instances_reencrypt_request_instance = InstancesReencryptRequest.from_json(json)
# print the JSON string representation of the object
print(InstancesReencryptRequest.to_json())

# convert the object into a dict
instances_reencrypt_request_dict = instances_reencrypt_request_instance.to_dict()
# create an instance of InstancesReencryptRequest from a dict
instances_reencrypt_request_from_dict = InstancesReencryptRequest.from_dict(instances_reencrypt_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


