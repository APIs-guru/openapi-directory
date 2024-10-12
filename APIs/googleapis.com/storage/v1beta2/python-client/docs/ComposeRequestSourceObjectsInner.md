# ComposeRequestSourceObjectsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**generation** | **str** | The generation of this object to use as the source. | [optional] 
**name** | **str** | The source object&#39;s name. All source objects must reside in the same bucket. | [optional] 
**object_preconditions** | [**ComposeRequestSourceObjectsInnerObjectPreconditions**](ComposeRequestSourceObjectsInnerObjectPreconditions.md) |  | [optional] 

## Example

```python
from openapi_client.models.compose_request_source_objects_inner import ComposeRequestSourceObjectsInner

# TODO update the JSON string below
json = "{}"
# create an instance of ComposeRequestSourceObjectsInner from a JSON string
compose_request_source_objects_inner_instance = ComposeRequestSourceObjectsInner.from_json(json)
# print the JSON string representation of the object
print(ComposeRequestSourceObjectsInner.to_json())

# convert the object into a dict
compose_request_source_objects_inner_dict = compose_request_source_objects_inner_instance.to_dict()
# create an instance of ComposeRequestSourceObjectsInner from a dict
compose_request_source_objects_inner_from_dict = ComposeRequestSourceObjectsInner.from_dict(compose_request_source_objects_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


