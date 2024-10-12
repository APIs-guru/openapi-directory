# GoogleCloudApigeeV1SetAddonsRequest

Request for SetAddons.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**addons_config** | [**GoogleCloudApigeeV1AddonsConfig**](GoogleCloudApigeeV1AddonsConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_set_addons_request import GoogleCloudApigeeV1SetAddonsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1SetAddonsRequest from a JSON string
google_cloud_apigee_v1_set_addons_request_instance = GoogleCloudApigeeV1SetAddonsRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1SetAddonsRequest.to_json())

# convert the object into a dict
google_cloud_apigee_v1_set_addons_request_dict = google_cloud_apigee_v1_set_addons_request_instance.to_dict()
# create an instance of GoogleCloudApigeeV1SetAddonsRequest from a dict
google_cloud_apigee_v1_set_addons_request_from_dict = GoogleCloudApigeeV1SetAddonsRequest.from_dict(google_cloud_apigee_v1_set_addons_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


