# AS2MessageConnectionSettings


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ignore_certificate_name_mismatch** | **bool** | The value indicating whether to ignore mismatch in certificate name. | [optional] 
**keep_http_connection_alive** | **bool** | The value indicating whether to keep the connection alive. | [optional] 
**support_http_status_code_continue** | **bool** | The value indicating whether to support HTTP status code &#39;CONTINUE&#39;. | [optional] 
**unfold_http_headers** | **bool** | The value indicating whether to unfold the HTTP headers. | [optional] 

## Example

```python
from openapi_client.models.as2_message_connection_settings import AS2MessageConnectionSettings

# TODO update the JSON string below
json = "{}"
# create an instance of AS2MessageConnectionSettings from a JSON string
as2_message_connection_settings_instance = AS2MessageConnectionSettings.from_json(json)
# print the JSON string representation of the object
print(AS2MessageConnectionSettings.to_json())

# convert the object into a dict
as2_message_connection_settings_dict = as2_message_connection_settings_instance.to_dict()
# create an instance of AS2MessageConnectionSettings from a dict
as2_message_connection_settings_from_dict = AS2MessageConnectionSettings.from_dict(as2_message_connection_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


