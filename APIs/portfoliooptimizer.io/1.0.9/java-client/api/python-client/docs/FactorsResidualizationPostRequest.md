# FactorsResidualizationPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**factors** | [**List[FactorsResidualizationPostRequestFactorsInner]**](FactorsResidualizationPostRequestFactorsInner.md) |  | 
**residualized_factor** | **int** | The index of the factor to residualize | 

## Example

```python
from openapi_client.models.factors_residualization_post_request import FactorsResidualizationPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of FactorsResidualizationPostRequest from a JSON string
factors_residualization_post_request_instance = FactorsResidualizationPostRequest.from_json(json)
# print the JSON string representation of the object
print(FactorsResidualizationPostRequest.to_json())

# convert the object into a dict
factors_residualization_post_request_dict = factors_residualization_post_request_instance.to_dict()
# create an instance of FactorsResidualizationPostRequest from a dict
factors_residualization_post_request_from_dict = FactorsResidualizationPostRequest.from_dict(factors_residualization_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


