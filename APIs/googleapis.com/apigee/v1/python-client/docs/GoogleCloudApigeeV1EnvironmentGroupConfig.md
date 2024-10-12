# GoogleCloudApigeeV1EnvironmentGroupConfig

EnvironmentGroupConfig is a revisioned snapshot of an EnvironmentGroup and its associated routing rules.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**endpoint_chaining_rules** | [**List[GoogleCloudApigeeV1EndpointChainingRule]**](GoogleCloudApigeeV1EndpointChainingRule.md) | A list of proxies in each deployment group for proxy chaining calls. | [optional] 
**hostnames** | **List[str]** | Host names for the environment group. | [optional] 
**location** | **str** | When this message appears in the top-level IngressConfig, this field will be populated in lieu of the inlined routing_rules and hostnames fields. Some URL for downloading the full EnvironmentGroupConfig for this group. | [optional] 
**name** | **str** | Name of the environment group in the following format: &#x60;organizations/{org}/envgroups/{envgroup}&#x60;. | [optional] 
**revision_id** | **str** | Revision id that defines the ordering of the EnvironmentGroupConfig resource. The higher the revision, the more recently the configuration was deployed. | [optional] 
**routing_rules** | [**List[GoogleCloudApigeeV1RoutingRule]**](GoogleCloudApigeeV1RoutingRule.md) | Ordered list of routing rules defining how traffic to this environment group&#39;s hostnames should be routed to different environments. | [optional] 
**uid** | **str** | A unique id for the environment group config that will only change if the environment group is deleted and recreated. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_environment_group_config import GoogleCloudApigeeV1EnvironmentGroupConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1EnvironmentGroupConfig from a JSON string
google_cloud_apigee_v1_environment_group_config_instance = GoogleCloudApigeeV1EnvironmentGroupConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1EnvironmentGroupConfig.to_json())

# convert the object into a dict
google_cloud_apigee_v1_environment_group_config_dict = google_cloud_apigee_v1_environment_group_config_instance.to_dict()
# create an instance of GoogleCloudApigeeV1EnvironmentGroupConfig from a dict
google_cloud_apigee_v1_environment_group_config_from_dict = GoogleCloudApigeeV1EnvironmentGroupConfig.from_dict(google_cloud_apigee_v1_environment_group_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


