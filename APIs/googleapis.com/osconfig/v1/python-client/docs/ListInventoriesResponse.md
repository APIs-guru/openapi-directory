# ListInventoriesResponse

A response message for listing inventory data for all VMs in a specified location.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**inventories** | [**List[Inventory]**](Inventory.md) | List of inventory objects. | [optional] 
**next_page_token** | **str** | The pagination token to retrieve the next page of inventory objects. | [optional] 

## Example

```python
from openapi_client.models.list_inventories_response import ListInventoriesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListInventoriesResponse from a JSON string
list_inventories_response_instance = ListInventoriesResponse.from_json(json)
# print the JSON string representation of the object
print(ListInventoriesResponse.to_json())

# convert the object into a dict
list_inventories_response_dict = list_inventories_response_instance.to_dict()
# create an instance of ListInventoriesResponse from a dict
list_inventories_response_from_dict = ListInventoriesResponse.from_dict(list_inventories_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


