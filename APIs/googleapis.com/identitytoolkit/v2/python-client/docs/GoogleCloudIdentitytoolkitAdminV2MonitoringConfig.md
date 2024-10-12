# GoogleCloudIdentitytoolkitAdminV2MonitoringConfig

Configuration related to monitoring project activity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**request_logging** | [**GoogleCloudIdentitytoolkitAdminV2RequestLogging**](GoogleCloudIdentitytoolkitAdminV2RequestLogging.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_identitytoolkit_admin_v2_monitoring_config import GoogleCloudIdentitytoolkitAdminV2MonitoringConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIdentitytoolkitAdminV2MonitoringConfig from a JSON string
google_cloud_identitytoolkit_admin_v2_monitoring_config_instance = GoogleCloudIdentitytoolkitAdminV2MonitoringConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIdentitytoolkitAdminV2MonitoringConfig.to_json())

# convert the object into a dict
google_cloud_identitytoolkit_admin_v2_monitoring_config_dict = google_cloud_identitytoolkit_admin_v2_monitoring_config_instance.to_dict()
# create an instance of GoogleCloudIdentitytoolkitAdminV2MonitoringConfig from a dict
google_cloud_identitytoolkit_admin_v2_monitoring_config_from_dict = GoogleCloudIdentitytoolkitAdminV2MonitoringConfig.from_dict(google_cloud_identitytoolkit_admin_v2_monitoring_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


