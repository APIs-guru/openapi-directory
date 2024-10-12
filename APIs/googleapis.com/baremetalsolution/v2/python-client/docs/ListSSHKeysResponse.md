# ListSSHKeysResponse

Message for response of ListSSHKeys.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | Token to retrieve the next page of results, or empty if there are no more results in the list. | [optional] 
**ssh_keys** | [**List[SSHKey]**](SSHKey.md) | The SSH keys registered in the project. | [optional] 

## Example

```python
from openapi_client.models.list_ssh_keys_response import ListSSHKeysResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListSSHKeysResponse from a JSON string
list_ssh_keys_response_instance = ListSSHKeysResponse.from_json(json)
# print the JSON string representation of the object
print(ListSSHKeysResponse.to_json())

# convert the object into a dict
list_ssh_keys_response_dict = list_ssh_keys_response_instance.to_dict()
# create an instance of ListSSHKeysResponse from a dict
list_ssh_keys_response_from_dict = ListSSHKeysResponse.from_dict(list_ssh_keys_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


