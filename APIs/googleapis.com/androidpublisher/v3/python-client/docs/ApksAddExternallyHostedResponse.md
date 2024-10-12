# ApksAddExternallyHostedResponse

Response for creating a new externally hosted APK.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**externally_hosted_apk** | [**ExternallyHostedApk**](ExternallyHostedApk.md) |  | [optional] 

## Example

```python
from openapi_client.models.apks_add_externally_hosted_response import ApksAddExternallyHostedResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ApksAddExternallyHostedResponse from a JSON string
apks_add_externally_hosted_response_instance = ApksAddExternallyHostedResponse.from_json(json)
# print the JSON string representation of the object
print(ApksAddExternallyHostedResponse.to_json())

# convert the object into a dict
apks_add_externally_hosted_response_dict = apks_add_externally_hosted_response_instance.to_dict()
# create an instance of ApksAddExternallyHostedResponse from a dict
apks_add_externally_hosted_response_from_dict = ApksAddExternallyHostedResponse.from_dict(apks_add_externally_hosted_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


