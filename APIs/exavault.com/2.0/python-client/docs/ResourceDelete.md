# ResourceDelete

All properties of the resource delete object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] 
**meta** | **object** | Meta object containing non-standard meta-information about the delete operation. | [optional] 
**type** | **str** | Type of item. \&quot;resource\&quot; | [optional] 

## Example

```python
from openapi_client.models.resource_delete import ResourceDelete

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceDelete from a JSON string
resource_delete_instance = ResourceDelete.from_json(json)
# print the JSON string representation of the object
print(ResourceDelete.to_json())

# convert the object into a dict
resource_delete_dict = resource_delete_instance.to_dict()
# create an instance of ResourceDelete from a dict
resource_delete_from_dict = ResourceDelete.from_dict(resource_delete_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


