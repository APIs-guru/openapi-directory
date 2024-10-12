# QueryMessageFlagsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**duration** | **str** | Duration of the request in human-readable format | 
**flags** | [**List[MessageFlag]**](MessageFlag.md) |  | 

## Example

```python
from openapi_client.models.query_message_flags_response import QueryMessageFlagsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of QueryMessageFlagsResponse from a JSON string
query_message_flags_response_instance = QueryMessageFlagsResponse.from_json(json)
# print the JSON string representation of the object
print(QueryMessageFlagsResponse.to_json())

# convert the object into a dict
query_message_flags_response_dict = query_message_flags_response_instance.to_dict()
# create an instance of QueryMessageFlagsResponse from a dict
query_message_flags_response_from_dict = QueryMessageFlagsResponse.from_dict(query_message_flags_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


