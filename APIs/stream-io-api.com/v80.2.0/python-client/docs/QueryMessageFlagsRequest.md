# QueryMessageFlagsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filter_conditions** | **Dict[str, object]** |  | [optional] 
**limit** | **int** |  | [optional] 
**offset** | **int** |  | [optional] 
**user** | [**UserObject**](UserObject.md) |  | [optional] 
**user_id** | **str** | **Server-side only**. User ID which server acts upon | [optional] 

## Example

```python
from openapi_client.models.query_message_flags_request import QueryMessageFlagsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of QueryMessageFlagsRequest from a JSON string
query_message_flags_request_instance = QueryMessageFlagsRequest.from_json(json)
# print the JSON string representation of the object
print(QueryMessageFlagsRequest.to_json())

# convert the object into a dict
query_message_flags_request_dict = query_message_flags_request_instance.to_dict()
# create an instance of QueryMessageFlagsRequest from a dict
query_message_flags_request_from_dict = QueryMessageFlagsRequest.from_dict(query_message_flags_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


