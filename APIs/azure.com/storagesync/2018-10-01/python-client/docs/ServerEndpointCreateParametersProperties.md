# ServerEndpointCreateParametersProperties

ServerEndpoint Properties object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cloud_tiering** | [**FeatureStatus**](FeatureStatus.md) |  | [optional] 
**friendly_name** | **str** | Friendly Name | [optional] 
**offline_data_transfer** | [**FeatureStatus**](FeatureStatus.md) |  | [optional] 
**offline_data_transfer_share_name** | **str** | Offline data transfer share name | [optional] 
**server_local_path** | **str** | Server folder used for data synchronization | [optional] 
**server_resource_id** | **str** | Arm resource identifier. | [optional] 
**tier_files_older_than_days** | **int** | Tier files older than days. | [optional] 
**volume_free_space_percent** | **int** | Level of free space to be maintained by Cloud Tiering if it is enabled. | [optional] 

## Example

```python
from openapi_client.models.server_endpoint_create_parameters_properties import ServerEndpointCreateParametersProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ServerEndpointCreateParametersProperties from a JSON string
server_endpoint_create_parameters_properties_instance = ServerEndpointCreateParametersProperties.from_json(json)
# print the JSON string representation of the object
print(ServerEndpointCreateParametersProperties.to_json())

# convert the object into a dict
server_endpoint_create_parameters_properties_dict = server_endpoint_create_parameters_properties_instance.to_dict()
# create an instance of ServerEndpointCreateParametersProperties from a dict
server_endpoint_create_parameters_properties_from_dict = ServerEndpointCreateParametersProperties.from_dict(server_endpoint_create_parameters_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


