# OSPolicyResourceFile

A remote or local file.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_insecure** | **bool** | Defaults to false. When false, files are subject to validations based on the file type: Remote: A checksum must be specified. Cloud Storage: An object generation number must be specified. | [optional] 
**gcs** | [**OSPolicyResourceFileGcs**](OSPolicyResourceFileGcs.md) |  | [optional] 
**local_path** | **str** | A local path within the VM to use. | [optional] 
**remote** | [**OSPolicyResourceFileRemote**](OSPolicyResourceFileRemote.md) |  | [optional] 

## Example

```python
from openapi_client.models.os_policy_resource_file import OSPolicyResourceFile

# TODO update the JSON string below
json = "{}"
# create an instance of OSPolicyResourceFile from a JSON string
os_policy_resource_file_instance = OSPolicyResourceFile.from_json(json)
# print the JSON string representation of the object
print(OSPolicyResourceFile.to_json())

# convert the object into a dict
os_policy_resource_file_dict = os_policy_resource_file_instance.to_dict()
# create an instance of OSPolicyResourceFile from a dict
os_policy_resource_file_from_dict = OSPolicyResourceFile.from_dict(os_policy_resource_file_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


