# EnterpriseTopazSidekickGap


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_remaining_time** | **str** | Localized time string in the format: 1 hour 15 minutes | [optional] 
**end_time** | **str** | Localized time string in the format:(Locale CZ) 8:30 odp. | [optional] 
**end_time_ms** | **str** |  | [optional] 
**remaining_time** | **str** |  | [optional] 
**start_time** | **str** | Localized time string in the format:(Locale CZ) 8:30 odp. | [optional] 
**start_time_ms** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.enterprise_topaz_sidekick_gap import EnterpriseTopazSidekickGap

# TODO update the JSON string below
json = "{}"
# create an instance of EnterpriseTopazSidekickGap from a JSON string
enterprise_topaz_sidekick_gap_instance = EnterpriseTopazSidekickGap.from_json(json)
# print the JSON string representation of the object
print(EnterpriseTopazSidekickGap.to_json())

# convert the object into a dict
enterprise_topaz_sidekick_gap_dict = enterprise_topaz_sidekick_gap_instance.to_dict()
# create an instance of EnterpriseTopazSidekickGap from a dict
enterprise_topaz_sidekick_gap_from_dict = EnterpriseTopazSidekickGap.from_dict(enterprise_topaz_sidekick_gap_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


