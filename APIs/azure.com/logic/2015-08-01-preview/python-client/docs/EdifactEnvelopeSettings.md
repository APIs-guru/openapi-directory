# EdifactEnvelopeSettings


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_reference_id** | **str** | The application reference id. | [optional] 
**apply_delimiter_string_advice** | **bool** | The value indicating whether to apply delimiter string advice. | [optional] 
**communication_agreement_id** | **str** | The communication agreement id. | [optional] 
**create_grouping_segments** | **bool** | The value indicating whether to create grouping segments. | [optional] 
**enable_default_group_headers** | **bool** | The value indicating whether to enable default group headers. | [optional] 
**functional_group_id** | **str** | The functional group id. | [optional] 
**group_application_password** | **str** | The group application password. | [optional] 
**group_application_receiver_id** | **str** | The group application receiver id. | [optional] 
**group_application_receiver_qualifier** | **str** | The group application receiver qualifier. | [optional] 
**group_application_sender_id** | **str** | The group application sender id. | [optional] 
**group_application_sender_qualifier** | **str** | The group application sender qualifier. | [optional] 
**group_association_assigned_code** | **str** | The group association assigned code. | [optional] 
**group_control_number_lower_bound** | **int** | The group control number lower bound. | [optional] 
**group_control_number_prefix** | **str** | The group control number prefix. | [optional] 
**group_control_number_suffix** | **str** | The group control number suffix. | [optional] 
**group_control_number_upper_bound** | **int** | The group control number upper bound. | [optional] 
**group_controlling_agency_code** | **str** | The group controlling agency code. | [optional] 
**group_message_release** | **str** | The group message release. | [optional] 
**group_message_version** | **str** | The group message version. | [optional] 
**interchange_control_number_lower_bound** | **int** | The interchange control number lower bound. | [optional] 
**interchange_control_number_prefix** | **str** | The interchange control number prefix. | [optional] 
**interchange_control_number_suffix** | **str** | The interchange control number suffix. | [optional] 
**interchange_control_number_upper_bound** | **int** | The interchange control number upper bound. | [optional] 
**is_test_interchange** | **bool** | The value indicating whether the message is a test interchange. | [optional] 
**overwrite_existing_transaction_set_control_number** | **bool** | The value indicating whether to overwrite existing transaction set control number. | [optional] 
**processing_priority_code** | **str** | The processing priority code. | [optional] 
**receiver_internal_identification** | **str** | The receiver internal identification. | [optional] 
**receiver_internal_sub_identification** | **str** | The receiver internal sub identification. | [optional] 
**receiver_reverse_routing_address** | **str** | The receiver reverse routing address. | [optional] 
**recipient_reference_password_qualifier** | **str** | The recipient reference password qualifier. | [optional] 
**recipient_reference_password_value** | **str** | The recipient reference password value. | [optional] 
**rollover_group_control_number** | **bool** | The value indicating whether to rollover group control number. | [optional] 
**rollover_interchange_control_number** | **bool** | The value indicating whether to rollover interchange control number. | [optional] 
**rollover_transaction_set_control_number** | **bool** | The value indicating whether to rollover transaction set control number. | [optional] 
**sender_internal_identification** | **str** | The sender internal identification. | [optional] 
**sender_internal_sub_identification** | **str** | The sender internal sub identification. | [optional] 
**sender_reverse_routing_address** | **str** | The sender reverse routing address. | [optional] 
**transaction_set_control_number_lower_bound** | **int** | The transaction set control number lower bound. | [optional] 
**transaction_set_control_number_prefix** | **str** | The transaction set control number prefix. | [optional] 
**transaction_set_control_number_suffix** | **str** | The transaction set control number suffix. | [optional] 
**transaction_set_control_number_upper_bound** | **int** | The transaction set control number upper bound. | [optional] 

## Example

```python
from openapi_client.models.edifact_envelope_settings import EdifactEnvelopeSettings

# TODO update the JSON string below
json = "{}"
# create an instance of EdifactEnvelopeSettings from a JSON string
edifact_envelope_settings_instance = EdifactEnvelopeSettings.from_json(json)
# print the JSON string representation of the object
print(EdifactEnvelopeSettings.to_json())

# convert the object into a dict
edifact_envelope_settings_dict = edifact_envelope_settings_instance.to_dict()
# create an instance of EdifactEnvelopeSettings from a dict
edifact_envelope_settings_from_dict = EdifactEnvelopeSettings.from_dict(edifact_envelope_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


