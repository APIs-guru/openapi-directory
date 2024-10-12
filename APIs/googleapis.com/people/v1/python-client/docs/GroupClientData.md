# GroupClientData

Arbitrary client data that is populated by clients. Duplicate keys and values are allowed.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | The client specified key of the client data. | [optional] 
**value** | **str** | The client specified value of the client data. | [optional] 

## Example

```python
from openapi_client.models.group_client_data import GroupClientData

# TODO update the JSON string below
json = "{}"
# create an instance of GroupClientData from a JSON string
group_client_data_instance = GroupClientData.from_json(json)
# print the JSON string representation of the object
print(GroupClientData.to_json())

# convert the object into a dict
group_client_data_dict = group_client_data_instance.to_dict()
# create an instance of GroupClientData from a dict
group_client_data_from_dict = GroupClientData.from_dict(group_client_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


