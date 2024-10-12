# TruncateLogContext

Database Instance truncate log context.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | This is always &#x60;sql#truncateLogContext&#x60;. | [optional] 
**log_type** | **str** | The type of log to truncate. Valid values are &#x60;MYSQL_GENERAL_TABLE&#x60; and &#x60;MYSQL_SLOW_TABLE&#x60;. | [optional] 

## Example

```python
from openapi_client.models.truncate_log_context import TruncateLogContext

# TODO update the JSON string below
json = "{}"
# create an instance of TruncateLogContext from a JSON string
truncate_log_context_instance = TruncateLogContext.from_json(json)
# print the JSON string representation of the object
print(TruncateLogContext.to_json())

# convert the object into a dict
truncate_log_context_dict = truncate_log_context_instance.to_dict()
# create an instance of TruncateLogContext from a dict
truncate_log_context_from_dict = TruncateLogContext.from_dict(truncate_log_context_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


