# TrackedResource

Base resource object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | The entity tag used for optimistic concurrency when modifying the resource. | [optional] 
**id** | **str** | ID of the resource. | [optional] [readonly] 
**location** | **str** | Location of the resource. | 
**name** | **str** | Name of the resource. | [optional] [readonly] 
**tags** | **Dict[str, str]** | Custom tags for the resource. | [optional] 
**type** | **str** | Type of Resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.tracked_resource import TrackedResource

# TODO update the JSON string below
json = "{}"
# create an instance of TrackedResource from a JSON string
tracked_resource_instance = TrackedResource.from_json(json)
# print the JSON string representation of the object
print(TrackedResource.to_json())

# convert the object into a dict
tracked_resource_dict = tracked_resource_instance.to_dict()
# create an instance of TrackedResource from a dict
tracked_resource_from_dict = TrackedResource.from_dict(tracked_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


