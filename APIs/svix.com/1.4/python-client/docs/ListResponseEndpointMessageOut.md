# ListResponseEndpointMessageOut


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[EndpointMessageOut]**](EndpointMessageOut.md) |  | 
**done** | **bool** |  | 
**iterator** | **str** |  | [optional] 
**prev_iterator** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.list_response_endpoint_message_out import ListResponseEndpointMessageOut

# TODO update the JSON string below
json = "{}"
# create an instance of ListResponseEndpointMessageOut from a JSON string
list_response_endpoint_message_out_instance = ListResponseEndpointMessageOut.from_json(json)
# print the JSON string representation of the object
print(ListResponseEndpointMessageOut.to_json())

# convert the object into a dict
list_response_endpoint_message_out_dict = list_response_endpoint_message_out_instance.to_dict()
# create an instance of ListResponseEndpointMessageOut from a dict
list_response_endpoint_message_out_from_dict = ListResponseEndpointMessageOut.from_dict(list_response_endpoint_message_out_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


