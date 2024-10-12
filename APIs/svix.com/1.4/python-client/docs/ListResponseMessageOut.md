# ListResponseMessageOut


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[MessageOut]**](MessageOut.md) |  | 
**done** | **bool** |  | 
**iterator** | **str** |  | [optional] 
**prev_iterator** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.list_response_message_out import ListResponseMessageOut

# TODO update the JSON string below
json = "{}"
# create an instance of ListResponseMessageOut from a JSON string
list_response_message_out_instance = ListResponseMessageOut.from_json(json)
# print the JSON string representation of the object
print(ListResponseMessageOut.to_json())

# convert the object into a dict
list_response_message_out_dict = list_response_message_out_instance.to_dict()
# create an instance of ListResponseMessageOut from a dict
list_response_message_out_from_dict = ListResponseMessageOut.from_dict(list_response_message_out_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


