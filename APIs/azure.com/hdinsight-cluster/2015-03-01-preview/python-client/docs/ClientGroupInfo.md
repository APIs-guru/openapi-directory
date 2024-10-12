# ClientGroupInfo

The information of AAD security group.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**group_id** | **str** | The AAD security group id. | [optional] 
**group_name** | **str** | The AAD security group name. | [optional] 

## Example

```python
from openapi_client.models.client_group_info import ClientGroupInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ClientGroupInfo from a JSON string
client_group_info_instance = ClientGroupInfo.from_json(json)
# print the JSON string representation of the object
print(ClientGroupInfo.to_json())

# convert the object into a dict
client_group_info_dict = client_group_info_instance.to_dict()
# create an instance of ClientGroupInfo from a dict
client_group_info_from_dict = ClientGroupInfo.from_dict(client_group_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


