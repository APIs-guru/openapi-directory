# CustomEventStatus

The original custom event that was inserted and whether there were any errors.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_event** | [**CustomEvent**](CustomEvent.md) |  | [optional] 
**errors** | [**List[CustomEventError]**](CustomEventError.md) | A list of errors related to this custom event. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#customEventStatus\&quot;. | [optional] 

## Example

```python
from openapi_client.models.custom_event_status import CustomEventStatus

# TODO update the JSON string below
json = "{}"
# create an instance of CustomEventStatus from a JSON string
custom_event_status_instance = CustomEventStatus.from_json(json)
# print the JSON string representation of the object
print(CustomEventStatus.to_json())

# convert the object into a dict
custom_event_status_dict = custom_event_status_instance.to_dict()
# create an instance of CustomEventStatus from a dict
custom_event_status_from_dict = CustomEventStatus.from_dict(custom_event_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


