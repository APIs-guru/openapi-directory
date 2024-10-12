# AnyEvent


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** |  | 
**type** | **str** |  | [default to 'custom']

## Example

```python
from openapi_client.models.any_event import AnyEvent

# TODO update the JSON string below
json = "{}"
# create an instance of AnyEvent from a JSON string
any_event_instance = AnyEvent.from_json(json)
# print the JSON string representation of the object
print(AnyEvent.to_json())

# convert the object into a dict
any_event_dict = any_event_instance.to_dict()
# create an instance of AnyEvent from a dict
any_event_from_dict = AnyEvent.from_dict(any_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


