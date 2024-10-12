# TimeBasedRetention

A time based retention policy specifies that all backups within a certain time period should be retained.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**retention_period** | **str** | The retention period. | [optional] 

## Example

```python
from openapi_client.models.time_based_retention import TimeBasedRetention

# TODO update the JSON string below
json = "{}"
# create an instance of TimeBasedRetention from a JSON string
time_based_retention_instance = TimeBasedRetention.from_json(json)
# print the JSON string representation of the object
print(TimeBasedRetention.to_json())

# convert the object into a dict
time_based_retention_dict = time_based_retention_instance.to_dict()
# create an instance of TimeBasedRetention from a dict
time_based_retention_from_dict = TimeBasedRetention.from_dict(time_based_retention_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


