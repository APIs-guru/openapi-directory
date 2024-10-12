# ApplicationStackCollection

Collection of Application Stacks

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to next page of resources. | [optional] [readonly] 
**value** | [**List[ApplicationStackResource]**](ApplicationStackResource.md) | Collection of resources. | 

## Example

```python
from openapi_client.models.application_stack_collection import ApplicationStackCollection

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationStackCollection from a JSON string
application_stack_collection_instance = ApplicationStackCollection.from_json(json)
# print the JSON string representation of the object
print(ApplicationStackCollection.to_json())

# convert the object into a dict
application_stack_collection_dict = application_stack_collection_instance.to_dict()
# create an instance of ApplicationStackCollection from a dict
application_stack_collection_from_dict = ApplicationStackCollection.from_dict(application_stack_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


