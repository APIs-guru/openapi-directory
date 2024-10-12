# ResourceAccessList

List of the resource access.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URI to next page. | [optional] 
**value** | [**List[ResourceAccess]**](ResourceAccess.md) | List of the resource access. | [optional] 

## Example

```python
from openapi_client.models.resource_access_list import ResourceAccessList

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceAccessList from a JSON string
resource_access_list_instance = ResourceAccessList.from_json(json)
# print the JSON string representation of the object
print(ResourceAccessList.to_json())

# convert the object into a dict
resource_access_list_dict = resource_access_list_instance.to_dict()
# create an instance of ResourceAccessList from a dict
resource_access_list_from_dict = ResourceAccessList.from_dict(resource_access_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


