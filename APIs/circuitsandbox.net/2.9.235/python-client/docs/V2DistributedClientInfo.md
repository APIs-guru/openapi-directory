# V2DistributedClientInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_id** | **str** | The client id | [optional] 
**client_version** | **str** | The version of the client | [optional] 
**device_subtype** | **str** | The device sub type | [optional] 
**device_type** | **str** | The devicetype | [optional] 
**hardware_model** | **str** | The hardware model | [optional] 
**home_node** | **str** | The home node name | [optional] 
**manufacturer** | **str** | The manufacturer | [optional] 
**os_version** | **str** | The version of the operating system | [optional] 
**user_id** | **str** | The user id | [optional] 

## Example

```python
from openapi_client.models.v2_distributed_client_info import V2DistributedClientInfo

# TODO update the JSON string below
json = "{}"
# create an instance of V2DistributedClientInfo from a JSON string
v2_distributed_client_info_instance = V2DistributedClientInfo.from_json(json)
# print the JSON string representation of the object
print(V2DistributedClientInfo.to_json())

# convert the object into a dict
v2_distributed_client_info_dict = v2_distributed_client_info_instance.to_dict()
# create an instance of V2DistributedClientInfo from a dict
v2_distributed_client_info_from_dict = V2DistributedClientInfo.from_dict(v2_distributed_client_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


