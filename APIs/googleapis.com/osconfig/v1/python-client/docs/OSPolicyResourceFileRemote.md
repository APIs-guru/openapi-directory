# OSPolicyResourceFileRemote

Specifies a file available via some URI.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sha256_checksum** | **str** | SHA256 checksum of the remote file. | [optional] 
**uri** | **str** | Required. URI from which to fetch the object. It should contain both the protocol and path following the format &#x60;{protocol}://{location}&#x60;. | [optional] 

## Example

```python
from openapi_client.models.os_policy_resource_file_remote import OSPolicyResourceFileRemote

# TODO update the JSON string below
json = "{}"
# create an instance of OSPolicyResourceFileRemote from a JSON string
os_policy_resource_file_remote_instance = OSPolicyResourceFileRemote.from_json(json)
# print the JSON string representation of the object
print(OSPolicyResourceFileRemote.to_json())

# convert the object into a dict
os_policy_resource_file_remote_dict = os_policy_resource_file_remote_instance.to_dict()
# create an instance of OSPolicyResourceFileRemote from a dict
os_policy_resource_file_remote_from_dict = OSPolicyResourceFileRemote.from_dict(os_policy_resource_file_remote_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


