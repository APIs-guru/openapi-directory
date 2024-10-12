# GoogleCloudApigeeV1ListExportsResponse

The response for ListExports

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exports** | [**List[GoogleCloudApigeeV1Export]**](GoogleCloudApigeeV1Export.md) | Details of the export jobs. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_list_exports_response import GoogleCloudApigeeV1ListExportsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1ListExportsResponse from a JSON string
google_cloud_apigee_v1_list_exports_response_instance = GoogleCloudApigeeV1ListExportsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1ListExportsResponse.to_json())

# convert the object into a dict
google_cloud_apigee_v1_list_exports_response_dict = google_cloud_apigee_v1_list_exports_response_instance.to_dict()
# create an instance of GoogleCloudApigeeV1ListExportsResponse from a dict
google_cloud_apigee_v1_list_exports_response_from_dict = GoogleCloudApigeeV1ListExportsResponse.from_dict(google_cloud_apigee_v1_list_exports_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


