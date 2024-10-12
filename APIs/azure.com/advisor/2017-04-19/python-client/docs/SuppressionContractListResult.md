# SuppressionContractListResult

The list of Advisor suppressions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The link used to get the next page of suppressions. | [optional] 
**value** | [**List[SuppressionContract]**](SuppressionContract.md) | The list of suppressions. | [optional] 

## Example

```python
from openapi_client.models.suppression_contract_list_result import SuppressionContractListResult

# TODO update the JSON string below
json = "{}"
# create an instance of SuppressionContractListResult from a JSON string
suppression_contract_list_result_instance = SuppressionContractListResult.from_json(json)
# print the JSON string representation of the object
print(SuppressionContractListResult.to_json())

# convert the object into a dict
suppression_contract_list_result_dict = suppression_contract_list_result_instance.to_dict()
# create an instance of SuppressionContractListResult from a dict
suppression_contract_list_result_from_dict = SuppressionContractListResult.from_dict(suppression_contract_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


