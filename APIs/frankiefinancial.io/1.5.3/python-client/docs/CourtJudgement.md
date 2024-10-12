# CourtJudgement


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **str** | The name of the court judgement that was handed down | [optional] 
**action_date** | **datetime** | The date of the court ruling | [optional] 
**created_date** | **datetime** | The date the court judgement was received and published | [optional] 
**judgement_amount** | **float** | The amount the defendant was ordered by the court to pay to the plaintiff | [optional] 
**location** | **str** | The location of the court judgment | [optional] 
**nature_of_claim** | **str** | Nature of the claim | [optional] 
**nature_of_claim_desc** | **str** | Additional information regarding the nature of the claim | [optional] 
**plaintiff** | **str** | The person or company that is taking the defendant to court | [optional] 
**proceeding_number** | **str** | Court judgement referencing identifier | [optional] 
**state** | **str** | The state jurisdiction of the court judgement | [optional] 

## Example

```python
from openapi_client.models.court_judgement import CourtJudgement

# TODO update the JSON string below
json = "{}"
# create an instance of CourtJudgement from a JSON string
court_judgement_instance = CourtJudgement.from_json(json)
# print the JSON string representation of the object
print(CourtJudgement.to_json())

# convert the object into a dict
court_judgement_dict = court_judgement_instance.to_dict()
# create an instance of CourtJudgement from a dict
court_judgement_from_dict = CourtJudgement.from_dict(court_judgement_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


