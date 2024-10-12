# NetAppAccountList

List of NetApp account resources

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[NetAppAccount]**](NetAppAccount.md) | Multiple NetApp accounts | [optional] 

## Example

```python
from openapi_client.models.net_app_account_list import NetAppAccountList

# TODO update the JSON string below
json = "{}"
# create an instance of NetAppAccountList from a JSON string
net_app_account_list_instance = NetAppAccountList.from_json(json)
# print the JSON string representation of the object
print(NetAppAccountList.to_json())

# convert the object into a dict
net_app_account_list_dict = net_app_account_list_instance.to_dict()
# create an instance of NetAppAccountList from a dict
net_app_account_list_from_dict = NetAppAccountList.from_dict(net_app_account_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


