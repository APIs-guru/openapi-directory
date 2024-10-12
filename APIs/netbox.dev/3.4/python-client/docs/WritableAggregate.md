# WritableAggregate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comments** | **str** |  | [optional] 
**created** | **datetime** |  | [optional] [readonly] 
**custom_fields** | **object** |  | [optional] 
**date_added** | **date** |  | [optional] 
**description** | **str** |  | [optional] 
**display** | **str** |  | [optional] [readonly] 
**family** | **str** |  | [optional] [readonly] 
**id** | **int** |  | [optional] [readonly] 
**last_updated** | **datetime** |  | [optional] [readonly] 
**prefix** | **str** |  | 
**rir** | **int** |  | 
**tags** | [**List[NestedTag]**](NestedTag.md) |  | [optional] 
**tenant** | **int** |  | [optional] 
**url** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.writable_aggregate import WritableAggregate

# TODO update the JSON string below
json = "{}"
# create an instance of WritableAggregate from a JSON string
writable_aggregate_instance = WritableAggregate.from_json(json)
# print the JSON string representation of the object
print(WritableAggregate.to_json())

# convert the object into a dict
writable_aggregate_dict = writable_aggregate_instance.to_dict()
# create an instance of WritableAggregate from a dict
writable_aggregate_from_dict = WritableAggregate.from_dict(writable_aggregate_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


