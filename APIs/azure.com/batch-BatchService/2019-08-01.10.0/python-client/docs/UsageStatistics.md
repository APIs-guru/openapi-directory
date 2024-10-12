# UsageStatistics


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dedicated_core_time** | **str** |  | 
**last_update_time** | **datetime** |  | 
**start_time** | **datetime** |  | 

## Example

```python
from openapi_client.models.usage_statistics import UsageStatistics

# TODO update the JSON string below
json = "{}"
# create an instance of UsageStatistics from a JSON string
usage_statistics_instance = UsageStatistics.from_json(json)
# print the JSON string representation of the object
print(UsageStatistics.to_json())

# convert the object into a dict
usage_statistics_dict = usage_statistics_instance.to_dict()
# create an instance of UsageStatistics from a dict
usage_statistics_from_dict = UsageStatistics.from_dict(usage_statistics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


