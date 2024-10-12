# SnowMonkeyConfig

Configuration for the faults that can be injected in requests. The name Snow Monkey is an hommage to Netflix's Chaos Monkey 😉

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chaos_config** | [**ChaosConfig**](ChaosConfig.md) |  | 
**dry_run** | **bool** | Whether or not outages will actualy impact requests | 
**enabled** | **bool** | Whether or not this config is enabled | 
**include_user_facing_descriptors** | **bool** | Whether or not user facing apps. will be impacted by Snow Monkey | 
**outage_duration_from** | **int** | Start of outage duration range | 
**outage_duration_to** | **int** | End of outage duration range | 
**outage_strategy** | [**OutageStrategy**](OutageStrategy.md) |  | 
**start_time** | **str** | Start time of Snow Monkey each day | 
**stop_time** | **str** | Stop time of Snow Monkey each day | 
**target_groups** | **List[str]** | Groups impacted by Snow Monkey. If empty, all groups will be impacted | 
**times_per_day** | **int** | Number of time per day each service will be outage | 

## Example

```python
from openapi_client.models.snow_monkey_config import SnowMonkeyConfig

# TODO update the JSON string below
json = "{}"
# create an instance of SnowMonkeyConfig from a JSON string
snow_monkey_config_instance = SnowMonkeyConfig.from_json(json)
# print the JSON string representation of the object
print(SnowMonkeyConfig.to_json())

# convert the object into a dict
snow_monkey_config_dict = snow_monkey_config_instance.to_dict()
# create an instance of SnowMonkeyConfig from a dict
snow_monkey_config_from_dict = SnowMonkeyConfig.from_dict(snow_monkey_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


