# ContainerServiceServicePrincipalProfile

Information about a service principal identity for the cluster to use for manipulating Azure APIs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_id** | **str** | The ID for the service principal. | 
**secret** | **str** | The secret password associated with the service principal. | 

## Example

```python
from openapi_client.models.container_service_service_principal_profile import ContainerServiceServicePrincipalProfile

# TODO update the JSON string below
json = "{}"
# create an instance of ContainerServiceServicePrincipalProfile from a JSON string
container_service_service_principal_profile_instance = ContainerServiceServicePrincipalProfile.from_json(json)
# print the JSON string representation of the object
print(ContainerServiceServicePrincipalProfile.to_json())

# convert the object into a dict
container_service_service_principal_profile_dict = container_service_service_principal_profile_instance.to_dict()
# create an instance of ContainerServiceServicePrincipalProfile from a dict
container_service_service_principal_profile_from_dict = ContainerServiceServicePrincipalProfile.from_dict(container_service_service_principal_profile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


