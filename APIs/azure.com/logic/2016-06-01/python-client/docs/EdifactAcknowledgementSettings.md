# EdifactAcknowledgementSettings

The Edifact agreement acknowledgement settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**acknowledgement_control_number_lower_bound** | **int** | The acknowledgement control number lower bound. | 
**acknowledgement_control_number_prefix** | **str** | The acknowledgement control number prefix. | [optional] 
**acknowledgement_control_number_suffix** | **str** | The acknowledgement control number suffix. | [optional] 
**acknowledgement_control_number_upper_bound** | **int** | The acknowledgement control number upper bound. | 
**batch_functional_acknowledgements** | **bool** | The value indicating whether to batch functional acknowledgements. | 
**batch_technical_acknowledgements** | **bool** | The value indicating whether to batch the technical acknowledgements. | 
**need_functional_acknowledgement** | **bool** | The value indicating whether functional acknowledgement is needed. | 
**need_loop_for_valid_messages** | **bool** | The value indicating whether a loop is needed for valid messages. | 
**need_technical_acknowledgement** | **bool** | The value indicating whether technical acknowledgement is needed. | 
**rollover_acknowledgement_control_number** | **bool** | The value indicating whether to rollover acknowledgement control number. | 
**send_synchronous_acknowledgement** | **bool** | The value indicating whether to send synchronous acknowledgement. | 

## Example

```python
from openapi_client.models.edifact_acknowledgement_settings import EdifactAcknowledgementSettings

# TODO update the JSON string below
json = "{}"
# create an instance of EdifactAcknowledgementSettings from a JSON string
edifact_acknowledgement_settings_instance = EdifactAcknowledgementSettings.from_json(json)
# print the JSON string representation of the object
print(EdifactAcknowledgementSettings.to_json())

# convert the object into a dict
edifact_acknowledgement_settings_dict = edifact_acknowledgement_settings_instance.to_dict()
# create an instance of EdifactAcknowledgementSettings from a dict
edifact_acknowledgement_settings_from_dict = EdifactAcknowledgementSettings.from_dict(edifact_acknowledgement_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


