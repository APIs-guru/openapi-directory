# Discoveryclusters


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clusters** | [**List[DiscoveryclustersClustersInner]**](DiscoveryclustersClustersInner.md) |  | [optional] 
**kind** | **str** | Resorce type. | [optional] 
**total_clusters** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.discoveryclusters import Discoveryclusters

# TODO update the JSON string below
json = "{}"
# create an instance of Discoveryclusters from a JSON string
discoveryclusters_instance = Discoveryclusters.from_json(json)
# print the JSON string representation of the object
print(Discoveryclusters.to_json())

# convert the object into a dict
discoveryclusters_dict = discoveryclusters_instance.to_dict()
# create an instance of Discoveryclusters from a dict
discoveryclusters_from_dict = Discoveryclusters.from_dict(discoveryclusters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


