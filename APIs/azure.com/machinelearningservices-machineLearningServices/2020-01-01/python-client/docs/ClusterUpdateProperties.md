# ClusterUpdateProperties

The properties of a amlCompute that need to be updated.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**scale_settings** | [**ScaleSettings**](ScaleSettings.md) |  | [optional] 

## Example

```python
from openapi_client.models.cluster_update_properties import ClusterUpdateProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ClusterUpdateProperties from a JSON string
cluster_update_properties_instance = ClusterUpdateProperties.from_json(json)
# print the JSON string representation of the object
print(ClusterUpdateProperties.to_json())

# convert the object into a dict
cluster_update_properties_dict = cluster_update_properties_instance.to_dict()
# create an instance of ClusterUpdateProperties from a dict
cluster_update_properties_from_dict = ClusterUpdateProperties.from_dict(cluster_update_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


