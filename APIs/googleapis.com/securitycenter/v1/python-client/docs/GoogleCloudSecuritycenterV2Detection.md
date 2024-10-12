# GoogleCloudSecuritycenterV2Detection

Memory hash detection contributing to the binary family match.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**binary** | **str** | The name of the binary associated with the memory hash signature detection. | [optional] 
**percent_pages_matched** | **float** | The percentage of memory page hashes in the signature that were matched. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_securitycenter_v2_detection import GoogleCloudSecuritycenterV2Detection

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudSecuritycenterV2Detection from a JSON string
google_cloud_securitycenter_v2_detection_instance = GoogleCloudSecuritycenterV2Detection.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudSecuritycenterV2Detection.to_json())

# convert the object into a dict
google_cloud_securitycenter_v2_detection_dict = google_cloud_securitycenter_v2_detection_instance.to_dict()
# create an instance of GoogleCloudSecuritycenterV2Detection from a dict
google_cloud_securitycenter_v2_detection_from_dict = GoogleCloudSecuritycenterV2Detection.from_dict(google_cloud_securitycenter_v2_detection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


