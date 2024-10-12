# NetAppAccount

NetApp account resource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Resource Id | [optional] [readonly] 
**location** | **str** | Resource location | 
**name** | **str** | Resource name | [optional] [readonly] 
**properties** | [**AccountProperties**](AccountProperties.md) |  | [optional] 
**tags** | **object** | Resource tags | [optional] 
**type** | **str** | Resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.net_app_account import NetAppAccount

# TODO update the JSON string below
json = "{}"
# create an instance of NetAppAccount from a JSON string
net_app_account_instance = NetAppAccount.from_json(json)
# print the JSON string representation of the object
print(NetAppAccount.to_json())

# convert the object into a dict
net_app_account_dict = net_app_account_instance.to_dict()
# create an instance of NetAppAccount from a dict
net_app_account_from_dict = NetAppAccount.from_dict(net_app_account_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


