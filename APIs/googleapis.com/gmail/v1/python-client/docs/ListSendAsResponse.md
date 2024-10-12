# ListSendAsResponse

Response for the ListSendAs method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**send_as** | [**List[SendAs]**](SendAs.md) | List of send-as aliases. | [optional] 

## Example

```python
from openapi_client.models.list_send_as_response import ListSendAsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListSendAsResponse from a JSON string
list_send_as_response_instance = ListSendAsResponse.from_json(json)
# print the JSON string representation of the object
print(ListSendAsResponse.to_json())

# convert the object into a dict
list_send_as_response_dict = list_send_as_response_instance.to_dict()
# create an instance of ListSendAsResponse from a dict
list_send_as_response_from_dict = ListSendAsResponse.from_dict(list_send_as_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


