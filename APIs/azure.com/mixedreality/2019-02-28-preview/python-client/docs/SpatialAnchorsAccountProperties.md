# SpatialAnchorsAccountProperties

Spatial Anchors Account Customize Properties

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_domain** | **str** | Correspond domain name of certain Spatial Anchors Account | [optional] [readonly] 
**account_id** | **str** | unique id of certain Spatial Anchors Account data contract. | [optional] [readonly] 

## Example

```python
from openapi_client.models.spatial_anchors_account_properties import SpatialAnchorsAccountProperties

# TODO update the JSON string below
json = "{}"
# create an instance of SpatialAnchorsAccountProperties from a JSON string
spatial_anchors_account_properties_instance = SpatialAnchorsAccountProperties.from_json(json)
# print the JSON string representation of the object
print(SpatialAnchorsAccountProperties.to_json())

# convert the object into a dict
spatial_anchors_account_properties_dict = spatial_anchors_account_properties_instance.to_dict()
# create an instance of SpatialAnchorsAccountProperties from a dict
spatial_anchors_account_properties_from_dict = SpatialAnchorsAccountProperties.from_dict(spatial_anchors_account_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


