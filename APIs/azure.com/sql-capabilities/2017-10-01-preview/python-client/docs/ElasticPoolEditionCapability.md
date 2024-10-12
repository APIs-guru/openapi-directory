# ElasticPoolEditionCapability

The elastic pool edition capability.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The elastic pool edition name. | [optional] [readonly] 
**reason** | **str** | The reason for the capability not being available. | [optional] 
**status** | **str** | The status of the capability. | [optional] [readonly] 
**supported_elastic_pool_performance_levels** | [**List[ElasticPoolPerformanceLevelCapability]**](ElasticPoolPerformanceLevelCapability.md) | The list of supported elastic pool DTU levels for the edition. | [optional] [readonly] 
**zone_redundant** | **bool** | Whether or not zone redundancy is supported for the edition. | [optional] [readonly] 

## Example

```python
from openapi_client.models.elastic_pool_edition_capability import ElasticPoolEditionCapability

# TODO update the JSON string below
json = "{}"
# create an instance of ElasticPoolEditionCapability from a JSON string
elastic_pool_edition_capability_instance = ElasticPoolEditionCapability.from_json(json)
# print the JSON string representation of the object
print(ElasticPoolEditionCapability.to_json())

# convert the object into a dict
elastic_pool_edition_capability_dict = elastic_pool_edition_capability_instance.to_dict()
# create an instance of ElasticPoolEditionCapability from a dict
elastic_pool_edition_capability_from_dict = ElasticPoolEditionCapability.from_dict(elastic_pool_edition_capability_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


