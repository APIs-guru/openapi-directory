# StatefulPartial

A stateful object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**state** | **str** |  | [optional] 
**status** | [**List[Status]**](Status.md) |  | [optional] 

## Example

```python
from openapi_client.models.stateful_partial import StatefulPartial

# TODO update the JSON string below
json = "{}"
# create an instance of StatefulPartial from a JSON string
stateful_partial_instance = StatefulPartial.from_json(json)
# print the JSON string representation of the object
print(StatefulPartial.to_json())

# convert the object into a dict
stateful_partial_dict = stateful_partial_instance.to_dict()
# create an instance of StatefulPartial from a dict
stateful_partial_from_dict = StatefulPartial.from_dict(stateful_partial_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


