# EndpointMessageOut


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channels** | **List[str]** | List of free-form identifiers that endpoints can filter by | [optional] 
**event_id** | **str** | Optional unique identifier for the message | [optional] 
**event_type** | **str** |  | 
**id** | **str** |  | 
**next_attempt** | **datetime** |  | [optional] 
**payload** | **object** |  | 
**status** | [**MessageStatus**](MessageStatus.md) |  | 
**timestamp** | **datetime** |  | 

## Example

```python
from openapi_client.models.endpoint_message_out import EndpointMessageOut

# TODO update the JSON string below
json = "{}"
# create an instance of EndpointMessageOut from a JSON string
endpoint_message_out_instance = EndpointMessageOut.from_json(json)
# print the JSON string representation of the object
print(EndpointMessageOut.to_json())

# convert the object into a dict
endpoint_message_out_dict = endpoint_message_out_instance.to_dict()
# create an instance of EndpointMessageOut from a dict
endpoint_message_out_from_dict = EndpointMessageOut.from_dict(endpoint_message_out_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


