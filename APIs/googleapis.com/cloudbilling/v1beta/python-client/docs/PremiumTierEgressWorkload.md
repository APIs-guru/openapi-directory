# PremiumTierEgressWorkload

Specify a Premium Tier Internet Data Transfer networking workload.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destination_continent** | **str** | Where the data is sent to. | [optional] 
**egress_rate** | [**Usage**](Usage.md) |  | [optional] 
**source_region** | **str** | Which [region](https://cloud.google.com/compute/docs/regions-zones) the data comes from. | [optional] 

## Example

```python
from openapi_client.models.premium_tier_egress_workload import PremiumTierEgressWorkload

# TODO update the JSON string below
json = "{}"
# create an instance of PremiumTierEgressWorkload from a JSON string
premium_tier_egress_workload_instance = PremiumTierEgressWorkload.from_json(json)
# print the JSON string representation of the object
print(PremiumTierEgressWorkload.to_json())

# convert the object into a dict
premium_tier_egress_workload_dict = premium_tier_egress_workload_instance.to_dict()
# create an instance of PremiumTierEgressWorkload from a dict
premium_tier_egress_workload_from_dict = PremiumTierEgressWorkload.from_dict(premium_tier_egress_workload_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


