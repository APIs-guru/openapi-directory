# HybridUseBenefitListResult

List of hybrid use benefits

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Url to get the next page of items. | [optional] 
**value** | [**List[HybridUseBenefitModel]**](HybridUseBenefitModel.md) | List of hybrid use benefits | [optional] 

## Example

```python
from openapi_client.models.hybrid_use_benefit_list_result import HybridUseBenefitListResult

# TODO update the JSON string below
json = "{}"
# create an instance of HybridUseBenefitListResult from a JSON string
hybrid_use_benefit_list_result_instance = HybridUseBenefitListResult.from_json(json)
# print the JSON string representation of the object
print(HybridUseBenefitListResult.to_json())

# convert the object into a dict
hybrid_use_benefit_list_result_dict = hybrid_use_benefit_list_result_instance.to_dict()
# create an instance of HybridUseBenefitListResult from a dict
hybrid_use_benefit_list_result_from_dict = HybridUseBenefitListResult.from_dict(hybrid_use_benefit_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


