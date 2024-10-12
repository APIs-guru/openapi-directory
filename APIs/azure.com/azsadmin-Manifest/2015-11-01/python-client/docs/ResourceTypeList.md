# ResourceTypeList

List of the resource types.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URI to next page. | [optional] 
**value** | [**List[ResourceType]**](ResourceType.md) | List of the resource types. | [optional] 

## Example

```python
from openapi_client.models.resource_type_list import ResourceTypeList

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceTypeList from a JSON string
resource_type_list_instance = ResourceTypeList.from_json(json)
# print the JSON string representation of the object
print(ResourceTypeList.to_json())

# convert the object into a dict
resource_type_list_dict = resource_type_list_instance.to_dict()
# create an instance of ResourceTypeList from a dict
resource_type_list_from_dict = ResourceTypeList.from_dict(resource_type_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


