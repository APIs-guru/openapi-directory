# LogAnalyticsOutput

LogAnalytics output properties

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**output** | **str** | Output file Uri path to blob container. | [optional] [readonly] 

## Example

```python
from openapi_client.models.log_analytics_output import LogAnalyticsOutput

# TODO update the JSON string below
json = "{}"
# create an instance of LogAnalyticsOutput from a JSON string
log_analytics_output_instance = LogAnalyticsOutput.from_json(json)
# print the JSON string representation of the object
print(LogAnalyticsOutput.to_json())

# convert the object into a dict
log_analytics_output_dict = log_analytics_output_instance.to_dict()
# create an instance of LogAnalyticsOutput from a dict
log_analytics_output_from_dict = LogAnalyticsOutput.from_dict(log_analytics_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


