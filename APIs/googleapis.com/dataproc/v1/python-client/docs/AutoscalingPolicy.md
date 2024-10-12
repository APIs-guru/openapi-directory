# AutoscalingPolicy

Describes an autoscaling policy for Dataproc cluster autoscaler.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**basic_algorithm** | [**BasicAutoscalingAlgorithm**](BasicAutoscalingAlgorithm.md) |  | [optional] 
**id** | **str** | Required. The policy id.The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). Cannot begin or end with underscore or hyphen. Must consist of between 3 and 50 characters. | [optional] 
**labels** | **Dict[str, str]** | Optional. The labels to associate with this autoscaling policy. Label keys must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). Label values may be empty, but, if present, must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). No more than 32 labels can be associated with an autoscaling policy. | [optional] 
**name** | **str** | Output only. The \&quot;resource name\&quot; of the autoscaling policy, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.autoscalingPolicies, the resource name of the policy has the following format: projects/{project_id}/regions/{region}/autoscalingPolicies/{policy_id} For projects.locations.autoscalingPolicies, the resource name of the policy has the following format: projects/{project_id}/locations/{location}/autoscalingPolicies/{policy_id} | [optional] [readonly] 
**secondary_worker_config** | [**InstanceGroupAutoscalingPolicyConfig**](InstanceGroupAutoscalingPolicyConfig.md) |  | [optional] 
**worker_config** | [**InstanceGroupAutoscalingPolicyConfig**](InstanceGroupAutoscalingPolicyConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.autoscaling_policy import AutoscalingPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of AutoscalingPolicy from a JSON string
autoscaling_policy_instance = AutoscalingPolicy.from_json(json)
# print the JSON string representation of the object
print(AutoscalingPolicy.to_json())

# convert the object into a dict
autoscaling_policy_dict = autoscaling_policy_instance.to_dict()
# create an instance of AutoscalingPolicy from a dict
autoscaling_policy_from_dict = AutoscalingPolicy.from_dict(autoscaling_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


