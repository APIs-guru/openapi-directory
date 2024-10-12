# ManagedZonePrivateVisibilityConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gke_clusters** | [**List[ManagedZonePrivateVisibilityConfigGKECluster]**](ManagedZonePrivateVisibilityConfigGKECluster.md) | The list of Google Kubernetes Engine clusters that can see this zone. | [optional] 
**kind** | **str** |  | [optional] [default to 'dns#managedZonePrivateVisibilityConfig']
**networks** | [**List[ManagedZonePrivateVisibilityConfigNetwork]**](ManagedZonePrivateVisibilityConfigNetwork.md) | The list of VPC networks that can see this zone. | [optional] 

## Example

```python
from openapi_client.models.managed_zone_private_visibility_config import ManagedZonePrivateVisibilityConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ManagedZonePrivateVisibilityConfig from a JSON string
managed_zone_private_visibility_config_instance = ManagedZonePrivateVisibilityConfig.from_json(json)
# print the JSON string representation of the object
print(ManagedZonePrivateVisibilityConfig.to_json())

# convert the object into a dict
managed_zone_private_visibility_config_dict = managed_zone_private_visibility_config_instance.to_dict()
# create an instance of ManagedZonePrivateVisibilityConfig from a dict
managed_zone_private_visibility_config_from_dict = ManagedZonePrivateVisibilityConfig.from_dict(managed_zone_private_visibility_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


