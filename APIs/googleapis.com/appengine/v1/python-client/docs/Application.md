# Application

An Application resource contains the top-level configuration of an App Engine application.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auth_domain** | **str** | Google Apps authentication domain that controls which users can access this application.Defaults to open access for any Google Account. | [optional] 
**code_bucket** | **str** | Output only. Google Cloud Storage bucket that can be used for storing files associated with this application. This bucket is associated with the application and can be used by the gcloud deployment commands.@OutputOnly | [optional] [readonly] 
**database_type** | **str** | The type of the Cloud Firestore or Cloud Datastore database associated with this application. | [optional] 
**default_bucket** | **str** | Output only. Google Cloud Storage bucket that can be used by this application to store content.@OutputOnly | [optional] [readonly] 
**default_cookie_expiration** | **str** | Cookie expiration policy for this application. | [optional] 
**default_hostname** | **str** | Output only. Hostname used to reach this application, as resolved by App Engine.@OutputOnly | [optional] [readonly] 
**dispatch_rules** | [**List[UrlDispatchRule]**](UrlDispatchRule.md) | HTTP path dispatch rules for requests to the application that do not explicitly target a service or version. Rules are order-dependent. Up to 20 dispatch rules can be supported. | [optional] 
**feature_settings** | [**FeatureSettings**](FeatureSettings.md) |  | [optional] 
**gcr_domain** | **str** | Output only. The Google Container Registry domain used for storing managed build docker images for this application. | [optional] [readonly] 
**generated_customer_metadata** | **Dict[str, object]** | Additional Google Generated Customer Metadata, this field won&#39;t be provided by default and can be requested by setting the IncludeExtraData field in GetApplicationRequest | [optional] 
**iap** | [**IdentityAwareProxy**](IdentityAwareProxy.md) |  | [optional] 
**id** | **str** | Identifier of the Application resource. This identifier is equivalent to the project ID of the Google Cloud Platform project where you want to deploy your application. Example: myapp. | [optional] 
**location_id** | **str** | Location from which this application runs. Application instances run out of the data centers in the specified location, which is also where all of the application&#39;s end user content is stored.Defaults to us-central.View the list of supported locations (https://cloud.google.com/appengine/docs/locations). | [optional] 
**name** | **str** | Output only. Full path to the Application resource in the API. Example: apps/myapp.@OutputOnly | [optional] [readonly] 
**service_account** | **str** | The service account associated with the application. This is the app-level default identity. If no identity provided during create version, Admin API will fallback to this one. | [optional] 
**serving_status** | **str** | Serving status of this application. | [optional] 

## Example

```python
from openapi_client.models.application import Application

# TODO update the JSON string below
json = "{}"
# create an instance of Application from a JSON string
application_instance = Application.from_json(json)
# print the JSON string representation of the object
print(Application.to_json())

# convert the object into a dict
application_dict = application_instance.to_dict()
# create an instance of Application from a dict
application_from_dict = Application.from_dict(application_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


