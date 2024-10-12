# SpatialAnchorsAccountKeys

Spatial Anchors Account Keys

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**primary_key** | **str** | value of primary key. | [optional] [readonly] 
**secondary_key** | **str** | value of secondary key. | [optional] [readonly] 

## Example

```python
from openapi_client.models.spatial_anchors_account_keys import SpatialAnchorsAccountKeys

# TODO update the JSON string below
json = "{}"
# create an instance of SpatialAnchorsAccountKeys from a JSON string
spatial_anchors_account_keys_instance = SpatialAnchorsAccountKeys.from_json(json)
# print the JSON string representation of the object
print(SpatialAnchorsAccountKeys.to_json())

# convert the object into a dict
spatial_anchors_account_keys_dict = spatial_anchors_account_keys_instance.to_dict()
# create an instance of SpatialAnchorsAccountKeys from a dict
spatial_anchors_account_keys_from_dict = SpatialAnchorsAccountKeys.from_dict(spatial_anchors_account_keys_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


