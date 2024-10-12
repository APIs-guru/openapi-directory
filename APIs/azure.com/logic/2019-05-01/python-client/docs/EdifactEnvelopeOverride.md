# EdifactEnvelopeOverride

The Edifact envelope override settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_password** | **str** | The application password. | [optional] 
**association_assigned_code** | **str** | The association assigned code. | [optional] 
**controlling_agency_code** | **str** | The controlling agency code. | [optional] 
**functional_group_id** | **str** | The functional group id. | [optional] 
**group_header_message_release** | **str** | The group header message release. | [optional] 
**group_header_message_version** | **str** | The group header message version. | [optional] 
**message_association_assigned_code** | **str** | The message association assigned code. | [optional] 
**message_id** | **str** | The message id on which this envelope settings has to be applied. | [optional] 
**message_release** | **str** | The message release version on which this envelope settings has to be applied. | [optional] 
**message_version** | **str** | The message version on which this envelope settings has to be applied. | [optional] 
**receiver_application_id** | **str** | The receiver application id. | [optional] 
**receiver_application_qualifier** | **str** | The receiver application qualifier. | [optional] 
**sender_application_id** | **str** | The sender application id. | [optional] 
**sender_application_qualifier** | **str** | The sender application qualifier. | [optional] 
**target_namespace** | **str** | The target namespace on which this envelope settings has to be applied. | [optional] 

## Example

```python
from openapi_client.models.edifact_envelope_override import EdifactEnvelopeOverride

# TODO update the JSON string below
json = "{}"
# create an instance of EdifactEnvelopeOverride from a JSON string
edifact_envelope_override_instance = EdifactEnvelopeOverride.from_json(json)
# print the JSON string representation of the object
print(EdifactEnvelopeOverride.to_json())

# convert the object into a dict
edifact_envelope_override_dict = edifact_envelope_override_instance.to_dict()
# create an instance of EdifactEnvelopeOverride from a dict
edifact_envelope_override_from_dict = EdifactEnvelopeOverride.from_dict(edifact_envelope_override_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


