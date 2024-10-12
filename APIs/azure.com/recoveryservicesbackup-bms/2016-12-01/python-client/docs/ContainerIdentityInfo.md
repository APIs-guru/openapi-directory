# ContainerIdentityInfo

Container identity information

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aad_tenant_id** | **str** | Protection container identity - AAD Tenant | [optional] 
**audience** | **str** | Protection container identity - Audience | [optional] 
**service_principal_client_id** | **str** | Protection container identity - AAD Service Principal | [optional] 
**unique_name** | **str** | Unique name of the container | [optional] 

## Example

```python
from openapi_client.models.container_identity_info import ContainerIdentityInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ContainerIdentityInfo from a JSON string
container_identity_info_instance = ContainerIdentityInfo.from_json(json)
# print the JSON string representation of the object
print(ContainerIdentityInfo.to_json())

# convert the object into a dict
container_identity_info_dict = container_identity_info_instance.to_dict()
# create an instance of ContainerIdentityInfo from a dict
container_identity_info_from_dict = ContainerIdentityInfo.from_dict(container_identity_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


