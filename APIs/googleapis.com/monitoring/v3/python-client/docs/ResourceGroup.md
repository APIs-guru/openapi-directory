# ResourceGroup

The resource submessage for group checks. It can be used instead of a monitored resource, when multiple resources are being monitored.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**group_id** | **str** | The group of resources being monitored. Should be only the [GROUP_ID], and not the full-path projects/[PROJECT_ID_OR_NUMBER]/groups/[GROUP_ID]. | [optional] 
**resource_type** | **str** | The resource type of the group members. | [optional] 

## Example

```python
from openapi_client.models.resource_group import ResourceGroup

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceGroup from a JSON string
resource_group_instance = ResourceGroup.from_json(json)
# print the JSON string representation of the object
print(ResourceGroup.to_json())

# convert the object into a dict
resource_group_dict = resource_group_instance.to_dict()
# create an instance of ResourceGroup from a dict
resource_group_from_dict = ResourceGroup.from_dict(resource_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


