# CustomEventsBatchInsertRequest

Insert Custom Events Request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_events** | [**List[CustomEvent]**](CustomEvent.md) | The set of custom events to insert. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#customEventsBatchInsertRequest\&quot;. | [optional] 

## Example

```python
from openapi_client.models.custom_events_batch_insert_request import CustomEventsBatchInsertRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CustomEventsBatchInsertRequest from a JSON string
custom_events_batch_insert_request_instance = CustomEventsBatchInsertRequest.from_json(json)
# print the JSON string representation of the object
print(CustomEventsBatchInsertRequest.to_json())

# convert the object into a dict
custom_events_batch_insert_request_dict = custom_events_batch_insert_request_instance.to_dict()
# create an instance of CustomEventsBatchInsertRequest from a dict
custom_events_batch_insert_request_from_dict = CustomEventsBatchInsertRequest.from_dict(custom_events_batch_insert_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


