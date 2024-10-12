# NodeUpdateUserParameter


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expiry_time** | **datetime** | If omitted, the default is 1 day from the current time. For Linux compute nodes, the expiryTime has a precision up to a day. | [optional] 
**password** | **str** | The password is required for Windows nodes (those created with &#39;cloudServiceConfiguration&#39;, or created with &#39;virtualMachineConfiguration&#39; using a Windows image reference). For Linux compute nodes, the password can optionally be specified along with the sshPublicKey property. If omitted, any existing password is removed. | [optional] 
**ssh_public_key** | **str** | The public key should be compatible with OpenSSH encoding and should be base 64 encoded. This property can be specified only for Linux nodes. If this is specified for a Windows node, then the Batch service rejects the request; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request). If omitted, any existing SSH public key is removed. | [optional] 

## Example

```python
from openapi_client.models.node_update_user_parameter import NodeUpdateUserParameter

# TODO update the JSON string below
json = "{}"
# create an instance of NodeUpdateUserParameter from a JSON string
node_update_user_parameter_instance = NodeUpdateUserParameter.from_json(json)
# print the JSON string representation of the object
print(NodeUpdateUserParameter.to_json())

# convert the object into a dict
node_update_user_parameter_dict = node_update_user_parameter_instance.to_dict()
# create an instance of NodeUpdateUserParameter from a dict
node_update_user_parameter_from_dict = NodeUpdateUserParameter.from_dict(node_update_user_parameter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


