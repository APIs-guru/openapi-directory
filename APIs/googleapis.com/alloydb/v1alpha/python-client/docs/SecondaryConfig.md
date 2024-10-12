# SecondaryConfig

Configuration information for the secondary cluster. This should be set if and only if the cluster is of type SECONDARY.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**primary_cluster_name** | **str** | The name of the primary cluster name with the format: * projects/{project}/locations/{region}/clusters/{cluster_id} | [optional] 

## Example

```python
from openapi_client.models.secondary_config import SecondaryConfig

# TODO update the JSON string below
json = "{}"
# create an instance of SecondaryConfig from a JSON string
secondary_config_instance = SecondaryConfig.from_json(json)
# print the JSON string representation of the object
print(SecondaryConfig.to_json())

# convert the object into a dict
secondary_config_dict = secondary_config_instance.to_dict()
# create an instance of SecondaryConfig from a dict
secondary_config_from_dict = SecondaryConfig.from_dict(secondary_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


