# AKSAllOfProperties

AKS properties

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**agent_count** | **int** | Number of agents | [optional] 
**agent_vm_size** | **str** | Agent virtual machine size | [optional] 
**aks_networking_configuration** | [**AksNetworkingConfiguration**](AksNetworkingConfiguration.md) |  | [optional] 
**cluster_fqdn** | **str** | Cluster full qualified domain name | [optional] 
**ssl_configuration** | [**SslConfiguration**](SslConfiguration.md) |  | [optional] 
**system_services** | [**List[SystemService]**](SystemService.md) | System services | [optional] [readonly] 

## Example

```python
from openapi_client.models.aks_all_of_properties import AKSAllOfProperties

# TODO update the JSON string below
json = "{}"
# create an instance of AKSAllOfProperties from a JSON string
aks_all_of_properties_instance = AKSAllOfProperties.from_json(json)
# print the JSON string representation of the object
print(AKSAllOfProperties.to_json())

# convert the object into a dict
aks_all_of_properties_dict = aks_all_of_properties_instance.to_dict()
# create an instance of AKSAllOfProperties from a dict
aks_all_of_properties_from_dict = AKSAllOfProperties.from_dict(aks_all_of_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


