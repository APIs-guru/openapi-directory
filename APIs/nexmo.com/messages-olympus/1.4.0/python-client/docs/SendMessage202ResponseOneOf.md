# SendMessage202ResponseOneOf

SMS

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message_uuid** | **str** | The UUID of the message | [optional] 

## Example

```python
from openapi_client.models.send_message202_response_one_of import SendMessage202ResponseOneOf

# TODO update the JSON string below
json = "{}"
# create an instance of SendMessage202ResponseOneOf from a JSON string
send_message202_response_one_of_instance = SendMessage202ResponseOneOf.from_json(json)
# print the JSON string representation of the object
print(SendMessage202ResponseOneOf.to_json())

# convert the object into a dict
send_message202_response_one_of_dict = send_message202_response_one_of_instance.to_dict()
# create an instance of SendMessage202ResponseOneOf from a dict
send_message202_response_one_of_from_dict = SendMessage202ResponseOneOf.from_dict(send_message202_response_one_of_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


