# GoogleAnalyticsAdminV1betaFirebaseLink

A link between a GA4 property and a Firebase project.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. Time when this FirebaseLink was originally created. | [optional] [readonly] 
**name** | **str** | Output only. Example format: properties/1234/firebaseLinks/5678 | [optional] [readonly] 
**project** | **str** | Immutable. Firebase project resource name. When creating a FirebaseLink, you may provide this resource name using either a project number or project ID. Once this resource has been created, returned FirebaseLinks will always have a project_name that contains a project number. Format: &#39;projects/{project number}&#39; Example: &#39;projects/1234&#39; | [optional] 

## Example

```python
from openapi_client.models.google_analytics_admin_v1beta_firebase_link import GoogleAnalyticsAdminV1betaFirebaseLink

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsAdminV1betaFirebaseLink from a JSON string
google_analytics_admin_v1beta_firebase_link_instance = GoogleAnalyticsAdminV1betaFirebaseLink.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsAdminV1betaFirebaseLink.to_json())

# convert the object into a dict
google_analytics_admin_v1beta_firebase_link_dict = google_analytics_admin_v1beta_firebase_link_instance.to_dict()
# create an instance of GoogleAnalyticsAdminV1betaFirebaseLink from a dict
google_analytics_admin_v1beta_firebase_link_from_dict = GoogleAnalyticsAdminV1betaFirebaseLink.from_dict(google_analytics_admin_v1beta_firebase_link_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


