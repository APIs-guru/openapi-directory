# GoogleFirebaseAppcheckV1betaResourcePolicy

App Check enforcement policy for a specific resource of a Firebase service supported by App Check. Note that this policy will override the Service level enforcement mode configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enforcement_mode** | **str** | Required. The App Check enforcement mode for this resource. This will override the EnforcementMode setting on the service. For new resources that you are creating, you should consider setting an override and enable enforcement on the resource immediately, if there are no outdated clients that can use it. | [optional] 
**etag** | **str** | This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. This etag is strongly validated. | [optional] 
**name** | **str** | Required. The relative name of the resource configuration object, in the format: &#x60;&#x60;&#x60; projects/{project_number}/services/{service_id}/resourcePolicies/{resource_policy_id} &#x60;&#x60;&#x60; Note that the &#x60;service_id&#x60; element must be a supported service ID. Currently, the following service IDs are supported: * &#x60;oauth2.googleapis.com&#x60; (Google Identity for iOS) &#x60;resource_policy_id&#x60; is a system-generated UID used as the resource ID for the policy. | [optional] 
**target_resource** | **str** | Required. Service specific name of the resource object to which this policy applies, in the format: * &#x60;//oauth2.googleapis.com/projects/{project}/oauthClients/{oauth_client_id}&#x60; (Google Identity for iOS) NOTE that the resource must belong to the service specified in the &#x60;name&#x60; and be from the same project as this policy, but it may or may not exist at the time of creation of the policy. | [optional] 
**update_time** | **str** | Output only. Timestamp when this service configuration object was most recently updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_firebase_appcheck_v1beta_resource_policy import GoogleFirebaseAppcheckV1betaResourcePolicy

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleFirebaseAppcheckV1betaResourcePolicy from a JSON string
google_firebase_appcheck_v1beta_resource_policy_instance = GoogleFirebaseAppcheckV1betaResourcePolicy.from_json(json)
# print the JSON string representation of the object
print(GoogleFirebaseAppcheckV1betaResourcePolicy.to_json())

# convert the object into a dict
google_firebase_appcheck_v1beta_resource_policy_dict = google_firebase_appcheck_v1beta_resource_policy_instance.to_dict()
# create an instance of GoogleFirebaseAppcheckV1betaResourcePolicy from a dict
google_firebase_appcheck_v1beta_resource_policy_from_dict = GoogleFirebaseAppcheckV1betaResourcePolicy.from_dict(google_firebase_appcheck_v1beta_resource_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


