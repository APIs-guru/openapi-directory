# GoogleCloudRunV2HTTPHeader

HTTPHeader describes a custom header to be used in HTTP probes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Required. The header field name | [optional] 
**value** | **str** | The header field value | [optional] 

## Example

```python
from openapi_client.models.google_cloud_run_v2_http_header import GoogleCloudRunV2HTTPHeader

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRunV2HTTPHeader from a JSON string
google_cloud_run_v2_http_header_instance = GoogleCloudRunV2HTTPHeader.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRunV2HTTPHeader.to_json())

# convert the object into a dict
google_cloud_run_v2_http_header_dict = google_cloud_run_v2_http_header_instance.to_dict()
# create an instance of GoogleCloudRunV2HTTPHeader from a dict
google_cloud_run_v2_http_header_from_dict = GoogleCloudRunV2HTTPHeader.from_dict(google_cloud_run_v2_http_header_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


