# GoogleCloudApigeeV1AdvancedApiOpsConfig

Configuration for the Advanced API Ops add-on.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Flag that specifies whether the Advanced API Ops add-on is enabled. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_advanced_api_ops_config import GoogleCloudApigeeV1AdvancedApiOpsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1AdvancedApiOpsConfig from a JSON string
google_cloud_apigee_v1_advanced_api_ops_config_instance = GoogleCloudApigeeV1AdvancedApiOpsConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1AdvancedApiOpsConfig.to_json())

# convert the object into a dict
google_cloud_apigee_v1_advanced_api_ops_config_dict = google_cloud_apigee_v1_advanced_api_ops_config_instance.to_dict()
# create an instance of GoogleCloudApigeeV1AdvancedApiOpsConfig from a dict
google_cloud_apigee_v1_advanced_api_ops_config_from_dict = GoogleCloudApigeeV1AdvancedApiOpsConfig.from_dict(google_cloud_apigee_v1_advanced_api_ops_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


