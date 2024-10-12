# GoogleCloudAssuredworkloadsV1beta1RestrictAllowedResourcesRequest

Request for restricting list of available resources in Workload environment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**restriction_type** | **str** | Required. The type of restriction for using gcp products in the Workload environment. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_assuredworkloads_v1beta1_restrict_allowed_resources_request import GoogleCloudAssuredworkloadsV1beta1RestrictAllowedResourcesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAssuredworkloadsV1beta1RestrictAllowedResourcesRequest from a JSON string
google_cloud_assuredworkloads_v1beta1_restrict_allowed_resources_request_instance = GoogleCloudAssuredworkloadsV1beta1RestrictAllowedResourcesRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAssuredworkloadsV1beta1RestrictAllowedResourcesRequest.to_json())

# convert the object into a dict
google_cloud_assuredworkloads_v1beta1_restrict_allowed_resources_request_dict = google_cloud_assuredworkloads_v1beta1_restrict_allowed_resources_request_instance.to_dict()
# create an instance of GoogleCloudAssuredworkloadsV1beta1RestrictAllowedResourcesRequest from a dict
google_cloud_assuredworkloads_v1beta1_restrict_allowed_resources_request_from_dict = GoogleCloudAssuredworkloadsV1beta1RestrictAllowedResourcesRequest.from_dict(google_cloud_assuredworkloads_v1beta1_restrict_allowed_resources_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


