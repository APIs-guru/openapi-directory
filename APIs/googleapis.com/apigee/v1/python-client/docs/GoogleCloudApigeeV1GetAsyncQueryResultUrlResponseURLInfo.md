# GoogleCloudApigeeV1GetAsyncQueryResultUrlResponseURLInfo

A Signed URL and the relevant metadata associated with it.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**md5** | **str** | The MD5 Hash of the JSON data | [optional] 
**size_bytes** | **str** | The size of the returned file in bytes | [optional] 
**uri** | **str** | The signed URL of the JSON data. Will be of the form &#x60;https://storage.googleapis.com/example-bucket/cat.jpeg?X-Goog-Algorithm&#x3D; GOOG4-RSA-SHA256&amp;X-Goog-Credential&#x3D;example%40example-project.iam.gserviceaccount .com%2F20181026%2Fus-central1%2Fstorage%2Fgoog4_request&amp;X-Goog-Date&#x3D;20181026T18 1309Z&amp;X-Goog-Expires&#x3D;900&amp;X-Goog-SignedHeaders&#x3D;host&amp;X-Goog-Signature&#x3D;247a2aa45f16 9edf4d187d54e7cc46e4731b1e6273242c4f4c39a1d2507a0e58706e25e3a85a7dbb891d62afa849 6def8e260c1db863d9ace85ff0a184b894b117fe46d1225c82f2aa19efd52cf21d3e2022b3b868dc c1aca2741951ed5bf3bb25a34f5e9316a2841e8ff4c530b22ceaa1c5ce09c7cbb5732631510c2058 0e61723f5594de3aea497f195456a2ff2bdd0d13bad47289d8611b6f9cfeef0c46c91a455b94e90a 66924f722292d21e24d31dcfb38ce0c0f353ffa5a9756fc2a9f2b40bc2113206a81e324fc4fd6823 a29163fa845c8ae7eca1fcf6e5bb48b3200983c56c5ca81fffb151cca7402beddfc4a76b13344703 2ea7abedc098d2eb14a7&#x60; | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_get_async_query_result_url_response_url_info import GoogleCloudApigeeV1GetAsyncQueryResultUrlResponseURLInfo

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1GetAsyncQueryResultUrlResponseURLInfo from a JSON string
google_cloud_apigee_v1_get_async_query_result_url_response_url_info_instance = GoogleCloudApigeeV1GetAsyncQueryResultUrlResponseURLInfo.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1GetAsyncQueryResultUrlResponseURLInfo.to_json())

# convert the object into a dict
google_cloud_apigee_v1_get_async_query_result_url_response_url_info_dict = google_cloud_apigee_v1_get_async_query_result_url_response_url_info_instance.to_dict()
# create an instance of GoogleCloudApigeeV1GetAsyncQueryResultUrlResponseURLInfo from a dict
google_cloud_apigee_v1_get_async_query_result_url_response_url_info_from_dict = GoogleCloudApigeeV1GetAsyncQueryResultUrlResponseURLInfo.from_dict(google_cloud_apigee_v1_get_async_query_result_url_response_url_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


