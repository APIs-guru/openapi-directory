# EntityProfileCheckResultMessage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**check_class** | **str** | The class of checks to which this check type belongs. One of: - kyc - aml - fraud - none  | [optional] 
**check_type** | **str** | A single check type that this result message applies to. | [optional] 
**code** | **str** | Alphanumeric code that is unique for each failure message to simplify result processing and display. Values to be decided.  | [optional] 
**message** | **str** | Short description of why not passed | [optional] 
**result** | **str** | The current state of the check. One of: - PASS - FAIL - UNCHECKED: Not attempted or service not available. For example AML not attempted if KYC fails. - NA: Not required. For example Visa check when there is no visa document and your account configuration indicates the check can be skipped.  | [optional] 

## Example

```python
from openapi_client.models.entity_profile_check_result_message import EntityProfileCheckResultMessage

# TODO update the JSON string below
json = "{}"
# create an instance of EntityProfileCheckResultMessage from a JSON string
entity_profile_check_result_message_instance = EntityProfileCheckResultMessage.from_json(json)
# print the JSON string representation of the object
print(EntityProfileCheckResultMessage.to_json())

# convert the object into a dict
entity_profile_check_result_message_dict = entity_profile_check_result_message_instance.to_dict()
# create an instance of EntityProfileCheckResultMessage from a dict
entity_profile_check_result_message_from_dict = EntityProfileCheckResultMessage.from_dict(entity_profile_check_result_message_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


