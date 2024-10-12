# UpdateMessagePartialRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**set** | **Dict[str, object]** | Sets new field values | 
**skip_enrich_url** | **bool** | Do not try to enrich the links within message | [optional] 
**unset** | **List[str]** | Array of field names to unset | 
**user** | [**UserObjectRequest**](UserObjectRequest.md) |  | [optional] 
**user_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.update_message_partial_request import UpdateMessagePartialRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateMessagePartialRequest from a JSON string
update_message_partial_request_instance = UpdateMessagePartialRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateMessagePartialRequest.to_json())

# convert the object into a dict
update_message_partial_request_dict = update_message_partial_request_instance.to_dict()
# create an instance of UpdateMessagePartialRequest from a dict
update_message_partial_request_from_dict = UpdateMessagePartialRequest.from_dict(update_message_partial_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


