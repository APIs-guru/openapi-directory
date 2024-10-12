# GoogleCloudApigeeV1TargetServerConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Whether the target server is enabled. An empty/omitted value for this field should be interpreted as true. | [optional] 
**host** | **str** | Host name of the target server. | [optional] 
**name** | **str** | Target server revision name in the following format: &#x60;organizations/{org}/environments/{env}/targetservers/{targetserver}/revisions/{rev}&#x60; | [optional] 
**port** | **int** | Port number for the target server. | [optional] 
**protocol** | **str** | The protocol used by this target server. | [optional] 
**tls_info** | [**GoogleCloudApigeeV1TlsInfoConfig**](GoogleCloudApigeeV1TlsInfoConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_target_server_config import GoogleCloudApigeeV1TargetServerConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1TargetServerConfig from a JSON string
google_cloud_apigee_v1_target_server_config_instance = GoogleCloudApigeeV1TargetServerConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1TargetServerConfig.to_json())

# convert the object into a dict
google_cloud_apigee_v1_target_server_config_dict = google_cloud_apigee_v1_target_server_config_instance.to_dict()
# create an instance of GoogleCloudApigeeV1TargetServerConfig from a dict
google_cloud_apigee_v1_target_server_config_from_dict = GoogleCloudApigeeV1TargetServerConfig.from_dict(google_cloud_apigee_v1_target_server_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


