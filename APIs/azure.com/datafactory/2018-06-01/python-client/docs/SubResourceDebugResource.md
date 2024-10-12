# SubResourceDebugResource

Azure Data Factory nested debug resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The resource name. | [optional] 

## Example

```python
from openapi_client.models.sub_resource_debug_resource import SubResourceDebugResource

# TODO update the JSON string below
json = "{}"
# create an instance of SubResourceDebugResource from a JSON string
sub_resource_debug_resource_instance = SubResourceDebugResource.from_json(json)
# print the JSON string representation of the object
print(SubResourceDebugResource.to_json())

# convert the object into a dict
sub_resource_debug_resource_dict = sub_resource_debug_resource_instance.to_dict()
# create an instance of SubResourceDebugResource from a dict
sub_resource_debug_resource_from_dict = SubResourceDebugResource.from_dict(sub_resource_debug_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


