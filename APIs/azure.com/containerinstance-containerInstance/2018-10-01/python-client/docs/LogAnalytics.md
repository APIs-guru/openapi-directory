# LogAnalytics

Container group log analytics information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**log_type** | **str** | The log type to be used. | [optional] 
**metadata** | **Dict[str, str]** | Metadata for log analytics. | [optional] 
**workspace_id** | **str** | The workspace id for log analytics | 
**workspace_key** | **str** | The workspace key for log analytics | 

## Example

```python
from openapi_client.models.log_analytics import LogAnalytics

# TODO update the JSON string below
json = "{}"
# create an instance of LogAnalytics from a JSON string
log_analytics_instance = LogAnalytics.from_json(json)
# print the JSON string representation of the object
print(LogAnalytics.to_json())

# convert the object into a dict
log_analytics_dict = log_analytics_instance.to_dict()
# create an instance of LogAnalytics from a dict
log_analytics_from_dict = LogAnalytics.from_dict(log_analytics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


