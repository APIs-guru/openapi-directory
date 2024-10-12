# ApksAddExternallyHostedRequest

Request to create a new externally hosted APK.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**externally_hosted_apk** | [**ExternallyHostedApk**](ExternallyHostedApk.md) |  | [optional] 

## Example

```python
from openapi_client.models.apks_add_externally_hosted_request import ApksAddExternallyHostedRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ApksAddExternallyHostedRequest from a JSON string
apks_add_externally_hosted_request_instance = ApksAddExternallyHostedRequest.from_json(json)
# print the JSON string representation of the object
print(ApksAddExternallyHostedRequest.to_json())

# convert the object into a dict
apks_add_externally_hosted_request_dict = apks_add_externally_hosted_request_instance.to_dict()
# create an instance of ApksAddExternallyHostedRequest from a dict
apks_add_externally_hosted_request_from_dict = ApksAddExternallyHostedRequest.from_dict(apks_add_externally_hosted_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


