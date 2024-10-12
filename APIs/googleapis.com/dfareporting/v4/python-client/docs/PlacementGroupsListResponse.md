# PlacementGroupsListResponse

Placement Group List Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#placementGroupsListResponse\&quot;. | [optional] 
**next_page_token** | **str** | Pagination token to be used for the next list operation. | [optional] 
**placement_groups** | [**List[PlacementGroup]**](PlacementGroup.md) | Placement group collection. | [optional] 

## Example

```python
from openapi_client.models.placement_groups_list_response import PlacementGroupsListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of PlacementGroupsListResponse from a JSON string
placement_groups_list_response_instance = PlacementGroupsListResponse.from_json(json)
# print the JSON string representation of the object
print(PlacementGroupsListResponse.to_json())

# convert the object into a dict
placement_groups_list_response_dict = placement_groups_list_response_instance.to_dict()
# create an instance of PlacementGroupsListResponse from a dict
placement_groups_list_response_from_dict = PlacementGroupsListResponse.from_dict(placement_groups_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


