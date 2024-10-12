# AS2EnvelopeSettings


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**autogenerate_file_name** | **bool** | The value indicating whether to auto generate file name. | [optional] 
**suspend_message_on_file_name_generation_error** | **bool** | The value indicating whether to suspend message on file name generation error. | [optional] 
**file_name_template** | **str** | The template for file name. | [optional] 
**message_content_type** | **str** | The message content type. | [optional] 
**transmit_file_name_in_mime_header** | **bool** | The value indicating whether to transmit file name in mime header. | [optional] 

## Example

```python
from openapi_client.models.as2_envelope_settings import AS2EnvelopeSettings

# TODO update the JSON string below
json = "{}"
# create an instance of AS2EnvelopeSettings from a JSON string
as2_envelope_settings_instance = AS2EnvelopeSettings.from_json(json)
# print the JSON string representation of the object
print(AS2EnvelopeSettings.to_json())

# convert the object into a dict
as2_envelope_settings_dict = as2_envelope_settings_instance.to_dict()
# create an instance of AS2EnvelopeSettings from a dict
as2_envelope_settings_from_dict = AS2EnvelopeSettings.from_dict(as2_envelope_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


