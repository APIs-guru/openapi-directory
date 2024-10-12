# HybridUseBenefitProperties

Hybrid use benefit properties

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_date** | **datetime** | Created date | [optional] [readonly] 
**last_updated_date** | **datetime** | Last updated date | [optional] [readonly] 
**provisioning_state** | [**ProvisioningState**](ProvisioningState.md) |  | [optional] 

## Example

```python
from openapi_client.models.hybrid_use_benefit_properties import HybridUseBenefitProperties

# TODO update the JSON string below
json = "{}"
# create an instance of HybridUseBenefitProperties from a JSON string
hybrid_use_benefit_properties_instance = HybridUseBenefitProperties.from_json(json)
# print the JSON string representation of the object
print(HybridUseBenefitProperties.to_json())

# convert the object into a dict
hybrid_use_benefit_properties_dict = hybrid_use_benefit_properties_instance.to_dict()
# create an instance of HybridUseBenefitProperties from a dict
hybrid_use_benefit_properties_from_dict = HybridUseBenefitProperties.from_dict(hybrid_use_benefit_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


