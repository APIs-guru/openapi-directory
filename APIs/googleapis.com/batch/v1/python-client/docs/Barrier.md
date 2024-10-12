# Barrier

Barrier runnable blocks until all tasks in a taskgroup reach it.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Barriers are identified by their index in runnable list. Names are not required, but if present should be an identifier. | [optional] 

## Example

```python
from openapi_client.models.barrier import Barrier

# TODO update the JSON string below
json = "{}"
# create an instance of Barrier from a JSON string
barrier_instance = Barrier.from_json(json)
# print the JSON string representation of the object
print(Barrier.to_json())

# convert the object into a dict
barrier_dict = barrier_instance.to_dict()
# create an instance of Barrier from a dict
barrier_from_dict = Barrier.from_dict(barrier_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


