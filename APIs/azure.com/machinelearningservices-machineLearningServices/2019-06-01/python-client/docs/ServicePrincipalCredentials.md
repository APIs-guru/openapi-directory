# ServicePrincipalCredentials

Service principal credentials.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_id** | **str** | Client Id | 
**client_secret** | **str** | Client secret | 

## Example

```python
from openapi_client.models.service_principal_credentials import ServicePrincipalCredentials

# TODO update the JSON string below
json = "{}"
# create an instance of ServicePrincipalCredentials from a JSON string
service_principal_credentials_instance = ServicePrincipalCredentials.from_json(json)
# print the JSON string representation of the object
print(ServicePrincipalCredentials.to_json())

# convert the object into a dict
service_principal_credentials_dict = service_principal_credentials_instance.to_dict()
# create an instance of ServicePrincipalCredentials from a dict
service_principal_credentials_from_dict = ServicePrincipalCredentials.from_dict(service_principal_credentials_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


