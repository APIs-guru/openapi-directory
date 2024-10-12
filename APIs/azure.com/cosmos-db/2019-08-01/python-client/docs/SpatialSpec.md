# SpatialSpec


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**path** | **str** | The path for which the indexing behavior applies to. Index paths typically start with root and end with wildcard (/path/*) | [optional] 
**types** | [**List[SpatialType]**](SpatialType.md) | List of path&#39;s spatial type | [optional] 

## Example

```python
from openapi_client.models.spatial_spec import SpatialSpec

# TODO update the JSON string below
json = "{}"
# create an instance of SpatialSpec from a JSON string
spatial_spec_instance = SpatialSpec.from_json(json)
# print the JSON string representation of the object
print(SpatialSpec.to_json())

# convert the object into a dict
spatial_spec_dict = spatial_spec_instance.to_dict()
# create an instance of SpatialSpec from a dict
spatial_spec_from_dict = SpatialSpec.from_dict(spatial_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


