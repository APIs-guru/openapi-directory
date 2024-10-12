# ReauthSettings

Configuration for IAP reauthentication policies.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_age** | **str** | Reauth session lifetime, how long before a user has to reauthenticate again. | [optional] 
**method** | **str** | Reauth method requested. | [optional] 
**policy_type** | **str** | How IAP determines the effective policy in cases of hierarchical policies. Policies are merged from higher in the hierarchy to lower in the hierarchy. | [optional] 

## Example

```python
from openapi_client.models.reauth_settings import ReauthSettings

# TODO update the JSON string below
json = "{}"
# create an instance of ReauthSettings from a JSON string
reauth_settings_instance = ReauthSettings.from_json(json)
# print the JSON string representation of the object
print(ReauthSettings.to_json())

# convert the object into a dict
reauth_settings_dict = reauth_settings_instance.to_dict()
# create an instance of ReauthSettings from a dict
reauth_settings_from_dict = ReauthSettings.from_dict(reauth_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


