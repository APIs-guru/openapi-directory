# ApplicationStackResource

ARM resource for a ApplicationStack.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ApplicationStack**](ApplicationStack.md) |  | [optional] 
**id** | **str** | Resource Id. | [optional] [readonly] 
**kind** | **str** | Kind of resource. | [optional] 
**name** | **str** | Resource Name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.application_stack_resource import ApplicationStackResource

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationStackResource from a JSON string
application_stack_resource_instance = ApplicationStackResource.from_json(json)
# print the JSON string representation of the object
print(ApplicationStackResource.to_json())

# convert the object into a dict
application_stack_resource_dict = application_stack_resource_instance.to_dict()
# create an instance of ApplicationStackResource from a dict
application_stack_resource_from_dict = ApplicationStackResource.from_dict(application_stack_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


