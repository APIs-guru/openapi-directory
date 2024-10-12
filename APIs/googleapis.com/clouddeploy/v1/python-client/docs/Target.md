# Target

A `Target` resource in the Cloud Deploy API. A `Target` defines a location to which a Skaffold configuration can be deployed.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annotations** | **Dict[str, str]** | Optional. User annotations. These attributes can only be set and used by the user, and not by Cloud Deploy. See https://google.aip.dev/128#annotations for more details such as format and size limitations. | [optional] 
**anthos_cluster** | [**AnthosCluster**](AnthosCluster.md) |  | [optional] 
**create_time** | **str** | Output only. Time at which the &#x60;Target&#x60; was created. | [optional] [readonly] 
**custom_target** | [**CustomTarget**](CustomTarget.md) |  | [optional] 
**deploy_parameters** | **Dict[str, str]** | Optional. The deploy parameters to use for this target. | [optional] 
**description** | **str** | Optional. Description of the &#x60;Target&#x60;. Max length is 255 characters. | [optional] 
**etag** | **str** | Optional. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. | [optional] 
**execution_configs** | [**List[ExecutionConfig]**](ExecutionConfig.md) | Configurations for all execution that relates to this &#x60;Target&#x60;. Each &#x60;ExecutionEnvironmentUsage&#x60; value may only be used in a single configuration; using the same value multiple times is an error. When one or more configurations are specified, they must include the &#x60;RENDER&#x60; and &#x60;DEPLOY&#x60; &#x60;ExecutionEnvironmentUsage&#x60; values. When no configurations are specified, execution will use the default specified in &#x60;DefaultPool&#x60;. | [optional] 
**gke** | [**GkeCluster**](GkeCluster.md) |  | [optional] 
**labels** | **Dict[str, str]** | Optional. Labels are attributes that can be set and used by both the user and by Cloud Deploy. Labels must meet the following constraints: * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. * All characters must use UTF-8 encoding, and international characters are allowed. * Keys must start with a lowercase letter or international character. * Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be &lt;&#x3D; 128 bytes. | [optional] 
**multi_target** | [**MultiTarget**](MultiTarget.md) |  | [optional] 
**name** | **str** | Optional. Name of the &#x60;Target&#x60;. Format is &#x60;projects/{project}/locations/{location}/targets/a-z{0,62}&#x60;. | [optional] 
**require_approval** | **bool** | Optional. Whether or not the &#x60;Target&#x60; requires approval. | [optional] 
**run** | [**CloudRunLocation**](CloudRunLocation.md) |  | [optional] 
**target_id** | **str** | Output only. Resource id of the &#x60;Target&#x60;. | [optional] [readonly] 
**uid** | **str** | Output only. Unique identifier of the &#x60;Target&#x60;. | [optional] [readonly] 
**update_time** | **str** | Output only. Most recent time at which the &#x60;Target&#x60; was updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.target import Target

# TODO update the JSON string below
json = "{}"
# create an instance of Target from a JSON string
target_instance = Target.from_json(json)
# print the JSON string representation of the object
print(Target.to_json())

# convert the object into a dict
target_dict = target_instance.to_dict()
# create an instance of Target from a dict
target_from_dict = Target.from_dict(target_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


