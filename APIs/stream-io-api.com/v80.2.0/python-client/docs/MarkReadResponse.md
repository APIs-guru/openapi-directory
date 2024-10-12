# MarkReadResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**duration** | **str** |  | 
**event** | [**MessageReadEvent**](MessageReadEvent.md) |  | [optional] 

## Example

```python
from openapi_client.models.mark_read_response import MarkReadResponse

# TODO update the JSON string below
json = "{}"
# create an instance of MarkReadResponse from a JSON string
mark_read_response_instance = MarkReadResponse.from_json(json)
# print the JSON string representation of the object
print(MarkReadResponse.to_json())

# convert the object into a dict
mark_read_response_dict = mark_read_response_instance.to_dict()
# create an instance of MarkReadResponse from a dict
mark_read_response_from_dict = MarkReadResponse.from_dict(mark_read_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


