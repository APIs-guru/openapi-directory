# StandardTierEgressWorkload

Specify Standard Tier Internet Data Transfer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**egress_rate** | [**Usage**](Usage.md) |  | [optional] 
**source_region** | **str** | Which [region](https://cloud.google.com/compute/docs/regions-zones) the data is transferred from. | [optional] 

## Example

```python
from openapi_client.models.standard_tier_egress_workload import StandardTierEgressWorkload

# TODO update the JSON string below
json = "{}"
# create an instance of StandardTierEgressWorkload from a JSON string
standard_tier_egress_workload_instance = StandardTierEgressWorkload.from_json(json)
# print the JSON string representation of the object
print(StandardTierEgressWorkload.to_json())

# convert the object into a dict
standard_tier_egress_workload_dict = standard_tier_egress_workload_instance.to_dict()
# create an instance of StandardTierEgressWorkload from a dict
standard_tier_egress_workload_from_dict = StandardTierEgressWorkload.from_dict(standard_tier_egress_workload_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


