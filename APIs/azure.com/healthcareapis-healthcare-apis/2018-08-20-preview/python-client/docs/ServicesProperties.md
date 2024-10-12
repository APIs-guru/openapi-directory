# ServicesProperties

The properties of a service instance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_policies** | [**List[ServiceAccessPolicyEntry]**](ServiceAccessPolicyEntry.md) | The access policies of the service instance. | 
**authentication_configuration** | [**ServiceAuthenticationConfigurationInfo**](ServiceAuthenticationConfigurationInfo.md) |  | [optional] 
**cors_configuration** | [**ServiceCorsConfigurationInfo**](ServiceCorsConfigurationInfo.md) |  | [optional] 
**cosmos_db_configuration** | [**ServiceCosmosDbConfigurationInfo**](ServiceCosmosDbConfigurationInfo.md) |  | [optional] 
**provisioning_state** | **str** | The provisioning state. | [optional] [readonly] 

## Example

```python
from openapi_client.models.services_properties import ServicesProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ServicesProperties from a JSON string
services_properties_instance = ServicesProperties.from_json(json)
# print the JSON string representation of the object
print(ServicesProperties.to_json())

# convert the object into a dict
services_properties_dict = services_properties_instance.to_dict()
# create an instance of ServicesProperties from a dict
services_properties_from_dict = ServicesProperties.from_dict(services_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


