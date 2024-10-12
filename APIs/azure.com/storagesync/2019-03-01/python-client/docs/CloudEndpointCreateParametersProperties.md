# CloudEndpointCreateParametersProperties

CloudEndpoint Properties object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**azure_file_share_name** | **str** | Azure file share name | [optional] 
**friendly_name** | **str** | Friendly Name | [optional] 
**storage_account_resource_id** | **str** | Storage Account Resource Id | [optional] 
**storage_account_tenant_id** | **str** | Storage Account Tenant Id | [optional] 

## Example

```python
from openapi_client.models.cloud_endpoint_create_parameters_properties import CloudEndpointCreateParametersProperties

# TODO update the JSON string below
json = "{}"
# create an instance of CloudEndpointCreateParametersProperties from a JSON string
cloud_endpoint_create_parameters_properties_instance = CloudEndpointCreateParametersProperties.from_json(json)
# print the JSON string representation of the object
print(CloudEndpointCreateParametersProperties.to_json())

# convert the object into a dict
cloud_endpoint_create_parameters_properties_dict = cloud_endpoint_create_parameters_properties_instance.to_dict()
# create an instance of CloudEndpointCreateParametersProperties from a dict
cloud_endpoint_create_parameters_properties_from_dict = CloudEndpointCreateParametersProperties.from_dict(cloud_endpoint_create_parameters_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


