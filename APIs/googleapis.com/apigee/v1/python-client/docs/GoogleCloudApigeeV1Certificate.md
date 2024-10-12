# GoogleCloudApigeeV1Certificate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cert_info** | [**List[GoogleCloudApigeeV1CertInfo]**](GoogleCloudApigeeV1CertInfo.md) | Chain of certificates under this name. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_certificate import GoogleCloudApigeeV1Certificate

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1Certificate from a JSON string
google_cloud_apigee_v1_certificate_instance = GoogleCloudApigeeV1Certificate.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1Certificate.to_json())

# convert the object into a dict
google_cloud_apigee_v1_certificate_dict = google_cloud_apigee_v1_certificate_instance.to_dict()
# create an instance of GoogleCloudApigeeV1Certificate from a dict
google_cloud_apigee_v1_certificate_from_dict = GoogleCloudApigeeV1Certificate.from_dict(google_cloud_apigee_v1_certificate_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


