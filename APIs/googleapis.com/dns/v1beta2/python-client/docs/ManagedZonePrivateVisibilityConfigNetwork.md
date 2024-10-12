# ManagedZonePrivateVisibilityConfigNetwork


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** |  | [optional] [default to 'dns#managedZonePrivateVisibilityConfigNetwork']
**network_url** | **str** | The fully qualified URL of the VPC network to bind to. Format this URL like https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network} | [optional] 

## Example

```python
from openapi_client.models.managed_zone_private_visibility_config_network import ManagedZonePrivateVisibilityConfigNetwork

# TODO update the JSON string below
json = "{}"
# create an instance of ManagedZonePrivateVisibilityConfigNetwork from a JSON string
managed_zone_private_visibility_config_network_instance = ManagedZonePrivateVisibilityConfigNetwork.from_json(json)
# print the JSON string representation of the object
print(ManagedZonePrivateVisibilityConfigNetwork.to_json())

# convert the object into a dict
managed_zone_private_visibility_config_network_dict = managed_zone_private_visibility_config_network_instance.to_dict()
# create an instance of ManagedZonePrivateVisibilityConfigNetwork from a dict
managed_zone_private_visibility_config_network_from_dict = ManagedZonePrivateVisibilityConfigNetwork.from_dict(managed_zone_private_visibility_config_network_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


