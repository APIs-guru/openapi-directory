# RegionalBasePlanConfig

Configuration for a base plan specific to a region.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**new_subscriber_availability** | **bool** | Whether the base plan in the specified region is available for new subscribers. Existing subscribers will not have their subscription canceled if this value is set to false. If not specified, this will default to false. | [optional] 
**price** | [**Money**](Money.md) |  | [optional] 
**region_code** | **str** | Required. Region code this configuration applies to, as defined by ISO 3166-2, e.g. \&quot;US\&quot;. | [optional] 

## Example

```python
from openapi_client.models.regional_base_plan_config import RegionalBasePlanConfig

# TODO update the JSON string below
json = "{}"
# create an instance of RegionalBasePlanConfig from a JSON string
regional_base_plan_config_instance = RegionalBasePlanConfig.from_json(json)
# print the JSON string representation of the object
print(RegionalBasePlanConfig.to_json())

# convert the object into a dict
regional_base_plan_config_dict = regional_base_plan_config_instance.to_dict()
# create an instance of RegionalBasePlanConfig from a dict
regional_base_plan_config_from_dict = RegionalBasePlanConfig.from_dict(regional_base_plan_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


