# StampCapacityCollection

Collection of stamp capacities.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to next page of resources. | [optional] [readonly] 
**value** | [**List[StampCapacityCollectionValueInner]**](StampCapacityCollectionValueInner.md) | Collection of resources. | 

## Example

```python
from openapi_client.models.stamp_capacity_collection import StampCapacityCollection

# TODO update the JSON string below
json = "{}"
# create an instance of StampCapacityCollection from a JSON string
stamp_capacity_collection_instance = StampCapacityCollection.from_json(json)
# print the JSON string representation of the object
print(StampCapacityCollection.to_json())

# convert the object into a dict
stamp_capacity_collection_dict = stamp_capacity_collection_instance.to_dict()
# create an instance of StampCapacityCollection from a dict
stamp_capacity_collection_from_dict = StampCapacityCollection.from_dict(stamp_capacity_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


