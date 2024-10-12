# PlacementTag

Placement Tag

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**placement_id** | **str** | Placement ID | [optional] 
**tag_datas** | [**List[TagData]**](TagData.md) | Tags generated for this placement. | [optional] 

## Example

```python
from openapi_client.models.placement_tag import PlacementTag

# TODO update the JSON string below
json = "{}"
# create an instance of PlacementTag from a JSON string
placement_tag_instance = PlacementTag.from_json(json)
# print the JSON string representation of the object
print(PlacementTag.to_json())

# convert the object into a dict
placement_tag_dict = placement_tag_instance.to_dict()
# create an instance of PlacementTag from a dict
placement_tag_from_dict = PlacementTag.from_dict(placement_tag_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


