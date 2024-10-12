# UserContract

User details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**UserContractProperties**](UserContractProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type for API Management resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.user_contract import UserContract

# TODO update the JSON string below
json = "{}"
# create an instance of UserContract from a JSON string
user_contract_instance = UserContract.from_json(json)
# print the JSON string representation of the object
print(UserContract.to_json())

# convert the object into a dict
user_contract_dict = user_contract_instance.to_dict()
# create an instance of UserContract from a dict
user_contract_from_dict = UserContract.from_dict(user_contract_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


