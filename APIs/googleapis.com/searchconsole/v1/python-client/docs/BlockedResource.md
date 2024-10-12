# BlockedResource

Blocked resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**url** | **str** | URL of the blocked resource. | [optional] 

## Example

```python
from openapi_client.models.blocked_resource import BlockedResource

# TODO update the JSON string below
json = "{}"
# create an instance of BlockedResource from a JSON string
blocked_resource_instance = BlockedResource.from_json(json)
# print the JSON string representation of the object
print(BlockedResource.to_json())

# convert the object into a dict
blocked_resource_dict = blocked_resource_instance.to_dict()
# create an instance of BlockedResource from a dict
blocked_resource_from_dict = BlockedResource.from_dict(blocked_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


