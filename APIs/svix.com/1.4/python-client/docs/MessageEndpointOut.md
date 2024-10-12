# MessageEndpointOut


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channels** | **List[str]** | List of message channels this endpoint listens to (omit for all) | [optional] 
**created_at** | **datetime** |  | 
**description** | **str** |  | [optional] [default to '']
**disabled** | **bool** |  | [optional] [default to False]
**filter_types** | **List[str]** |  | [optional] 
**id** | **str** |  | 
**metadata** | **Dict[str, str]** |  | [optional] 
**next_attempt** | **datetime** |  | [optional] 
**rate_limit** | **int** |  | [optional] 
**status** | [**MessageStatus**](MessageStatus.md) |  | 
**uid** | **str** | Optional unique identifier for the endpoint | [optional] 
**url** | **str** |  | 
**version** | **int** |  | 

## Example

```python
from openapi_client.models.message_endpoint_out import MessageEndpointOut

# TODO update the JSON string below
json = "{}"
# create an instance of MessageEndpointOut from a JSON string
message_endpoint_out_instance = MessageEndpointOut.from_json(json)
# print the JSON string representation of the object
print(MessageEndpointOut.to_json())

# convert the object into a dict
message_endpoint_out_dict = message_endpoint_out_instance.to_dict()
# create an instance of MessageEndpointOut from a dict
message_endpoint_out_from_dict = MessageEndpointOut.from_dict(message_endpoint_out_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


