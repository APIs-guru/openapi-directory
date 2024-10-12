# StackEventsInnerResourcesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_version** | **str** |  | [optional] 
**associations** | [**List[StackEventsInnerResourcesInnerAssociationsInner]**](StackEventsInnerResourcesInnerAssociationsInner.md) |  | [optional] 
**kind** | [**TemplateKind**](TemplateKind.md) |  | [optional] 
**links** | [**StackEventsInnerResourcesInnerLinks**](StackEventsInnerResourcesInnerLinks.md) |  | [optional] 
**resource_id** | **str** |  | [optional] 
**template_meta_name** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.stack_events_inner_resources_inner import StackEventsInnerResourcesInner

# TODO update the JSON string below
json = "{}"
# create an instance of StackEventsInnerResourcesInner from a JSON string
stack_events_inner_resources_inner_instance = StackEventsInnerResourcesInner.from_json(json)
# print the JSON string representation of the object
print(StackEventsInnerResourcesInner.to_json())

# convert the object into a dict
stack_events_inner_resources_inner_dict = stack_events_inner_resources_inner_instance.to_dict()
# create an instance of StackEventsInnerResourcesInner from a dict
stack_events_inner_resources_inner_from_dict = StackEventsInnerResourcesInner.from_dict(stack_events_inner_resources_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


