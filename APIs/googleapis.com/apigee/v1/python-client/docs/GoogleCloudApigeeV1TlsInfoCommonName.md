# GoogleCloudApigeeV1TlsInfoCommonName


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **str** | The TLS Common Name string of the certificate. | [optional] 
**wildcard_match** | **bool** | Indicates whether the cert should be matched against as a wildcard cert. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_tls_info_common_name import GoogleCloudApigeeV1TlsInfoCommonName

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1TlsInfoCommonName from a JSON string
google_cloud_apigee_v1_tls_info_common_name_instance = GoogleCloudApigeeV1TlsInfoCommonName.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1TlsInfoCommonName.to_json())

# convert the object into a dict
google_cloud_apigee_v1_tls_info_common_name_dict = google_cloud_apigee_v1_tls_info_common_name_instance.to_dict()
# create an instance of GoogleCloudApigeeV1TlsInfoCommonName from a dict
google_cloud_apigee_v1_tls_info_common_name_from_dict = GoogleCloudApigeeV1TlsInfoCommonName.from_dict(google_cloud_apigee_v1_tls_info_common_name_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


