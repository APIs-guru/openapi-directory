# FloodlightActivityGroupsListResponse

Floodlight Activity Group List Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**floodlight_activity_groups** | [**List[FloodlightActivityGroup]**](FloodlightActivityGroup.md) | Floodlight activity group collection. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#floodlightActivityGroupsListResponse\&quot;. | [optional] 
**next_page_token** | **str** | Pagination token to be used for the next list operation. | [optional] 

## Example

```python
from openapi_client.models.floodlight_activity_groups_list_response import FloodlightActivityGroupsListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of FloodlightActivityGroupsListResponse from a JSON string
floodlight_activity_groups_list_response_instance = FloodlightActivityGroupsListResponse.from_json(json)
# print the JSON string representation of the object
print(FloodlightActivityGroupsListResponse.to_json())

# convert the object into a dict
floodlight_activity_groups_list_response_dict = floodlight_activity_groups_list_response_instance.to_dict()
# create an instance of FloodlightActivityGroupsListResponse from a dict
floodlight_activity_groups_list_response_from_dict = FloodlightActivityGroupsListResponse.from_dict(floodlight_activity_groups_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


