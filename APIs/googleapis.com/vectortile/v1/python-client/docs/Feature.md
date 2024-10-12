# Feature

A feature representing a single geographic entity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | The localized name of this feature. Currently only returned for roads. | [optional] 
**geometry** | [**Geometry**](Geometry.md) |  | [optional] 
**place_id** | **str** | Place ID of this feature, suitable for use in Places API details requests. | [optional] 
**relations** | [**List[Relation]**](Relation.md) | Relations to other features. | [optional] 
**segment_info** | [**SegmentInfo**](SegmentInfo.md) |  | [optional] 
**type** | **str** | The type of this feature. | [optional] 

## Example

```python
from openapi_client.models.feature import Feature

# TODO update the JSON string below
json = "{}"
# create an instance of Feature from a JSON string
feature_instance = Feature.from_json(json)
# print the JSON string representation of the object
print(Feature.to_json())

# convert the object into a dict
feature_dict = feature_instance.to_dict()
# create an instance of Feature from a dict
feature_from_dict = Feature.from_dict(feature_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


