# AS2AcknowledgementConnectionSettings

The AS2 agreement acknowledgement connection settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ignore_certificate_name_mismatch** | **bool** | Indicates whether to ignore mismatch in certificate name. | 
**keep_http_connection_alive** | **bool** | Indicates whether to keep the connection alive. | 
**support_http_status_code_continue** | **bool** | Indicates whether to support HTTP status code &#39;CONTINUE&#39;. | 
**unfold_http_headers** | **bool** | Indicates whether to unfold the HTTP headers. | 

## Example

```python
from openapi_client.models.as2_acknowledgement_connection_settings import AS2AcknowledgementConnectionSettings

# TODO update the JSON string below
json = "{}"
# create an instance of AS2AcknowledgementConnectionSettings from a JSON string
as2_acknowledgement_connection_settings_instance = AS2AcknowledgementConnectionSettings.from_json(json)
# print the JSON string representation of the object
print(AS2AcknowledgementConnectionSettings.to_json())

# convert the object into a dict
as2_acknowledgement_connection_settings_dict = as2_acknowledgement_connection_settings_instance.to_dict()
# create an instance of AS2AcknowledgementConnectionSettings from a dict
as2_acknowledgement_connection_settings_from_dict = AS2AcknowledgementConnectionSettings.from_dict(as2_acknowledgement_connection_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


