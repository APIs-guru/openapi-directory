# ApiUpdateContract

API update contract details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ApiContractUpdateProperties**](ApiContractUpdateProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.api_update_contract import ApiUpdateContract

# TODO update the JSON string below
json = "{}"
# create an instance of ApiUpdateContract from a JSON string
api_update_contract_instance = ApiUpdateContract.from_json(json)
# print the JSON string representation of the object
print(ApiUpdateContract.to_json())

# convert the object into a dict
api_update_contract_dict = api_update_contract_instance.to_dict()
# create an instance of ApiUpdateContract from a dict
api_update_contract_from_dict = ApiUpdateContract.from_dict(api_update_contract_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


