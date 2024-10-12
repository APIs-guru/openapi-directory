# GoogleCloudApigeeV1TargetServer

TargetServer configuration. TargetServers are used to decouple a proxy TargetEndpoint HTTPTargetConnections from concrete URLs for backend services.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Optional. A human-readable description of this TargetServer. | [optional] 
**host** | **str** | Required. The host name this target connects to. Value must be a valid hostname as described by RFC-1123. | [optional] 
**is_enabled** | **bool** | Optional. Enabling/disabling a TargetServer is useful when TargetServers are used in load balancing configurations, and one or more TargetServers need to taken out of rotation periodically. Defaults to true. | [optional] 
**name** | **str** | Required. The resource id of this target server. Values must match the regular expression  | [optional] 
**port** | **int** | Required. The port number this target connects to on the given host. Value must be between 1 and 65535, inclusive. | [optional] 
**protocol** | **str** | Immutable. The protocol used by this TargetServer. | [optional] 
**s_sl_info** | [**GoogleCloudApigeeV1TlsInfo**](GoogleCloudApigeeV1TlsInfo.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_target_server import GoogleCloudApigeeV1TargetServer

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1TargetServer from a JSON string
google_cloud_apigee_v1_target_server_instance = GoogleCloudApigeeV1TargetServer.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1TargetServer.to_json())

# convert the object into a dict
google_cloud_apigee_v1_target_server_dict = google_cloud_apigee_v1_target_server_instance.to_dict()
# create an instance of GoogleCloudApigeeV1TargetServer from a dict
google_cloud_apigee_v1_target_server_from_dict = GoogleCloudApigeeV1TargetServer.from_dict(google_cloud_apigee_v1_target_server_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


