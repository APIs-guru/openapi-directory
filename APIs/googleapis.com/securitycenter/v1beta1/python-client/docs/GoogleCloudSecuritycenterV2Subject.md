# GoogleCloudSecuritycenterV2Subject

Represents a Kubernetes subject.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Authentication type for the subject. | [optional] 
**name** | **str** | Name for the subject. | [optional] 
**ns** | **str** | Namespace for the subject. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_securitycenter_v2_subject import GoogleCloudSecuritycenterV2Subject

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudSecuritycenterV2Subject from a JSON string
google_cloud_securitycenter_v2_subject_instance = GoogleCloudSecuritycenterV2Subject.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudSecuritycenterV2Subject.to_json())

# convert the object into a dict
google_cloud_securitycenter_v2_subject_dict = google_cloud_securitycenter_v2_subject_instance.to_dict()
# create an instance of GoogleCloudSecuritycenterV2Subject from a dict
google_cloud_securitycenter_v2_subject_from_dict = GoogleCloudSecuritycenterV2Subject.from_dict(google_cloud_securitycenter_v2_subject_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


