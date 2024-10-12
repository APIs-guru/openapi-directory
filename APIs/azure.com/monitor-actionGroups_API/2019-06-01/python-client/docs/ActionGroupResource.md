# ActionGroupResource

An action group resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ActionGroup**](ActionGroup.md) |  | [optional] 
**id** | **str** | Azure resource Id | [optional] [readonly] 
**location** | **str** | Resource location | 
**name** | **str** | Azure resource name | [optional] [readonly] 
**tags** | **object** | Resource tags | [optional] 
**type** | **str** | Azure resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.action_group_resource import ActionGroupResource

# TODO update the JSON string below
json = "{}"
# create an instance of ActionGroupResource from a JSON string
action_group_resource_instance = ActionGroupResource.from_json(json)
# print the JSON string representation of the object
print(ActionGroupResource.to_json())

# convert the object into a dict
action_group_resource_dict = action_group_resource_instance.to_dict()
# create an instance of ActionGroupResource from a dict
action_group_resource_from_dict = ActionGroupResource.from_dict(action_group_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


