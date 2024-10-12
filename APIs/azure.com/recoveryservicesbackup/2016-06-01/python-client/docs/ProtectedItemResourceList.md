# ProtectedItemResourceList

The list of ProtectedItem resources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[ProtectedItemResource]**](ProtectedItemResource.md) | The list of resources. | [optional] 
**next_link** | **str** | The URI to GET the next page of resources. Call ListNext() gets the next page of resources. | [optional] 

## Example

```python
from openapi_client.models.protected_item_resource_list import ProtectedItemResourceList

# TODO update the JSON string below
json = "{}"
# create an instance of ProtectedItemResourceList from a JSON string
protected_item_resource_list_instance = ProtectedItemResourceList.from_json(json)
# print the JSON string representation of the object
print(ProtectedItemResourceList.to_json())

# convert the object into a dict
protected_item_resource_list_dict = protected_item_resource_list_instance.to_dict()
# create an instance of ProtectedItemResourceList from a dict
protected_item_resource_list_from_dict = ProtectedItemResourceList.from_dict(protected_item_resource_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


