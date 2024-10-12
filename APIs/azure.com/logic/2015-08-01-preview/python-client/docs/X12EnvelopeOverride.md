# X12EnvelopeOverride


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**date_format** | [**X12DateFormat**](X12DateFormat.md) |  | [optional] 
**functional_identifier_code** | **str** | The functional identifier code. | [optional] 
**header_version** | **str** | The header version. | [optional] 
**message_id** | **str** | The message id on which this envelope settings has to be applied. | [optional] 
**protocol_version** | **str** | The protocol version on which this envelope settings has to be applied. | [optional] 
**receiver_application_id** | **str** | The receiver application id. | [optional] 
**responsible_agency_code** | **int** | The responsible agency code. | [optional] 
**sender_application_id** | **str** | The sender application id. | [optional] 
**target_namespace** | **str** | The target namespace on which this envelope settings has to be applied. | [optional] 
**time_format** | [**X12TimeFormat**](X12TimeFormat.md) |  | [optional] 

## Example

```python
from openapi_client.models.x12_envelope_override import X12EnvelopeOverride

# TODO update the JSON string below
json = "{}"
# create an instance of X12EnvelopeOverride from a JSON string
x12_envelope_override_instance = X12EnvelopeOverride.from_json(json)
# print the JSON string representation of the object
print(X12EnvelopeOverride.to_json())

# convert the object into a dict
x12_envelope_override_dict = x12_envelope_override_instance.to_dict()
# create an instance of X12EnvelopeOverride from a dict
x12_envelope_override_from_dict = X12EnvelopeOverride.from_dict(x12_envelope_override_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


