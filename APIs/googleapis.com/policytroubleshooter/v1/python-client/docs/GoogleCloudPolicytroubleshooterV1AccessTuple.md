# GoogleCloudPolicytroubleshooterV1AccessTuple

Information about the principal, resource, and permission to check.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**full_resource_name** | **str** | Required. The full resource name that identifies the resource. For example, &#x60;//compute.googleapis.com/projects/my-project/zones/us-central1-a/instances/my-instance&#x60;. For examples of full resource names for Google Cloud services, see https://cloud.google.com/iam/help/troubleshooter/full-resource-names. | [optional] 
**permission** | **str** | Required. The IAM permission to check for the specified principal and resource. For a complete list of IAM permissions, see https://cloud.google.com/iam/help/permissions/reference. For a complete list of predefined IAM roles and the permissions in each role, see https://cloud.google.com/iam/help/roles/reference. | [optional] 
**principal** | **str** | Required. The principal whose access you want to check, in the form of the email address that represents that principal. For example, &#x60;alice@example.com&#x60; or &#x60;my-service-account@my-project.iam.gserviceaccount.com&#x60;. The principal must be a Google Account or a service account. Other types of principals are not supported. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_policytroubleshooter_v1_access_tuple import GoogleCloudPolicytroubleshooterV1AccessTuple

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudPolicytroubleshooterV1AccessTuple from a JSON string
google_cloud_policytroubleshooter_v1_access_tuple_instance = GoogleCloudPolicytroubleshooterV1AccessTuple.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudPolicytroubleshooterV1AccessTuple.to_json())

# convert the object into a dict
google_cloud_policytroubleshooter_v1_access_tuple_dict = google_cloud_policytroubleshooter_v1_access_tuple_instance.to_dict()
# create an instance of GoogleCloudPolicytroubleshooterV1AccessTuple from a dict
google_cloud_policytroubleshooter_v1_access_tuple_from_dict = GoogleCloudPolicytroubleshooterV1AccessTuple.from_dict(google_cloud_policytroubleshooter_v1_access_tuple_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


