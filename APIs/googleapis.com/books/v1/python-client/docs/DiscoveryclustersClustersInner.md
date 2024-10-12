# DiscoveryclustersClustersInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**banner_with_content_container** | [**DiscoveryclustersClustersInnerBannerWithContentContainer**](DiscoveryclustersClustersInnerBannerWithContentContainer.md) |  | [optional] 
**sub_title** | **str** |  | [optional] 
**title** | **str** |  | [optional] 
**total_volumes** | **int** |  | [optional] 
**uid** | **str** |  | [optional] 
**volumes** | [**List[Volume]**](Volume.md) |  | [optional] 

## Example

```python
from openapi_client.models.discoveryclusters_clusters_inner import DiscoveryclustersClustersInner

# TODO update the JSON string below
json = "{}"
# create an instance of DiscoveryclustersClustersInner from a JSON string
discoveryclusters_clusters_inner_instance = DiscoveryclustersClustersInner.from_json(json)
# print the JSON string representation of the object
print(DiscoveryclustersClustersInner.to_json())

# convert the object into a dict
discoveryclusters_clusters_inner_dict = discoveryclusters_clusters_inner_instance.to_dict()
# create an instance of DiscoveryclustersClustersInner from a dict
discoveryclusters_clusters_inner_from_dict = DiscoveryclustersClustersInner.from_dict(discoveryclusters_clusters_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


