# SecretVolume

Configuration for a secret volume. It has the information necessary to fetch the secret value from secret manager and make it available as files mounted at the requested paths within the application container.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mount_path** | **str** | The path within the container to mount the secret volume. For example, setting the mount_path as &#x60;/etc/secrets&#x60; would mount the secret value files under the &#x60;/etc/secrets&#x60; directory. This directory will also be completely shadowed and unavailable to mount any other secrets. Recommended mount path: /etc/secrets | [optional] 
**project_id** | **str** | Project identifier (preferably project number but can also be the project ID) of the project that contains the secret. If not set, it is assumed that the secret is in the same project as the function. | [optional] 
**secret** | **str** | Name of the secret in secret manager (not the full resource name). | [optional] 
**versions** | [**List[SecretVersion]**](SecretVersion.md) | List of secret versions to mount for this secret. If empty, the &#x60;latest&#x60; version of the secret will be made available in a file named after the secret under the mount point. | [optional] 

## Example

```python
from openapi_client.models.secret_volume import SecretVolume

# TODO update the JSON string below
json = "{}"
# create an instance of SecretVolume from a JSON string
secret_volume_instance = SecretVolume.from_json(json)
# print the JSON string representation of the object
print(SecretVolume.to_json())

# convert the object into a dict
secret_volume_dict = secret_volume_instance.to_dict()
# create an instance of SecretVolume from a dict
secret_volume_from_dict = SecretVolume.from_dict(secret_volume_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


