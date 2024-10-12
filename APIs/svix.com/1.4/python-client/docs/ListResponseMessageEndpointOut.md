# ListResponseMessageEndpointOut


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[MessageEndpointOut]**](MessageEndpointOut.md) |  | 
**done** | **bool** |  | 
**iterator** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.list_response_message_endpoint_out import ListResponseMessageEndpointOut

# TODO update the JSON string below
json = "{}"
# create an instance of ListResponseMessageEndpointOut from a JSON string
list_response_message_endpoint_out_instance = ListResponseMessageEndpointOut.from_json(json)
# print the JSON string representation of the object
print(ListResponseMessageEndpointOut.to_json())

# convert the object into a dict
list_response_message_endpoint_out_dict = list_response_message_endpoint_out_instance.to_dict()
# create an instance of ListResponseMessageEndpointOut from a dict
list_response_message_endpoint_out_from_dict = ListResponseMessageEndpointOut.from_dict(list_response_message_endpoint_out_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


