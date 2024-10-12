# GoogleCloudApigeeV1RoutingRule


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**basepath** | **str** | URI path prefix used to route to the specified environment. May contain one or more wildcards. For example, path segments consisting of a single &#x60;*&#x60; character will match any string. | [optional] 
**deployment_group** | **str** | Name of a deployment group in an environment bound to the environment group in the following format: &#x60;organizations/{org}/environment/{env}/deploymentGroups/{group}&#x60; Only one of environment or deployment_group will be set. | [optional] 
**env_group_revision** | **str** | The env group config revision_id when this rule was added or last updated. This value is set when the rule is created and will only update if the the environment_id changes. It is used to determine if the runtime is up to date with respect to this rule. This field is omitted from the IngressConfig unless the GetDeployedIngressConfig API is called with view&#x3D;FULL. | [optional] 
**environment** | **str** | Name of an environment bound to the environment group in the following format: &#x60;organizations/{org}/environments/{env}&#x60;. Only one of environment or deployment_group will be set. | [optional] 
**other_targets** | **List[str]** | Conflicting targets, which will be resource names specifying either deployment groups or environments. | [optional] 
**receiver** | **str** | The resource name of the proxy revision that is receiving this basepath in the following format: &#x60;organizations/{org}/apis/{api}/revisions/{rev}&#x60;. This field is omitted from the IngressConfig unless the GetDeployedIngressConfig API is called with view&#x3D;FULL. | [optional] 
**update_time** | **str** | The unix timestamp when this rule was updated. This is updated whenever env_group_revision is updated. This field is omitted from the IngressConfig unless the GetDeployedIngressConfig API is called with view&#x3D;FULL. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_routing_rule import GoogleCloudApigeeV1RoutingRule

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1RoutingRule from a JSON string
google_cloud_apigee_v1_routing_rule_instance = GoogleCloudApigeeV1RoutingRule.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1RoutingRule.to_json())

# convert the object into a dict
google_cloud_apigee_v1_routing_rule_dict = google_cloud_apigee_v1_routing_rule_instance.to_dict()
# create an instance of GoogleCloudApigeeV1RoutingRule from a dict
google_cloud_apigee_v1_routing_rule_from_dict = GoogleCloudApigeeV1RoutingRule.from_dict(google_cloud_apigee_v1_routing_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


