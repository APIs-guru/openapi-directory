# Aggregate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comments** | **str** |  | [optional] 
**created** | **datetime** |  | [optional] [readonly] 
**custom_fields** | **object** |  | [optional] 
**date_added** | **date** |  | [optional] 
**description** | **str** |  | [optional] 
**display** | **str** |  | [optional] [readonly] 
**family** | [**Family**](Family.md) |  | [optional] 
**id** | **int** |  | [optional] [readonly] 
**last_updated** | **datetime** |  | [optional] [readonly] 
**prefix** | **str** |  | 
**rir** | [**NestedRIR**](NestedRIR.md) |  | 
**tags** | [**List[NestedTag]**](NestedTag.md) |  | [optional] 
**tenant** | [**NestedTenant**](NestedTenant.md) |  | [optional] 
**url** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.aggregate import Aggregate

# TODO update the JSON string below
json = "{}"
# create an instance of Aggregate from a JSON string
aggregate_instance = Aggregate.from_json(json)
# print the JSON string representation of the object
print(Aggregate.to_json())

# convert the object into a dict
aggregate_dict = aggregate_instance.to_dict()
# create an instance of Aggregate from a dict
aggregate_from_dict = Aggregate.from_dict(aggregate_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


