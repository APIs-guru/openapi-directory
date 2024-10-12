# ValidationFailedChaosEvent

Chaos event corresponding to a failure during validation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reason** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.validation_failed_chaos_event import ValidationFailedChaosEvent

# TODO update the JSON string below
json = "{}"
# create an instance of ValidationFailedChaosEvent from a JSON string
validation_failed_chaos_event_instance = ValidationFailedChaosEvent.from_json(json)
# print the JSON string representation of the object
print(ValidationFailedChaosEvent.to_json())

# convert the object into a dict
validation_failed_chaos_event_dict = validation_failed_chaos_event_instance.to_dict()
# create an instance of ValidationFailedChaosEvent from a dict
validation_failed_chaos_event_from_dict = ValidationFailedChaosEvent.from_dict(validation_failed_chaos_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


