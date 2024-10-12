# FileServiceProperties

The properties of File services in storage account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **object** | The properties of File services in storage account. | [optional] 
**id** | **str** | Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName} | [optional] [readonly] 
**name** | **str** | The name of the resource | [optional] [readonly] 
**type** | **str** | The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts. | [optional] [readonly] 

## Example

```python
from openapi_client.models.file_service_properties import FileServiceProperties

# TODO update the JSON string below
json = "{}"
# create an instance of FileServiceProperties from a JSON string
file_service_properties_instance = FileServiceProperties.from_json(json)
# print the JSON string representation of the object
print(FileServiceProperties.to_json())

# convert the object into a dict
file_service_properties_dict = file_service_properties_instance.to_dict()
# create an instance of FileServiceProperties from a dict
file_service_properties_from_dict = FileServiceProperties.from_dict(file_service_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


