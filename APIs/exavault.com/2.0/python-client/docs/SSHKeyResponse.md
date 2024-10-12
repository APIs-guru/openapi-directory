# SSHKeyResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**SSHKey**](SSHKey.md) |  | [optional] 
**included** | [**List[User]**](User.md) |  | [optional] 
**response_status** | **int** | Http status code of the response. | [optional] 

## Example

```python
from openapi_client.models.ssh_key_response import SSHKeyResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SSHKeyResponse from a JSON string
ssh_key_response_instance = SSHKeyResponse.from_json(json)
# print the JSON string representation of the object
print(SSHKeyResponse.to_json())

# convert the object into a dict
ssh_key_response_dict = ssh_key_response_instance.to_dict()
# create an instance of SSHKeyResponse from a dict
ssh_key_response_from_dict = SSHKeyResponse.from_dict(ssh_key_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


