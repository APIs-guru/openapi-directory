# AggregateLogRead



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fixed** | **bool** |  | [optional] 
**id** | **object** |  | [optional] 
**last_occurrence_at** | **datetime** |  | [optional] 
**rule_id** | **str** |  | [optional] 
**source** | **object** |  | [optional] 
**status_code** | **int** |  | [optional] 
**target** | **object** |  | [optional] 
**view_count** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.aggregate_log_read import AggregateLogRead

# TODO update the JSON string below
json = "{}"
# create an instance of AggregateLogRead from a JSON string
aggregate_log_read_instance = AggregateLogRead.from_json(json)
# print the JSON string representation of the object
print(AggregateLogRead.to_json())

# convert the object into a dict
aggregate_log_read_dict = aggregate_log_read_instance.to_dict()
# create an instance of AggregateLogRead from a dict
aggregate_log_read_from_dict = AggregateLogRead.from_dict(aggregate_log_read_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


