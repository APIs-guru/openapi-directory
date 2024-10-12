# CreditScoreHistory


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_date** | **datetime** |  | [optional] 
**score** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.credit_score_history import CreditScoreHistory

# TODO update the JSON string below
json = "{}"
# create an instance of CreditScoreHistory from a JSON string
credit_score_history_instance = CreditScoreHistory.from_json(json)
# print the JSON string representation of the object
print(CreditScoreHistory.to_json())

# convert the object into a dict
credit_score_history_dict = credit_score_history_instance.to_dict()
# create an instance of CreditScoreHistory from a dict
credit_score_history_from_dict = CreditScoreHistory.from_dict(credit_score_history_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


