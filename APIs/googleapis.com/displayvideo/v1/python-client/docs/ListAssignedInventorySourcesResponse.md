# ListAssignedInventorySourcesResponse

Response message for AssignedInventorySourceService.ListAssignedInventorySources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assigned_inventory_sources** | [**List[AssignedInventorySource]**](AssignedInventorySource.md) | The list of assigned inventory sources. This list will be absent if empty. | [optional] 
**next_page_token** | **str** | A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to &#x60;ListAssignedInventorySources&#x60; method to retrieve the next page of results. | [optional] 

## Example

```python
from openapi_client.models.list_assigned_inventory_sources_response import ListAssignedInventorySourcesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListAssignedInventorySourcesResponse from a JSON string
list_assigned_inventory_sources_response_instance = ListAssignedInventorySourcesResponse.from_json(json)
# print the JSON string representation of the object
print(ListAssignedInventorySourcesResponse.to_json())

# convert the object into a dict
list_assigned_inventory_sources_response_dict = list_assigned_inventory_sources_response_instance.to_dict()
# create an instance of ListAssignedInventorySourcesResponse from a dict
list_assigned_inventory_sources_response_from_dict = ListAssignedInventorySourcesResponse.from_dict(list_assigned_inventory_sources_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


