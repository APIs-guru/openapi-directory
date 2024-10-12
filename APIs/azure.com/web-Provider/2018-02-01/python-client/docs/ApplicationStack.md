# ApplicationStack

Application stack.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dependency** | **str** | Application stack dependency. | [optional] 
**display** | **str** | Application stack display name. | [optional] 
**frameworks** | [**List[ApplicationStack]**](ApplicationStack.md) | List of frameworks associated with application stack. | [optional] 
**major_versions** | [**List[StackMajorVersion]**](StackMajorVersion.md) | List of major versions available. | [optional] 
**name** | **str** | Application stack name. | [optional] 

## Example

```python
from openapi_client.models.application_stack import ApplicationStack

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationStack from a JSON string
application_stack_instance = ApplicationStack.from_json(json)
# print the JSON string representation of the object
print(ApplicationStack.to_json())

# convert the object into a dict
application_stack_dict = application_stack_instance.to_dict()
# create an instance of ApplicationStack from a dict
application_stack_from_dict = ApplicationStack.from_dict(application_stack_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


