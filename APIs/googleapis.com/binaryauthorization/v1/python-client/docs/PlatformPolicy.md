# PlatformPolicy

A Binary Authorization platform policy for deployments on various platforms.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Optional. A description comment about the policy. | [optional] 
**gke_policy** | [**GkePolicy**](GkePolicy.md) |  | [optional] 
**name** | **str** | Output only. The relative resource name of the Binary Authorization platform policy, in the form of &#x60;projects/*/platforms/*/policies/*&#x60;. | [optional] [readonly] 
**update_time** | **str** | Output only. Time when the policy was last updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.platform_policy import PlatformPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of PlatformPolicy from a JSON string
platform_policy_instance = PlatformPolicy.from_json(json)
# print the JSON string representation of the object
print(PlatformPolicy.to_json())

# convert the object into a dict
platform_policy_dict = platform_policy_instance.to_dict()
# create an instance of PlatformPolicy from a dict
platform_policy_from_dict = PlatformPolicy.from_dict(platform_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


