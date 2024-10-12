# LogsFilter


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connector_id** | **str** |  | [optional] 
**exclude_unified_apis** | **str** |  | [optional] 
**status_code** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.logs_filter import LogsFilter

# TODO update the JSON string below
json = "{}"
# create an instance of LogsFilter from a JSON string
logs_filter_instance = LogsFilter.from_json(json)
# print the JSON string representation of the object
print(LogsFilter.to_json())

# convert the object into a dict
logs_filter_dict = logs_filter_instance.to_dict()
# create an instance of LogsFilter from a dict
logs_filter_from_dict = LogsFilter.from_dict(logs_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


