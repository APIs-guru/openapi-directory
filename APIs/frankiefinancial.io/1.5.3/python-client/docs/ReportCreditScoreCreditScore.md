# ReportCreditScoreCreditScore


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**abn** | **str** |  | [optional] 
**acn** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**item_code** | **str** |  | [optional] 
**scores** | [**CreditScoreObject**](CreditScoreObject.md) |  | [optional] 

## Example

```python
from openapi_client.models.report_credit_score_credit_score import ReportCreditScoreCreditScore

# TODO update the JSON string below
json = "{}"
# create an instance of ReportCreditScoreCreditScore from a JSON string
report_credit_score_credit_score_instance = ReportCreditScoreCreditScore.from_json(json)
# print the JSON string representation of the object
print(ReportCreditScoreCreditScore.to_json())

# convert the object into a dict
report_credit_score_credit_score_dict = report_credit_score_credit_score_instance.to_dict()
# create an instance of ReportCreditScoreCreditScore from a dict
report_credit_score_credit_score_from_dict = ReportCreditScoreCreditScore.from_dict(report_credit_score_credit_score_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


