# GoogleCloudApigeeV1NodeConfig

NodeConfig for setting the min/max number of nodes associated with the environment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current_aggregate_node_count** | **str** | Output only. The current total number of gateway nodes that each environment currently has across all instances. | [optional] [readonly] 
**max_node_count** | **str** | Optional. The maximum total number of gateway nodes that the is reserved for all instances that has the specified environment. If not specified, the default is determined by the recommended maximum number of nodes for that gateway. | [optional] 
**min_node_count** | **str** | Optional. The minimum total number of gateway nodes that the is reserved for all instances that has the specified environment. If not specified, the default is determined by the recommended minimum number of nodes for that gateway. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_node_config import GoogleCloudApigeeV1NodeConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1NodeConfig from a JSON string
google_cloud_apigee_v1_node_config_instance = GoogleCloudApigeeV1NodeConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1NodeConfig.to_json())

# convert the object into a dict
google_cloud_apigee_v1_node_config_dict = google_cloud_apigee_v1_node_config_instance.to_dict()
# create an instance of GoogleCloudApigeeV1NodeConfig from a dict
google_cloud_apigee_v1_node_config_from_dict = GoogleCloudApigeeV1NodeConfig.from_dict(google_cloud_apigee_v1_node_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


