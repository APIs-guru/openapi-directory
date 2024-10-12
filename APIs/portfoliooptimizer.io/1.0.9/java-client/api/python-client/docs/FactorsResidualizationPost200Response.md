# FactorsResidualizationPost200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**residualized_factor_returns** | **List[float]** | residualizedFactorReturns[t] is the return of the residualized factor at the time t | 

## Example

```python
from openapi_client.models.factors_residualization_post200_response import FactorsResidualizationPost200Response

# TODO update the JSON string below
json = "{}"
# create an instance of FactorsResidualizationPost200Response from a JSON string
factors_residualization_post200_response_instance = FactorsResidualizationPost200Response.from_json(json)
# print the JSON string representation of the object
print(FactorsResidualizationPost200Response.to_json())

# convert the object into a dict
factors_residualization_post200_response_dict = factors_residualization_post200_response_instance.to_dict()
# create an instance of FactorsResidualizationPost200Response from a dict
factors_residualization_post200_response_from_dict = FactorsResidualizationPost200Response.from_dict(factors_residualization_post200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


