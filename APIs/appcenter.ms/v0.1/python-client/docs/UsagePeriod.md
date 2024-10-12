# UsagePeriod

Usage for a single period

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**by_account** | **Dict[str, float]** | A collection of named numeric values | [optional] 
**by_app** | **Dict[str, Dict[str, float]]** | A collection of  named numeric values grouped by app | [optional] 
**end_time** | **str** | Exclusive end time of the usage period. | [optional] 
**start_time** | **str** | Inclusive start time of the usage period | [optional] 

## Example

```python
from openapi_client.models.usage_period import UsagePeriod

# TODO update the JSON string below
json = "{}"
# create an instance of UsagePeriod from a JSON string
usage_period_instance = UsagePeriod.from_json(json)
# print the JSON string representation of the object
print(UsagePeriod.to_json())

# convert the object into a dict
usage_period_dict = usage_period_instance.to_dict()
# create an instance of UsagePeriod from a dict
usage_period_from_dict = UsagePeriod.from_dict(usage_period_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


