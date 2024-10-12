# PlacementsListResponse

Placement List Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#placementsListResponse\&quot;. | [optional] 
**next_page_token** | **str** | Pagination token to be used for the next list operation. | [optional] 
**placements** | [**List[Placement]**](Placement.md) | Placement collection. | [optional] 

## Example

```python
from openapi_client.models.placements_list_response import PlacementsListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of PlacementsListResponse from a JSON string
placements_list_response_instance = PlacementsListResponse.from_json(json)
# print the JSON string representation of the object
print(PlacementsListResponse.to_json())

# convert the object into a dict
placements_list_response_dict = placements_list_response_instance.to_dict()
# create an instance of PlacementsListResponse from a dict
placements_list_response_from_dict = PlacementsListResponse.from_dict(placements_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


