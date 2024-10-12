# OtherRegionsBasePlanConfig

Pricing information for any new locations Play may launch in.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**eur_price** | [**Money**](Money.md) |  | [optional] 
**new_subscriber_availability** | **bool** | Whether the base plan is available for new subscribers in any new locations Play may launch in. If not specified, this will default to false. | [optional] 
**usd_price** | [**Money**](Money.md) |  | [optional] 

## Example

```python
from openapi_client.models.other_regions_base_plan_config import OtherRegionsBasePlanConfig

# TODO update the JSON string below
json = "{}"
# create an instance of OtherRegionsBasePlanConfig from a JSON string
other_regions_base_plan_config_instance = OtherRegionsBasePlanConfig.from_json(json)
# print the JSON string representation of the object
print(OtherRegionsBasePlanConfig.to_json())

# convert the object into a dict
other_regions_base_plan_config_dict = other_regions_base_plan_config_instance.to_dict()
# create an instance of OtherRegionsBasePlanConfig from a dict
other_regions_base_plan_config_from_dict = OtherRegionsBasePlanConfig.from_dict(other_regions_base_plan_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


