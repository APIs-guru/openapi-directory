# SpatialAnchorsAccountList

Result of the request to get resource collection. It contains a list of resources and a URL link to get the next set of results.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URL to get the next set of resource list results if there are any. | [optional] 
**value** | [**List[SpatialAnchorsAccount]**](SpatialAnchorsAccount.md) | List of resources supported by the Resource Provider. | [optional] 

## Example

```python
from openapi_client.models.spatial_anchors_account_list import SpatialAnchorsAccountList

# TODO update the JSON string below
json = "{}"
# create an instance of SpatialAnchorsAccountList from a JSON string
spatial_anchors_account_list_instance = SpatialAnchorsAccountList.from_json(json)
# print the JSON string representation of the object
print(SpatialAnchorsAccountList.to_json())

# convert the object into a dict
spatial_anchors_account_list_dict = spatial_anchors_account_list_instance.to_dict()
# create an instance of SpatialAnchorsAccountList from a dict
spatial_anchors_account_list_from_dict = SpatialAnchorsAccountList.from_dict(spatial_anchors_account_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


