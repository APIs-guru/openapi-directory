# AttachedDatabaseConfiguration

Class representing an attached database configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | **str** | Resource location. | [optional] 
**properties** | [**AttachedDatabaseConfigurationProperties**](AttachedDatabaseConfigurationProperties.md) |  | [optional] 
**id** | **str** | Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName} | [optional] [readonly] 
**name** | **str** | The name of the resource | [optional] [readonly] 
**type** | **str** | The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts. | [optional] [readonly] 

## Example

```python
from openapi_client.models.attached_database_configuration import AttachedDatabaseConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of AttachedDatabaseConfiguration from a JSON string
attached_database_configuration_instance = AttachedDatabaseConfiguration.from_json(json)
# print the JSON string representation of the object
print(AttachedDatabaseConfiguration.to_json())

# convert the object into a dict
attached_database_configuration_dict = attached_database_configuration_instance.to_dict()
# create an instance of AttachedDatabaseConfiguration from a dict
attached_database_configuration_from_dict = AttachedDatabaseConfiguration.from_dict(attached_database_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


