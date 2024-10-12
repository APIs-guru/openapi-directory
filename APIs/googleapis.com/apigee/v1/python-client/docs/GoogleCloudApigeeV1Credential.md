# GoogleCloudApigeeV1Credential


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_products** | [**List[GoogleCloudApigeeV1ApiProductRef]**](GoogleCloudApigeeV1ApiProductRef.md) | List of API products this credential can be used for. | [optional] 
**attributes** | [**List[GoogleCloudApigeeV1Attribute]**](GoogleCloudApigeeV1Attribute.md) | List of attributes associated with this credential. | [optional] 
**consumer_key** | **str** | Consumer key. | [optional] 
**consumer_secret** | **str** | Secret key. | [optional] 
**expires_at** | **str** | Time the credential will expire in milliseconds since epoch. | [optional] 
**issued_at** | **str** | Time the credential was issued in milliseconds since epoch. | [optional] 
**scopes** | **List[str]** | List of scopes to apply to the app. Specified scopes must already exist on the API product that you associate with the app. | [optional] 
**status** | **str** | Status of the credential. Valid values include &#x60;approved&#x60; or &#x60;revoked&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_credential import GoogleCloudApigeeV1Credential

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1Credential from a JSON string
google_cloud_apigee_v1_credential_instance = GoogleCloudApigeeV1Credential.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1Credential.to_json())

# convert the object into a dict
google_cloud_apigee_v1_credential_dict = google_cloud_apigee_v1_credential_instance.to_dict()
# create an instance of GoogleCloudApigeeV1Credential from a dict
google_cloud_apigee_v1_credential_from_dict = GoogleCloudApigeeV1Credential.from_dict(google_cloud_apigee_v1_credential_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


