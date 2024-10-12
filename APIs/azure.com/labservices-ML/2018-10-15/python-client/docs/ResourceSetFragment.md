# ResourceSetFragment

Represents a VM and the setting Id it was created for.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resource_setting_id** | **str** | resourceSettingId for the environment | [optional] 
**vm_resource_id** | **str** | VM resource Id for the environment | [optional] 

## Example

```python
from openapi_client.models.resource_set_fragment import ResourceSetFragment

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceSetFragment from a JSON string
resource_set_fragment_instance = ResourceSetFragment.from_json(json)
# print the JSON string representation of the object
print(ResourceSetFragment.to_json())

# convert the object into a dict
resource_set_fragment_dict = resource_set_fragment_instance.to_dict()
# create an instance of ResourceSetFragment from a dict
resource_set_fragment_from_dict = ResourceSetFragment.from_dict(resource_set_fragment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


