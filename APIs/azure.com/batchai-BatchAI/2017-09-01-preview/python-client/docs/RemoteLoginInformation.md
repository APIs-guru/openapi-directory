# RemoteLoginInformation

Contains remote login details to SSH/RDP to a compute node in cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ip_address** | **str** | ip address | 
**node_id** | **str** | Id of the compute node | 
**port** | **float** |  | 

## Example

```python
from openapi_client.models.remote_login_information import RemoteLoginInformation

# TODO update the JSON string below
json = "{}"
# create an instance of RemoteLoginInformation from a JSON string
remote_login_information_instance = RemoteLoginInformation.from_json(json)
# print the JSON string representation of the object
print(RemoteLoginInformation.to_json())

# convert the object into a dict
remote_login_information_dict = remote_login_information_instance.to_dict()
# create an instance of RemoteLoginInformation from a dict
remote_login_information_from_dict = RemoteLoginInformation.from_dict(remote_login_information_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


