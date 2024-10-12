# DebugInstanceRequest

Request message for Instances.DebugInstance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ssh_key** | **str** | Public SSH key to add to the instance. Examples: [USERNAME]:ssh-rsa [KEY_VALUE] [USERNAME] [USERNAME]:ssh-rsa [KEY_VALUE] google-ssh {\&quot;userName\&quot;:\&quot;[USERNAME]\&quot;,\&quot;expireOn\&quot;:\&quot;[EXPIRE_TIME]\&quot;}For more information, see Adding and Removing SSH Keys (https://cloud.google.com/compute/docs/instances/adding-removing-ssh-keys). | [optional] 

## Example

```python
from openapi_client.models.debug_instance_request import DebugInstanceRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DebugInstanceRequest from a JSON string
debug_instance_request_instance = DebugInstanceRequest.from_json(json)
# print the JSON string representation of the object
print(DebugInstanceRequest.to_json())

# convert the object into a dict
debug_instance_request_dict = debug_instance_request_instance.to_dict()
# create an instance of DebugInstanceRequest from a dict
debug_instance_request_from_dict = DebugInstanceRequest.from_dict(debug_instance_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


