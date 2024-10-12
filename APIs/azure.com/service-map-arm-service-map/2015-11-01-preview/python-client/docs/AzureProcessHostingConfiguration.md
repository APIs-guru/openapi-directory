# AzureProcessHostingConfiguration

Describes the hosting configuration of a process when hosted on azure

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cloud_service** | [**AzureCloudServiceConfiguration**](AzureCloudServiceConfiguration.md) |  | [optional] 

## Example

```python
from openapi_client.models.azure_process_hosting_configuration import AzureProcessHostingConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of AzureProcessHostingConfiguration from a JSON string
azure_process_hosting_configuration_instance = AzureProcessHostingConfiguration.from_json(json)
# print the JSON string representation of the object
print(AzureProcessHostingConfiguration.to_json())

# convert the object into a dict
azure_process_hosting_configuration_dict = azure_process_hosting_configuration_instance.to_dict()
# create an instance of AzureProcessHostingConfiguration from a dict
azure_process_hosting_configuration_from_dict = AzureProcessHostingConfiguration.from_dict(azure_process_hosting_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


