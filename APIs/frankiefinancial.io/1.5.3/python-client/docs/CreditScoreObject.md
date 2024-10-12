# CreditScoreObject


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**credit_score_history** | [**List[CreditScoreHistory]**](CreditScoreHistory.md) | Shows the credit score for every month over the last year for this business | [optional] 
**current_credit_score** | **int** | The score ultimately ranks entities based on their riskiness and is designed to assist you in making more informed and consistent credit decisions.  The score is based between 0 and 850 index points with a higher score considered lower risk while lower scores are deemed to be riskier entities. It should be used in partnership with your internal credit procedures and policies. Please note that the score and recommendation should be used in partnership with your company&#39;s internal credit procedures and policies. The score should not be used as the sole reason in making a decision about the entity.  0 &#x3D; Critical (ACN deregistered or ABN cancelled)  1 - 125 &#x3D; Entity has a critical status and significant adverse information present. Trading eligibility must be considered.)  126 - 250 &#x3D; Very High (Entity has a critical status and significant adverse information present. Trading eligibility must be considered)  251 - 450 &#x3D; High (Entity has a below average creditworthiness score and some adverse information may be present. Trade with caution, monitor closely and consider your payment terms) | [optional] 

## Example

```python
from openapi_client.models.credit_score_object import CreditScoreObject

# TODO update the JSON string below
json = "{}"
# create an instance of CreditScoreObject from a JSON string
credit_score_object_instance = CreditScoreObject.from_json(json)
# print the JSON string representation of the object
print(CreditScoreObject.to_json())

# convert the object into a dict
credit_score_object_dict = credit_score_object_instance.to_dict()
# create an instance of CreditScoreObject from a dict
credit_score_object_from_dict = CreditScoreObject.from_dict(credit_score_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


