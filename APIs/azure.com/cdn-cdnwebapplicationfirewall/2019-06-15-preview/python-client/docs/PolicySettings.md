# PolicySettings

Defines contents of a web application firewall global configuration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_custom_block_response_body** | **str** | If the action type is block, customer can override the response body. The body must be specified in base64 encoding. | [optional] 
**default_custom_block_response_status_code** | **int** | If the action type is block, this field defines the default customer overridable http response status code. | [optional] 
**default_redirect_url** | **str** | If action type is redirect, this field represents the default redirect URL for the client. | [optional] 
**enabled_state** | **str** | describes if the policy is in enabled state or disabled state | [optional] 
**mode** | **str** | Describes if it is in detection mode or prevention mode at policy level. | [optional] 

## Example

```python
from openapi_client.models.policy_settings import PolicySettings

# TODO update the JSON string below
json = "{}"
# create an instance of PolicySettings from a JSON string
policy_settings_instance = PolicySettings.from_json(json)
# print the JSON string representation of the object
print(PolicySettings.to_json())

# convert the object into a dict
policy_settings_dict = policy_settings_instance.to_dict()
# create an instance of PolicySettings from a dict
policy_settings_from_dict = PolicySettings.from_dict(policy_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


