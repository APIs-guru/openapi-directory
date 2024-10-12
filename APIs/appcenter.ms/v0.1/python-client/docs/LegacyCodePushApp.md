# LegacyCodePushApp


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**manually_provision_deployments** | **bool** | Whether the user provided their own deployments. Not currently in use. | [optional] 
**name** | **str** | The app name. | 
**os** | **str** | The app os. | [optional] 
**platform** | **str** | The app platform. | [optional] 

## Example

```python
from openapi_client.models.legacy_code_push_app import LegacyCodePushApp

# TODO update the JSON string below
json = "{}"
# create an instance of LegacyCodePushApp from a JSON string
legacy_code_push_app_instance = LegacyCodePushApp.from_json(json)
# print the JSON string representation of the object
print(LegacyCodePushApp.to_json())

# convert the object into a dict
legacy_code_push_app_dict = legacy_code_push_app_instance.to_dict()
# create an instance of LegacyCodePushApp from a dict
legacy_code_push_app_from_dict = LegacyCodePushApp.from_dict(legacy_code_push_app_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


