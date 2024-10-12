# ComposeRequestSourceObjectsInnerObjectPreconditions

Conditions that must be met for this operation to execute.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**if_generation_match** | **str** | Only perform the composition if the generation of the source object that would be used matches this value. If this value and a generation are both specified, they must be the same value or the call will fail. | [optional] 

## Example

```python
from openapi_client.models.compose_request_source_objects_inner_object_preconditions import ComposeRequestSourceObjectsInnerObjectPreconditions

# TODO update the JSON string below
json = "{}"
# create an instance of ComposeRequestSourceObjectsInnerObjectPreconditions from a JSON string
compose_request_source_objects_inner_object_preconditions_instance = ComposeRequestSourceObjectsInnerObjectPreconditions.from_json(json)
# print the JSON string representation of the object
print(ComposeRequestSourceObjectsInnerObjectPreconditions.to_json())

# convert the object into a dict
compose_request_source_objects_inner_object_preconditions_dict = compose_request_source_objects_inner_object_preconditions_instance.to_dict()
# create an instance of ComposeRequestSourceObjectsInnerObjectPreconditions from a dict
compose_request_source_objects_inner_object_preconditions_from_dict = ComposeRequestSourceObjectsInnerObjectPreconditions.from_dict(compose_request_source_objects_inner_object_preconditions_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


