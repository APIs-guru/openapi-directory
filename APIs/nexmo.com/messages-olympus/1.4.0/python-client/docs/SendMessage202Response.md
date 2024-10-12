# SendMessage202Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message_uuid** | **str** | The UUID of the message | [optional] 

## Example

```python
from openapi_client.models.send_message202_response import SendMessage202Response

# TODO update the JSON string below
json = "{}"
# create an instance of SendMessage202Response from a JSON string
send_message202_response_instance = SendMessage202Response.from_json(json)
# print the JSON string representation of the object
print(SendMessage202Response.to_json())

# convert the object into a dict
send_message202_response_dict = send_message202_response_instance.to_dict()
# create an instance of SendMessage202Response from a dict
send_message202_response_from_dict = SendMessage202Response.from_dict(send_message202_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


