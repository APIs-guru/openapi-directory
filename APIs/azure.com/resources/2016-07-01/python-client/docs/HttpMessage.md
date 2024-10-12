# HttpMessage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content** | **object** | HTTP message content. | [optional] 

## Example

```python
from openapi_client.models.http_message import HttpMessage

# TODO update the JSON string below
json = "{}"
# create an instance of HttpMessage from a JSON string
http_message_instance = HttpMessage.from_json(json)
# print the JSON string representation of the object
print(HttpMessage.to_json())

# convert the object into a dict
http_message_dict = http_message_instance.to_dict()
# create an instance of HttpMessage from a dict
http_message_from_dict = HttpMessage.from_dict(http_message_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


