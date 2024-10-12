# PolicyControllerResourceList

ResourceList contains container resource requirements.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cpu** | **str** | CPU requirement expressed in Kubernetes resource units. | [optional] 
**memory** | **str** | Memory requirement expressed in Kubernetes resource units. | [optional] 

## Example

```python
from openapi_client.models.policy_controller_resource_list import PolicyControllerResourceList

# TODO update the JSON string below
json = "{}"
# create an instance of PolicyControllerResourceList from a JSON string
policy_controller_resource_list_instance = PolicyControllerResourceList.from_json(json)
# print the JSON string representation of the object
print(PolicyControllerResourceList.to_json())

# convert the object into a dict
policy_controller_resource_list_dict = policy_controller_resource_list_instance.to_dict()
# create an instance of PolicyControllerResourceList from a dict
policy_controller_resource_list_from_dict = PolicyControllerResourceList.from_dict(policy_controller_resource_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


