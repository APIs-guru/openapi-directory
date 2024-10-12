# GoogleCloudApigeeV1AppGroupApp

Response for [GetAppGroupApp].[AppGroupApps.GetAppGroupApp], [CreateAppGroupAppRequest].[AppGroupApp.CreateAppGroupAppRequest] and [DeleteAppGroupApp].[AppGroupApp.DeleteAppGroupApp]

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_products** | **List[str]** | List of API products associated with the AppGroup app. | [optional] 
**app_group** | **str** | Immutable. Name of the parent AppGroup whose resource name format is of syntax (organizations/*/appgroups/*). | [optional] 
**app_id** | **str** | Immutable. ID of the AppGroup app. | [optional] 
**attributes** | [**List[GoogleCloudApigeeV1Attribute]**](GoogleCloudApigeeV1Attribute.md) | List of attributes for the AppGroup app. | [optional] 
**callback_url** | **str** | Callback URL used by OAuth 2.0 authorization servers to communicate authorization codes back to AppGroup apps. | [optional] 
**created_at** | **str** | Output only. Time the AppGroup app was created in milliseconds since epoch. | [optional] [readonly] 
**credentials** | [**List[GoogleCloudApigeeV1Credential]**](GoogleCloudApigeeV1Credential.md) | Output only. Set of credentials for the AppGroup app consisting of the consumer key/secret pairs associated with the API products. | [optional] [readonly] 
**key_expires_in** | **str** | Immutable. Expiration time, in seconds, for the consumer key that is generated for the AppGroup app. If not set or left to the default value of &#x60;-1&#x60;, the API key never expires. The expiration time can&#39;t be updated after it is set. | [optional] 
**last_modified_at** | **str** | Output only. Time the AppGroup app was modified in milliseconds since epoch. | [optional] [readonly] 
**name** | **str** | Immutable. Name of the AppGroup app whose resource name format is of syntax (organizations/*/appgroups/*/apps/*). | [optional] 
**scopes** | **List[str]** | Scopes to apply to the AppGroup app. The specified scopes must already exist for the API product that you associate with the AppGroup app. | [optional] 
**status** | **str** | Status of the App. Valid values include &#x60;approved&#x60; or &#x60;revoked&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_app_group_app import GoogleCloudApigeeV1AppGroupApp

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1AppGroupApp from a JSON string
google_cloud_apigee_v1_app_group_app_instance = GoogleCloudApigeeV1AppGroupApp.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1AppGroupApp.to_json())

# convert the object into a dict
google_cloud_apigee_v1_app_group_app_dict = google_cloud_apigee_v1_app_group_app_instance.to_dict()
# create an instance of GoogleCloudApigeeV1AppGroupApp from a dict
google_cloud_apigee_v1_app_group_app_from_dict = GoogleCloudApigeeV1AppGroupApp.from_dict(google_cloud_apigee_v1_app_group_app_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


