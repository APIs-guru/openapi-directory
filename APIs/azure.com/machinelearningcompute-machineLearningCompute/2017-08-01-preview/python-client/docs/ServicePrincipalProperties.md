# ServicePrincipalProperties

The Azure service principal used by Kubernetes for configuring load balancers

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_id** | **str** | The service principal client ID | 
**secret** | **str** | The service principal secret. This is not returned in response of GET/PUT on the resource. To see this please call listKeys. | 

## Example

```python
from openapi_client.models.service_principal_properties import ServicePrincipalProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ServicePrincipalProperties from a JSON string
service_principal_properties_instance = ServicePrincipalProperties.from_json(json)
# print the JSON string representation of the object
print(ServicePrincipalProperties.to_json())

# convert the object into a dict
service_principal_properties_dict = service_principal_properties_instance.to_dict()
# create an instance of ServicePrincipalProperties from a dict
service_principal_properties_from_dict = ServicePrincipalProperties.from_dict(service_principal_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


