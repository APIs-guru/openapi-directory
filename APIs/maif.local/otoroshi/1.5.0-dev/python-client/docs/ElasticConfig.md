# ElasticConfig

The configuration for elastic access

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cluster_uri** | **str** | URL of the elastic cluster | 
**headers** | **Dict[str, str]** | Additionnal http headers | 
**index** | **str** | Index for events. Default is otoroshi-events | 
**password** | **str** | Optional password | 
**type** | **str** | Type of events. Default is event | 
**user** | **str** | Optional user | 

## Example

```python
from openapi_client.models.elastic_config import ElasticConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ElasticConfig from a JSON string
elastic_config_instance = ElasticConfig.from_json(json)
# print the JSON string representation of the object
print(ElasticConfig.to_json())

# convert the object into a dict
elastic_config_dict = elastic_config_instance.to_dict()
# create an instance of ElasticConfig from a dict
elastic_config_from_dict = ElasticConfig.from_dict(elastic_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


