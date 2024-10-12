# VmRecommendation

Represents a machine that is part of a VM/server group

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**configuration_status** | [**ConfigurationStatus**](ConfigurationStatus.md) |  | [optional] 
**recommendation_action** | [**RecommendationAction**](RecommendationAction.md) |  | [optional] 
**resource_id** | **str** | The full azure resource id of the machine | [optional] 

## Example

```python
from openapi_client.models.vm_recommendation import VmRecommendation

# TODO update the JSON string below
json = "{}"
# create an instance of VmRecommendation from a JSON string
vm_recommendation_instance = VmRecommendation.from_json(json)
# print the JSON string representation of the object
print(VmRecommendation.to_json())

# convert the object into a dict
vm_recommendation_dict = vm_recommendation_instance.to_dict()
# create an instance of VmRecommendation from a dict
vm_recommendation_from_dict = VmRecommendation.from_dict(vm_recommendation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


