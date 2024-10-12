# GoogleCloudApigeeV1SetAddonEnablementRequest

Request for SetAddonEnablement.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**analytics_enabled** | **bool** | If the Analytics should be enabled in the environment. | [optional] 
**api_security_enabled** | **bool** | If the API Security should be enabled in the environment. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_set_addon_enablement_request import GoogleCloudApigeeV1SetAddonEnablementRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1SetAddonEnablementRequest from a JSON string
google_cloud_apigee_v1_set_addon_enablement_request_instance = GoogleCloudApigeeV1SetAddonEnablementRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1SetAddonEnablementRequest.to_json())

# convert the object into a dict
google_cloud_apigee_v1_set_addon_enablement_request_dict = google_cloud_apigee_v1_set_addon_enablement_request_instance.to_dict()
# create an instance of GoogleCloudApigeeV1SetAddonEnablementRequest from a dict
google_cloud_apigee_v1_set_addon_enablement_request_from_dict = GoogleCloudApigeeV1SetAddonEnablementRequest.from_dict(google_cloud_apigee_v1_set_addon_enablement_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


