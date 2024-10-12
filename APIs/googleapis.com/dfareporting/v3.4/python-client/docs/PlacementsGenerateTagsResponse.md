# PlacementsGenerateTagsResponse

Placement GenerateTags Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#placementsGenerateTagsResponse\&quot;. | [optional] 
**placement_tags** | [**List[PlacementTag]**](PlacementTag.md) | Set of generated tags for the specified placements. | [optional] 

## Example

```python
from openapi_client.models.placements_generate_tags_response import PlacementsGenerateTagsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of PlacementsGenerateTagsResponse from a JSON string
placements_generate_tags_response_instance = PlacementsGenerateTagsResponse.from_json(json)
# print the JSON string representation of the object
print(PlacementsGenerateTagsResponse.to_json())

# convert the object into a dict
placements_generate_tags_response_dict = placements_generate_tags_response_instance.to_dict()
# create an instance of PlacementsGenerateTagsResponse from a dict
placements_generate_tags_response_from_dict = PlacementsGenerateTagsResponse.from_dict(placements_generate_tags_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


