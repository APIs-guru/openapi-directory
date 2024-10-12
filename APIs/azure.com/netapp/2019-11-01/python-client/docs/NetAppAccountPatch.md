# NetAppAccountPatch

NetApp account patch resource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Resource Id | [optional] [readonly] 
**location** | **str** | Resource location | [optional] 
**name** | **str** | Resource name | [optional] [readonly] 
**properties** | [**AccountProperties**](AccountProperties.md) |  | [optional] 
**tags** | **Dict[str, str]** | Tags are a list of key-value pairs that describe the resource | [optional] 
**type** | **str** | Resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.net_app_account_patch import NetAppAccountPatch

# TODO update the JSON string below
json = "{}"
# create an instance of NetAppAccountPatch from a JSON string
net_app_account_patch_instance = NetAppAccountPatch.from_json(json)
# print the JSON string representation of the object
print(NetAppAccountPatch.to_json())

# convert the object into a dict
net_app_account_patch_dict = net_app_account_patch_instance.to_dict()
# create an instance of NetAppAccountPatch from a dict
net_app_account_patch_from_dict = NetAppAccountPatch.from_dict(net_app_account_patch_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


