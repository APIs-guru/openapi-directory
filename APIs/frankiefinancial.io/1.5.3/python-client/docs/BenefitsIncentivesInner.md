# BenefitsIncentivesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the incentive | [optional] 
**value** | **str** | Description of incentive | [optional] 

## Example

```python
from openapi_client.models.benefits_incentives_inner import BenefitsIncentivesInner

# TODO update the JSON string below
json = "{}"
# create an instance of BenefitsIncentivesInner from a JSON string
benefits_incentives_inner_instance = BenefitsIncentivesInner.from_json(json)
# print the JSON string representation of the object
print(BenefitsIncentivesInner.to_json())

# convert the object into a dict
benefits_incentives_inner_dict = benefits_incentives_inner_instance.to_dict()
# create an instance of BenefitsIncentivesInner from a dict
benefits_incentives_inner_from_dict = BenefitsIncentivesInner.from_dict(benefits_incentives_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


