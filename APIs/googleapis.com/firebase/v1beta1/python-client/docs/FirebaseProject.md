# FirebaseProject

A `FirebaseProject` is the top-level Firebase entity. It is the container for Firebase Apps, Firebase Hosting sites, storage systems (Firebase Realtime Database, Cloud Firestore, Cloud Storage buckets), and other Firebase and Google Cloud Platform (GCP) resources. You create a `FirebaseProject` by calling AddFirebase and specifying an *existing* [GCP `Project`](https://cloud.google.com/resource-manager/reference/rest/v1/projects). This adds Firebase resources to the existing GCP `Project`. Since a FirebaseProject is actually also a GCP `Project`, a `FirebaseProject` has the same underlying GCP identifiers (`projectNumber` and `projectId`). This allows for easy interop with Google APIs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annotations** | **Dict[str, str]** | A set of user-defined annotations for the FirebaseProject. Learn more about annotations in Google&#39;s [AIP-128 standard](https://google.aip.dev/128#annotations). These annotations are intended solely for developers and client-side tools. Firebase services will not mutate this annotations set. | [optional] 
**display_name** | **str** | The user-assigned display name of the Project. | [optional] 
**etag** | **str** | This checksum is computed by the server based on the value of other fields, and it may be sent with update requests to ensure the client has an up-to-date value before proceeding. Learn more about &#x60;etag&#x60; in Google&#39;s [AIP-154 standard](https://google.aip.dev/154#declarative-friendly-resources). This etag is strongly validated. | [optional] 
**name** | **str** | The resource name of the Project, in the format: projects/PROJECT_IDENTIFIER PROJECT_IDENTIFIER: the Project&#39;s [&#x60;ProjectNumber&#x60;](../projects#FirebaseProject.FIELDS.project_number) ***(recommended)*** or its [&#x60;ProjectId&#x60;](../projects#FirebaseProject.FIELDS.project_id). Learn more about using project identifiers in Google&#39;s [AIP 2510 standard](https://google.aip.dev/cloud/2510). Note that the value for PROJECT_IDENTIFIER in any response body will be the &#x60;ProjectId&#x60;. | [optional] 
**project_id** | **str** | Output only. Immutable. A user-assigned unique identifier for the Project. This identifier may appear in URLs or names for some Firebase resources associated with the Project, but it should generally be treated as a convenience alias to reference the Project. | [optional] [readonly] 
**project_number** | **str** | Output only. Immutable. The globally unique, Google-assigned canonical identifier for the Project. Use this identifier when configuring integrations and/or making API calls to Firebase or third-party services. | [optional] [readonly] 
**resources** | [**DefaultResources**](DefaultResources.md) |  | [optional] 
**state** | **str** | Output only. The lifecycle state of the Project. | [optional] [readonly] 

## Example

```python
from openapi_client.models.firebase_project import FirebaseProject

# TODO update the JSON string below
json = "{}"
# create an instance of FirebaseProject from a JSON string
firebase_project_instance = FirebaseProject.from_json(json)
# print the JSON string representation of the object
print(FirebaseProject.to_json())

# convert the object into a dict
firebase_project_dict = firebase_project_instance.to_dict()
# create an instance of FirebaseProject from a dict
firebase_project_from_dict = FirebaseProject.from_dict(firebase_project_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


