# SpatialAnchorsAccountKeyRegenerateRequest

Spatial Anchors Account Regenerate Key

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**serial** | **int** | serial of key to be regenerated | [optional] 

## Example

```python
from openapi_client.models.spatial_anchors_account_key_regenerate_request import SpatialAnchorsAccountKeyRegenerateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SpatialAnchorsAccountKeyRegenerateRequest from a JSON string
spatial_anchors_account_key_regenerate_request_instance = SpatialAnchorsAccountKeyRegenerateRequest.from_json(json)
# print the JSON string representation of the object
print(SpatialAnchorsAccountKeyRegenerateRequest.to_json())

# convert the object into a dict
spatial_anchors_account_key_regenerate_request_dict = spatial_anchors_account_key_regenerate_request_instance.to_dict()
# create an instance of SpatialAnchorsAccountKeyRegenerateRequest from a dict
spatial_anchors_account_key_regenerate_request_from_dict = SpatialAnchorsAccountKeyRegenerateRequest.from_dict(spatial_anchors_account_key_regenerate_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


