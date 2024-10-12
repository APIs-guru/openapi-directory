# ShaCertificate

A SHA-1 or SHA-256 certificate associated with the AndroidApp.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cert_type** | **str** | The type of SHA certificate encoded in the hash. | [optional] 
**name** | **str** | The resource name of the ShaCertificate for the AndroidApp, in the format: projects/PROJECT_IDENTIFIER/androidApps/APP_ID/sha/SHA_HASH * PROJECT_IDENTIFIER: the parent Project&#39;s [&#x60;ProjectNumber&#x60;](../projects#FirebaseProject.FIELDS.project_number) ***(recommended)*** or its [&#x60;ProjectId&#x60;](../projects#FirebaseProject.FIELDS.project_id). Learn more about using project identifiers in Google&#39;s [AIP 2510 standard](https://google.aip.dev/cloud/2510). Note that the value for PROJECT_IDENTIFIER in any response body will be the &#x60;ProjectId&#x60;. * APP_ID: the globally unique, Firebase-assigned identifier for the App (see [&#x60;appId&#x60;](../projects.androidApps#AndroidApp.FIELDS.app_id)). * SHA_HASH: the certificate hash for the App (see [&#x60;shaHash&#x60;](../projects.androidApps.sha#ShaCertificate.FIELDS.sha_hash)). | [optional] 
**sha_hash** | **str** | The certificate hash for the &#x60;AndroidApp&#x60;. | [optional] 

## Example

```python
from openapi_client.models.sha_certificate import ShaCertificate

# TODO update the JSON string below
json = "{}"
# create an instance of ShaCertificate from a JSON string
sha_certificate_instance = ShaCertificate.from_json(json)
# print the JSON string representation of the object
print(ShaCertificate.to_json())

# convert the object into a dict
sha_certificate_dict = sha_certificate_instance.to_dict()
# create an instance of ShaCertificate from a dict
sha_certificate_from_dict = ShaCertificate.from_dict(sha_certificate_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


