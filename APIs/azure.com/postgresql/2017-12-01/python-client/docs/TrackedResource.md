# TrackedResource

Resource properties including location and tags for track resources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | **str** | The location the resource resides in. | 
**tags** | **Dict[str, str]** | Application-specific metadata in the form of key-value pairs. | [optional] 
**id** | **str** | Resource ID | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

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


