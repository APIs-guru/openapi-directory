# X12EnvelopeSettings


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**control_standards_id** | **int** | The controls standards id. | [optional] 
**control_version_number** | **str** | The control version number. | [optional] 
**enable_default_group_headers** | **bool** | The value indicating whether to enable default group headers. | [optional] 
**functional_group_id** | **str** | The functional group id. | [optional] 
**group_control_number_lower_bound** | **int** | The group control number lower bound. | [optional] 
**group_control_number_upper_bound** | **int** | The group control number upper bound. | [optional] 
**group_header_agency_code** | **str** | The group header agency code. | [optional] 
**group_header_date_format** | [**X12DateFormat**](X12DateFormat.md) |  | [optional] 
**group_header_time_format** | [**X12TimeFormat**](X12TimeFormat.md) |  | [optional] 
**group_header_version** | **str** | The group header version. | [optional] 
**interchange_control_number_lower_bound** | **int** | The interchange  control number lower bound. | [optional] 
**interchange_control_number_upper_bound** | **int** | The interchange  control number upper bound. | [optional] 
**overwrite_existing_transaction_set_control_number** | **bool** | The value indicating whether to overwrite existing transaction set control number. | [optional] 
**receiver_application_id** | **str** | The receiver application id. | [optional] 
**rollover_group_control_number** | **bool** | The value indicating whether to rollover group control number. | [optional] 
**rollover_interchange_control_number** | **bool** | The value indicating whether to rollover interchange control number. | [optional] 
**rollover_transaction_set_control_number** | **bool** | The value indicating whether to rollover transaction set control number. | [optional] 
**sender_application_id** | **str** | The sender application id. | [optional] 
**transaction_set_control_number_lower_bound** | **int** | The transaction set control number lower bound. | [optional] 
**transaction_set_control_number_prefix** | **str** | The transaction set control number prefix. | [optional] 
**transaction_set_control_number_suffix** | **str** | The transaction set control number suffix. | [optional] 
**transaction_set_control_number_upper_bound** | **int** | The transaction set control number upper bound. | [optional] 
**usage_indicator** | [**UsageIndicator**](UsageIndicator.md) |  | [optional] 
**use_control_standards_id_as_repetition_character** | **bool** | The value indicating whether to use control standards id as repetition character. | [optional] 

## Example

```python
from openapi_client.models.x12_envelope_settings import X12EnvelopeSettings

# TODO update the JSON string below
json = "{}"
# create an instance of X12EnvelopeSettings from a JSON string
x12_envelope_settings_instance = X12EnvelopeSettings.from_json(json)
# print the JSON string representation of the object
print(X12EnvelopeSettings.to_json())

# convert the object into a dict
x12_envelope_settings_dict = x12_envelope_settings_instance.to_dict()
# create an instance of X12EnvelopeSettings from a dict
x12_envelope_settings_from_dict = X12EnvelopeSettings.from_dict(x12_envelope_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


