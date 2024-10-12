# Loan


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**abn** | **str** |  | [optional] 
**acn** | **str** |  | [optional] 
**amount** | **str** |  | [optional] 
**company_name** | **str** |  | [optional] 
**end_at** | **datetime** |  | [optional] 
**start_at** | **datetime** |  | [optional] 
**status** | **str** |  | [optional] 
**term_length** | **int** |  | [optional] 
**type** | **str** |  | [optional] 
**uuid** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.loan import Loan

# TODO update the JSON string below
json = "{}"
# create an instance of Loan from a JSON string
loan_instance = Loan.from_json(json)
# print the JSON string representation of the object
print(Loan.to_json())

# convert the object into a dict
loan_dict = loan_instance.to_dict()
# create an instance of Loan from a dict
loan_from_dict = Loan.from_dict(loan_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


