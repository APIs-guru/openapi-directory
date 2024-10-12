# CustomEventsBatchInsertResponse

Insert Custom Events Response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**has_failures** | **bool** | Indicates that some or all custom events failed to insert. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#customEventsBatchInsertResponse\&quot;. | [optional] 
**status** | [**List[CustomEventStatus]**](CustomEventStatus.md) | The insert status of each custom event. Statuses are returned in the same order that conversions are inserted. | [optional] 

## Example

```python
from openapi_client.models.custom_events_batch_insert_response import CustomEventsBatchInsertResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CustomEventsBatchInsertResponse from a JSON string
custom_events_batch_insert_response_instance = CustomEventsBatchInsertResponse.from_json(json)
# print the JSON string representation of the object
print(CustomEventsBatchInsertResponse.to_json())

# convert the object into a dict
custom_events_batch_insert_response_dict = custom_events_batch_insert_response_instance.to_dict()
# create an instance of CustomEventsBatchInsertResponse from a dict
custom_events_batch_insert_response_from_dict = CustomEventsBatchInsertResponse.from_dict(custom_events_batch_insert_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


