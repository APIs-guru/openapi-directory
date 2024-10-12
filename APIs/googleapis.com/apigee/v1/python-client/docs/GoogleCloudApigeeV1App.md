# GoogleCloudApigeeV1App


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_products** | [**List[GoogleCloudApigeeV1ApiProductRef]**](GoogleCloudApigeeV1ApiProductRef.md) | List of API products associated with the app. | [optional] 
**app_group** | **str** | Name of the AppGroup | [optional] 
**app_id** | **str** | ID of the app. | [optional] 
**attributes** | [**List[GoogleCloudApigeeV1Attribute]**](GoogleCloudApigeeV1Attribute.md) | List of attributes. | [optional] 
**callback_url** | **str** | Callback URL used by OAuth 2.0 authorization servers to communicate authorization codes back to apps. | [optional] 
**company_name** | **str** | Name of the company that owns the app. | [optional] 
**created_at** | **str** | Output only. Unix time when the app was created. | [optional] [readonly] 
**credentials** | [**List[GoogleCloudApigeeV1Credential]**](GoogleCloudApigeeV1Credential.md) | Output only. Set of credentials for the app. Credentials are API key/secret pairs associated with API products. | [optional] [readonly] 
**developer_email** | **str** | Email of the developer. | [optional] 
**developer_id** | **str** | ID of the developer. | [optional] 
**key_expires_in** | **str** | Duration, in milliseconds, of the consumer key that will be generated for the app. The default value, -1, indicates an infinite validity period. Once set, the expiration can&#39;t be updated. json key: keyExpiresIn | [optional] 
**last_modified_at** | **str** | Output only. Last modified time as milliseconds since epoch. | [optional] [readonly] 
**name** | **str** | Name of the app. | [optional] 
**scopes** | **List[str]** | Scopes to apply to the app. The specified scope names must already exist on the API product that you associate with the app. | [optional] 
**status** | **str** | Status of the credential. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_app import GoogleCloudApigeeV1App

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1App from a JSON string
google_cloud_apigee_v1_app_instance = GoogleCloudApigeeV1App.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1App.to_json())

# convert the object into a dict
google_cloud_apigee_v1_app_dict = google_cloud_apigee_v1_app_instance.to_dict()
# create an instance of GoogleCloudApigeeV1App from a dict
google_cloud_apigee_v1_app_from_dict = GoogleCloudApigeeV1App.from_dict(google_cloud_apigee_v1_app_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


