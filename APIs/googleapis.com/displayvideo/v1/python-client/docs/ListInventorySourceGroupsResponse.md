# ListInventorySourceGroupsResponse

Response message for InventorySourceGroupService.ListInventorySourceGroups.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**inventory_source_groups** | [**List[InventorySourceGroup]**](InventorySourceGroup.md) | The list of inventory source groups. This list will be absent if empty. | [optional] 
**next_page_token** | **str** | A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to &#x60;ListInventorySourceGroups&#x60; method to retrieve the next page of results. | [optional] 

## Example

```python
from openapi_client.models.list_inventory_source_groups_response import ListInventorySourceGroupsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListInventorySourceGroupsResponse from a JSON string
list_inventory_source_groups_response_instance = ListInventorySourceGroupsResponse.from_json(json)
# print the JSON string representation of the object
print(ListInventorySourceGroupsResponse.to_json())

# convert the object into a dict
list_inventory_source_groups_response_dict = list_inventory_source_groups_response_instance.to_dict()
# create an instance of ListInventorySourceGroupsResponse from a dict
list_inventory_source_groups_response_from_dict = ListInventorySourceGroupsResponse.from_dict(list_inventory_source_groups_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


