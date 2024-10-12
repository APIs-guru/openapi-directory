# AzureCloudServiceConfiguration

Describes an Azure Cloud Service

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deployment** | **str** | Cloud Service deployment identifier | [optional] 
**instance_id** | **str** | Cloud Service instance identifier | [optional] 
**name** | **str** | Cloud Service name | [optional] 
**role_name** | **str** | Cloud Service role name | [optional] 
**role_type** | **str** | Used to specify type of an Azure Cloud Service role | [optional] 

## Example

```python
from openapi_client.models.azure_cloud_service_configuration import AzureCloudServiceConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of AzureCloudServiceConfiguration from a JSON string
azure_cloud_service_configuration_instance = AzureCloudServiceConfiguration.from_json(json)
# print the JSON string representation of the object
print(AzureCloudServiceConfiguration.to_json())

# convert the object into a dict
azure_cloud_service_configuration_dict = azure_cloud_service_configuration_instance.to_dict()
# create an instance of AzureCloudServiceConfiguration from a dict
azure_cloud_service_configuration_from_dict = AzureCloudServiceConfiguration.from_dict(azure_cloud_service_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


