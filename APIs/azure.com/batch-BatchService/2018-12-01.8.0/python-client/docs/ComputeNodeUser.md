# ComputeNodeUser


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expiry_time** | **datetime** | If omitted, the default is 1 day from the current time. For Linux compute nodes, the expiryTime has a precision up to a day. | [optional] 
**is_admin** | **bool** | The default value is false. | [optional] 
**name** | **str** |  | 
**password** | **str** | The password is required for Windows nodes (those created with &#39;cloudServiceConfiguration&#39;, or created with &#39;virtualMachineConfiguration&#39; using a Windows image reference). For Linux compute nodes, the password can optionally be specified along with the sshPublicKey property. | [optional] 
**ssh_public_key** | **str** | The public key should be compatible with OpenSSH encoding and should be base 64 encoded. This property can be specified only for Linux nodes. If this is specified for a Windows node, then the Batch service rejects the request; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request). | [optional] 

## Example

```python
from openapi_client.models.compute_node_user import ComputeNodeUser

# TODO update the JSON string below
json = "{}"
# create an instance of ComputeNodeUser from a JSON string
compute_node_user_instance = ComputeNodeUser.from_json(json)
# print the JSON string representation of the object
print(ComputeNodeUser.to_json())

# convert the object into a dict
compute_node_user_dict = compute_node_user_instance.to_dict()
# create an instance of ComputeNodeUser from a dict
compute_node_user_from_dict = ComputeNodeUser.from_dict(compute_node_user_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


