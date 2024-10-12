# MarkReadRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message_id** | **str** | ID of the message that is considered last read by client | [optional] 
**user** | [**UserObjectRequest**](UserObjectRequest.md) |  | [optional] 
**user_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.mark_read_request import MarkReadRequest

# TODO update the JSON string below
json = "{}"
# create an instance of MarkReadRequest from a JSON string
mark_read_request_instance = MarkReadRequest.from_json(json)
# print the JSON string representation of the object
print(MarkReadRequest.to_json())

# convert the object into a dict
mark_read_request_dict = mark_read_request_instance.to_dict()
# create an instance of MarkReadRequest from a dict
mark_read_request_from_dict = MarkReadRequest.from_dict(mark_read_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


