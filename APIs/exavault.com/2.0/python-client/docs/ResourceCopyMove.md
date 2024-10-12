# ResourceCopyMove

Resource which was successfully copied or moved.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**Resource**](Resource.md) |  | [optional] 
**meta** | **object** | Meta object containing non-standard meta-information about the operation. | [optional] 

## Example

```python
from openapi_client.models.resource_copy_move import ResourceCopyMove

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceCopyMove from a JSON string
resource_copy_move_instance = ResourceCopyMove.from_json(json)
# print the JSON string representation of the object
print(ResourceCopyMove.to_json())

# convert the object into a dict
resource_copy_move_dict = resource_copy_move_instance.to_dict()
# create an instance of ResourceCopyMove from a dict
resource_copy_move_from_dict = ResourceCopyMove.from_dict(resource_copy_move_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


