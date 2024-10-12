# IntervalCollection


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**base_currency** | **str** |  | [optional] 
**intervals** | [**List[Interval]**](Interval.md) |  | [optional] 
**name** | **str** |  | [optional] 
**symbol** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.interval_collection import IntervalCollection

# TODO update the JSON string below
json = "{}"
# create an instance of IntervalCollection from a JSON string
interval_collection_instance = IntervalCollection.from_json(json)
# print the JSON string representation of the object
print(IntervalCollection.to_json())

# convert the object into a dict
interval_collection_dict = interval_collection_instance.to_dict()
# create an instance of IntervalCollection from a dict
interval_collection_from_dict = IntervalCollection.from_dict(interval_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


