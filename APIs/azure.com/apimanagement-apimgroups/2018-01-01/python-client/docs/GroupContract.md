# GroupContract

Contract details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**GroupContractProperties**](GroupContractProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type for API Management resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.group_contract import GroupContract

# TODO update the JSON string below
json = "{}"
# create an instance of GroupContract from a JSON string
group_contract_instance = GroupContract.from_json(json)
# print the JSON string representation of the object
print(GroupContract.to_json())

# convert the object into a dict
group_contract_dict = group_contract_instance.to_dict()
# create an instance of GroupContract from a dict
group_contract_from_dict = GroupContract.from_dict(group_contract_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


