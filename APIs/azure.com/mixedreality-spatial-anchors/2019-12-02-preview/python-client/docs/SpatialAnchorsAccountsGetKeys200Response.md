# SpatialAnchorsAccountsGetKeys200Response

Developer Keys of account

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**primary_key** | **str** | value of primary key. | [optional] [readonly] 
**secondary_key** | **str** | value of secondary key. | [optional] [readonly] 

## Example

```python
from openapi_client.models.spatial_anchors_accounts_get_keys200_response import SpatialAnchorsAccountsGetKeys200Response

# TODO update the JSON string below
json = "{}"
# create an instance of SpatialAnchorsAccountsGetKeys200Response from a JSON string
spatial_anchors_accounts_get_keys200_response_instance = SpatialAnchorsAccountsGetKeys200Response.from_json(json)
# print the JSON string representation of the object
print(SpatialAnchorsAccountsGetKeys200Response.to_json())

# convert the object into a dict
spatial_anchors_accounts_get_keys200_response_dict = spatial_anchors_accounts_get_keys200_response_instance.to_dict()
# create an instance of SpatialAnchorsAccountsGetKeys200Response from a dict
spatial_anchors_accounts_get_keys200_response_from_dict = SpatialAnchorsAccountsGetKeys200Response.from_dict(spatial_anchors_accounts_get_keys200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


