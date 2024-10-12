# PrimaryConfig

Configuration for the primary cluster. It has the list of clusters that are replicating from this cluster. This should be set if and only if the cluster is of type PRIMARY.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**secondary_cluster_names** | **List[str]** | Output only. Names of the clusters that are replicating from this cluster. | [optional] [readonly] 

## Example

```python
from openapi_client.models.primary_config import PrimaryConfig

# TODO update the JSON string below
json = "{}"
# create an instance of PrimaryConfig from a JSON string
primary_config_instance = PrimaryConfig.from_json(json)
# print the JSON string representation of the object
print(PrimaryConfig.to_json())

# convert the object into a dict
primary_config_dict = primary_config_instance.to_dict()
# create an instance of PrimaryConfig from a dict
primary_config_from_dict = PrimaryConfig.from_dict(primary_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


