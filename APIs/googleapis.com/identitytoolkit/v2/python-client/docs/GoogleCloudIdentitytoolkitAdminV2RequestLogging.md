# GoogleCloudIdentitytoolkitAdminV2RequestLogging

Configuration for logging requests made to this project to Stackdriver Logging

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Whether logging is enabled for this project or not. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_identitytoolkit_admin_v2_request_logging import GoogleCloudIdentitytoolkitAdminV2RequestLogging

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIdentitytoolkitAdminV2RequestLogging from a JSON string
google_cloud_identitytoolkit_admin_v2_request_logging_instance = GoogleCloudIdentitytoolkitAdminV2RequestLogging.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIdentitytoolkitAdminV2RequestLogging.to_json())

# convert the object into a dict
google_cloud_identitytoolkit_admin_v2_request_logging_dict = google_cloud_identitytoolkit_admin_v2_request_logging_instance.to_dict()
# create an instance of GoogleCloudIdentitytoolkitAdminV2RequestLogging from a dict
google_cloud_identitytoolkit_admin_v2_request_logging_from_dict = GoogleCloudIdentitytoolkitAdminV2RequestLogging.from_dict(google_cloud_identitytoolkit_admin_v2_request_logging_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


