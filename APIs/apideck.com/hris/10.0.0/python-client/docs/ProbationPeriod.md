# ProbationPeriod


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_date** | **date** | The date that the employee ended their probation period at the company. | [optional] 
**start_date** | **date** | The date that the employee started their probation period at the company. | [optional] 

## Example

```python
from openapi_client.models.probation_period import ProbationPeriod

# TODO update the JSON string below
json = "{}"
# create an instance of ProbationPeriod from a JSON string
probation_period_instance = ProbationPeriod.from_json(json)
# print the JSON string representation of the object
print(ProbationPeriod.to_json())

# convert the object into a dict
probation_period_dict = probation_period_instance.to_dict()
# create an instance of ProbationPeriod from a dict
probation_period_from_dict = ProbationPeriod.from_dict(probation_period_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


