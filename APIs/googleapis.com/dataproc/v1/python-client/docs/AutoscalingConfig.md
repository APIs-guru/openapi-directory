# AutoscalingConfig

Autoscaling Policy config associated with the cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**policy_uri** | **str** | Optional. The autoscaling policy used by the cluster.Only resource names including projectid and location (region) are valid. Examples: https://www.googleapis.com/compute/v1/projects/[project_id]/locations/[dataproc_region]/autoscalingPolicies/[policy_id] projects/[project_id]/locations/[dataproc_region]/autoscalingPolicies/[policy_id]Note that the policy must be in the same project and Dataproc region. | [optional] 

## Example

```python
from openapi_client.models.autoscaling_config import AutoscalingConfig

# TODO update the JSON string below
json = "{}"
# create an instance of AutoscalingConfig from a JSON string
autoscaling_config_instance = AutoscalingConfig.from_json(json)
# print the JSON string representation of the object
print(AutoscalingConfig.to_json())

# convert the object into a dict
autoscaling_config_dict = autoscaling_config_instance.to_dict()
# create an instance of AutoscalingConfig from a dict
autoscaling_config_from_dict = AutoscalingConfig.from_dict(autoscaling_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


