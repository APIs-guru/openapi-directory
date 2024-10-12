# IntraNodeVisibilityConfig

IntraNodeVisibilityConfig contains the desired config of the intra-node visibility on this cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Enables intra node visibility for this cluster. | [optional] 

## Example

```python
from openapi_client.models.intra_node_visibility_config import IntraNodeVisibilityConfig

# TODO update the JSON string below
json = "{}"
# create an instance of IntraNodeVisibilityConfig from a JSON string
intra_node_visibility_config_instance = IntraNodeVisibilityConfig.from_json(json)
# print the JSON string representation of the object
print(IntraNodeVisibilityConfig.to_json())

# convert the object into a dict
intra_node_visibility_config_dict = intra_node_visibility_config_instance.to_dict()
# create an instance of IntraNodeVisibilityConfig from a dict
intra_node_visibility_config_from_dict = IntraNodeVisibilityConfig.from_dict(intra_node_visibility_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


