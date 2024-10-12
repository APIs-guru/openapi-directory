# WebAppConfig

Configuration metadata of a single Firebase App for the web.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_key** | **str** | The [&#x60;keyString&#x60;](https://cloud.google.com/api-keys/docs/reference/rest/v2/projects.locations.keys#Key.FIELDS.key_string) of the API key associated with the &#x60;WebApp&#x60;. Note that this value is _not_ the [&#x60;apiKeyId&#x60;](../projects.webApps#WebApp.FIELDS.api_key_id) (the UID) of the API key associated with the &#x60;WebApp&#x60;. | [optional] 
**app_id** | **str** | Immutable. The globally unique, Firebase-assigned identifier for the &#x60;WebApp&#x60;. | [optional] 
**auth_domain** | **str** | The domain Firebase Auth configures for OAuth redirects, in the format: PROJECT_ID.firebaseapp.com | [optional] 
**database_url** | **str** | **DEPRECATED.** _Instead, find the default Firebase Realtime Database instance name using the [list endpoint](https://firebase.google.com/docs/reference/rest/database/database-management/rest/v1beta/projects.locations.instances/list) within the Firebase Realtime Database REST API. Note that the default instance for the Project might not yet be provisioned, so the return might not contain a default instance._ The default Firebase Realtime Database URL. | [optional] 
**location_id** | **str** | **DEPRECATED.** _Instead, use product-specific REST APIs to find the location of resources._ The ID of the Project&#39;s default GCP resource location. The location is one of the available [GCP resource locations](https://firebase.google.com/docs/projects/locations). This field is omitted if the default GCP resource location has not been finalized yet. To set a Project&#39;s default GCP resource location, call [&#x60;FinalizeDefaultLocation&#x60;](../projects.defaultLocation/finalize) after you add Firebase resources to the Project. | [optional] 
**measurement_id** | **str** | The unique Google-assigned identifier of the Google Analytics web stream associated with the &#x60;WebApp&#x60;. Firebase SDKs use this ID to interact with Google Analytics APIs. This field is only present if the &#x60;WebApp&#x60; is linked to a web stream in a Google Analytics App + Web property. Learn more about this ID and Google Analytics web streams in the [Analytics documentation](https://support.google.com/analytics/answer/9304153). To generate a &#x60;measurementId&#x60; and link the &#x60;WebApp&#x60; with a Google Analytics web stream, call [&#x60;AddGoogleAnalytics&#x60;](../../v1beta1/projects/addGoogleAnalytics). For apps using the Firebase JavaScript SDK v7.20.0 and later, Firebase dynamically fetches the &#x60;measurementId&#x60; when your app initializes Analytics. Having this ID in your config object is optional, but it does serve as a fallback in the rare case that the dynamic fetch fails. | [optional] 
**messaging_sender_id** | **str** | The sender ID for use with Firebase Cloud Messaging. | [optional] 
**project_id** | **str** | Immutable. A user-assigned unique identifier for the &#x60;FirebaseProject&#x60;. | [optional] 
**storage_bucket** | **str** | **DEPRECATED.** _Instead, find the default Cloud Storage for Firebase bucket using the [list endpoint](https://firebase.google.com/docs/reference/rest/storage/rest/v1beta/projects.buckets/list) within the Cloud Storage for Firebase REST API. Note that the default bucket for the Project might not yet be provisioned, so the return might not contain a default bucket._ The default Cloud Storage for Firebase storage bucket name. | [optional] 

## Example

```python
from openapi_client.models.web_app_config import WebAppConfig

# TODO update the JSON string below
json = "{}"
# create an instance of WebAppConfig from a JSON string
web_app_config_instance = WebAppConfig.from_json(json)
# print the JSON string representation of the object
print(WebAppConfig.to_json())

# convert the object into a dict
web_app_config_dict = web_app_config_instance.to_dict()
# create an instance of WebAppConfig from a dict
web_app_config_from_dict = WebAppConfig.from_dict(web_app_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


