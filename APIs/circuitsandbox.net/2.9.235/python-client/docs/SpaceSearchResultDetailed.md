# SpaceSearchResultDetailed


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file_ids** | **List[str]** | &#x3D;The list of file ids | [optional] 
**item_ids** | **List[str]** | &#x3D;The list of items ids | [optional] 
**space_id** | **str** | The id of the space | [optional] 
**status** | **str** | The status of the search (NORESULT, ERROR, TIMEOUT, MORERESULT) | [optional] 

## Example

```python
from openapi_client.models.space_search_result_detailed import SpaceSearchResultDetailed

# TODO update the JSON string below
json = "{}"
# create an instance of SpaceSearchResultDetailed from a JSON string
space_search_result_detailed_instance = SpaceSearchResultDetailed.from_json(json)
# print the JSON string representation of the object
print(SpaceSearchResultDetailed.to_json())

# convert the object into a dict
space_search_result_detailed_dict = space_search_result_detailed_instance.to_dict()
# create an instance of SpaceSearchResultDetailed from a dict
space_search_result_detailed_from_dict = SpaceSearchResultDetailed.from_dict(space_search_result_detailed_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


