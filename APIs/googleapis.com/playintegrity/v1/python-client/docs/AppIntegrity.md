# AppIntegrity

Contains the application integrity information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_recognition_verdict** | **str** | Required. Details about the app recognition verdict | [optional] 
**certificate_sha256_digest** | **List[str]** | The SHA256 hash of the requesting app&#39;s signing certificates (base64 web-safe encoded). Set iff app_recognition_verdict !&#x3D; UNEVALUATED. | [optional] 
**package_name** | **str** | Package name of the application under attestation. Set iff app_recognition_verdict !&#x3D; UNEVALUATED. | [optional] 
**version_code** | **str** | Version code of the application. Set iff app_recognition_verdict !&#x3D; UNEVALUATED. | [optional] 

## Example

```python
from openapi_client.models.app_integrity import AppIntegrity

# TODO update the JSON string below
json = "{}"
# create an instance of AppIntegrity from a JSON string
app_integrity_instance = AppIntegrity.from_json(json)
# print the JSON string representation of the object
print(AppIntegrity.to_json())

# convert the object into a dict
app_integrity_dict = app_integrity_instance.to_dict()
# create an instance of AppIntegrity from a dict
app_integrity_from_dict = AppIntegrity.from_dict(app_integrity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


