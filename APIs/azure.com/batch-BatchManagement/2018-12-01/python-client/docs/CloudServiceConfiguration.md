# CloudServiceConfiguration


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**os_family** | **str** | Possible values are: 2 - OS Family 2, equivalent to Windows Server 2008 R2 SP1. 3 - OS Family 3, equivalent to Windows Server 2012. 4 - OS Family 4, equivalent to Windows Server 2012 R2. 5 - OS Family 5, equivalent to Windows Server 2016. For more information, see Azure Guest OS Releases (https://azure.microsoft.com/documentation/articles/cloud-services-guestos-update-matrix/#releases). | 
**os_version** | **str** | The default value is * which specifies the latest operating system version for the specified OS family. | [optional] 

## Example

```python
from openapi_client.models.cloud_service_configuration import CloudServiceConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of CloudServiceConfiguration from a JSON string
cloud_service_configuration_instance = CloudServiceConfiguration.from_json(json)
# print the JSON string representation of the object
print(CloudServiceConfiguration.to_json())

# convert the object into a dict
cloud_service_configuration_dict = cloud_service_configuration_instance.to_dict()
# create an instance of CloudServiceConfiguration from a dict
cloud_service_configuration_from_dict = CloudServiceConfiguration.from_dict(cloud_service_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


