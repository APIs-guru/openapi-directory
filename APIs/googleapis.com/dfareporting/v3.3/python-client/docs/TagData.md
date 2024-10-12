# TagData

Placement Tag Data

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ad_id** | **str** | Ad associated with this placement tag. Applicable only when format is PLACEMENT_TAG_TRACKING. | [optional] 
**click_tag** | **str** | Tag string to record a click. | [optional] 
**creative_id** | **str** | Creative associated with this placement tag. Applicable only when format is PLACEMENT_TAG_TRACKING. | [optional] 
**format** | **str** | TagData tag format of this tag. | [optional] 
**impression_tag** | **str** | Tag string for serving an ad. | [optional] 

## Example

```python
from openapi_client.models.tag_data import TagData

# TODO update the JSON string below
json = "{}"
# create an instance of TagData from a JSON string
tag_data_instance = TagData.from_json(json)
# print the JSON string representation of the object
print(TagData.to_json())

# convert the object into a dict
tag_data_dict = tag_data_instance.to_dict()
# create an instance of TagData from a dict
tag_data_from_dict = TagData.from_dict(tag_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


