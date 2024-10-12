# SpatialAnchorsAccountsRegenerateKeysRequest

Request for account key regeneration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**serial** | **int** | serial of key to be regenerated | [optional] 

## Example

```python
from openapi_client.models.spatial_anchors_accounts_regenerate_keys_request import SpatialAnchorsAccountsRegenerateKeysRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SpatialAnchorsAccountsRegenerateKeysRequest from a JSON string
spatial_anchors_accounts_regenerate_keys_request_instance = SpatialAnchorsAccountsRegenerateKeysRequest.from_json(json)
# print the JSON string representation of the object
print(SpatialAnchorsAccountsRegenerateKeysRequest.to_json())

# convert the object into a dict
spatial_anchors_accounts_regenerate_keys_request_dict = spatial_anchors_accounts_regenerate_keys_request_instance.to_dict()
# create an instance of SpatialAnchorsAccountsRegenerateKeysRequest from a dict
spatial_anchors_accounts_regenerate_keys_request_from_dict = SpatialAnchorsAccountsRegenerateKeysRequest.from_dict(spatial_anchors_accounts_regenerate_keys_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


