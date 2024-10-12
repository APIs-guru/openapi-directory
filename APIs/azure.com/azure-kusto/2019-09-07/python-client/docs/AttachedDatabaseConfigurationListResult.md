# AttachedDatabaseConfigurationListResult

The list attached database configurations operation response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[AttachedDatabaseConfiguration]**](AttachedDatabaseConfiguration.md) | The list of attached database configurations. | [optional] 

## Example

```python
from openapi_client.models.attached_database_configuration_list_result import AttachedDatabaseConfigurationListResult

# TODO update the JSON string below
json = "{}"
# create an instance of AttachedDatabaseConfigurationListResult from a JSON string
attached_database_configuration_list_result_instance = AttachedDatabaseConfigurationListResult.from_json(json)
# print the JSON string representation of the object
print(AttachedDatabaseConfigurationListResult.to_json())

# convert the object into a dict
attached_database_configuration_list_result_dict = attached_database_configuration_list_result_instance.to_dict()
# create an instance of AttachedDatabaseConfigurationListResult from a dict
attached_database_configuration_list_result_from_dict = AttachedDatabaseConfigurationListResult.from_dict(attached_database_configuration_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


