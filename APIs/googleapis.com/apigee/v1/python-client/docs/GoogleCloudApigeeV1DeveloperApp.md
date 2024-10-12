# GoogleCloudApigeeV1DeveloperApp


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_products** | **List[str]** | List of API products associated with the developer app. | [optional] 
**app_family** | **str** | Developer app family. | [optional] 
**app_id** | **str** | ID of the developer app. | [optional] 
**attributes** | [**List[GoogleCloudApigeeV1Attribute]**](GoogleCloudApigeeV1Attribute.md) | List of attributes for the developer app. | [optional] 
**callback_url** | **str** | Callback URL used by OAuth 2.0 authorization servers to communicate authorization codes back to developer apps. | [optional] 
**created_at** | **str** | Output only. Time the developer app was created in milliseconds since epoch. | [optional] [readonly] 
**credentials** | [**List[GoogleCloudApigeeV1Credential]**](GoogleCloudApigeeV1Credential.md) | Output only. Set of credentials for the developer app consisting of the consumer key/secret pairs associated with the API products. | [optional] [readonly] 
**developer_id** | **str** | ID of the developer. | [optional] 
**key_expires_in** | **str** | Expiration time, in milliseconds, for the consumer key that is generated for the developer app. If not set or left to the default value of &#x60;-1&#x60;, the API key never expires. The expiration time can&#39;t be updated after it is set. | [optional] 
**last_modified_at** | **str** | Output only. Time the developer app was modified in milliseconds since epoch. | [optional] [readonly] 
**name** | **str** | Name of the developer app. | [optional] 
**scopes** | **List[str]** | Scopes to apply to the developer app. The specified scopes must already exist for the API product that you associate with the developer app. | [optional] 
**status** | **str** | Status of the credential. Valid values include &#x60;approved&#x60; or &#x60;revoked&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_developer_app import GoogleCloudApigeeV1DeveloperApp

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1DeveloperApp from a JSON string
google_cloud_apigee_v1_developer_app_instance = GoogleCloudApigeeV1DeveloperApp.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1DeveloperApp.to_json())

# convert the object into a dict
google_cloud_apigee_v1_developer_app_dict = google_cloud_apigee_v1_developer_app_instance.to_dict()
# create an instance of GoogleCloudApigeeV1DeveloperApp from a dict
google_cloud_apigee_v1_developer_app_from_dict = GoogleCloudApigeeV1DeveloperApp.from_dict(google_cloud_apigee_v1_developer_app_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


