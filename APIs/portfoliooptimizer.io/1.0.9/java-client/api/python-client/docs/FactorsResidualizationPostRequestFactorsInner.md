# FactorsResidualizationPostRequestFactorsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**factor_returns** | **List[float]** | factorReturns[t] is the return of the factor at the time t; all the factorReturns arrays must have the same length | 

## Example

```python
from openapi_client.models.factors_residualization_post_request_factors_inner import FactorsResidualizationPostRequestFactorsInner

# TODO update the JSON string below
json = "{}"
# create an instance of FactorsResidualizationPostRequestFactorsInner from a JSON string
factors_residualization_post_request_factors_inner_instance = FactorsResidualizationPostRequestFactorsInner.from_json(json)
# print the JSON string representation of the object
print(FactorsResidualizationPostRequestFactorsInner.to_json())

# convert the object into a dict
factors_residualization_post_request_factors_inner_dict = factors_residualization_post_request_factors_inner_instance.to_dict()
# create an instance of FactorsResidualizationPostRequestFactorsInner from a dict
factors_residualization_post_request_factors_inner_from_dict = FactorsResidualizationPostRequestFactorsInner.from_dict(factors_residualization_post_request_factors_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


