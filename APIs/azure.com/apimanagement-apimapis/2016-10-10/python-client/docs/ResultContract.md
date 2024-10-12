# ResultContract

Operation response details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Operation response description. | [optional] 
**representations** | [**List[RepresentationContract]**](RepresentationContract.md) | Collection of operation response representations. | [optional] 
**status_code** | **int** | Operation response HTTP status code. | 

## Example

```python
from openapi_client.models.result_contract import ResultContract

# TODO update the JSON string below
json = "{}"
# create an instance of ResultContract from a JSON string
result_contract_instance = ResultContract.from_json(json)
# print the JSON string representation of the object
print(ResultContract.to_json())

# convert the object into a dict
result_contract_dict = result_contract_instance.to_dict()
# create an instance of ResultContract from a dict
result_contract_from_dict = ResultContract.from_dict(result_contract_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


