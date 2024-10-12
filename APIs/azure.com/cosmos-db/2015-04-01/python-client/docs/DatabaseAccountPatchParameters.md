# DatabaseAccountPatchParameters

Parameters for patching Azure Cosmos DB database account properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**DatabaseAccountPatchProperties**](DatabaseAccountPatchProperties.md) |  | [optional] 
**tags** | **Dict[str, str]** | Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with \&quot;defaultExperience\&quot;: \&quot;Cassandra\&quot;. Current \&quot;defaultExperience\&quot; values also include \&quot;Table\&quot;, \&quot;Graph\&quot;, \&quot;DocumentDB\&quot;, and \&quot;MongoDB\&quot;. | [optional] 

## Example

```python
from openapi_client.models.database_account_patch_parameters import DatabaseAccountPatchParameters

# TODO update the JSON string below
json = "{}"
# create an instance of DatabaseAccountPatchParameters from a JSON string
database_account_patch_parameters_instance = DatabaseAccountPatchParameters.from_json(json)
# print the JSON string representation of the object
print(DatabaseAccountPatchParameters.to_json())

# convert the object into a dict
database_account_patch_parameters_dict = database_account_patch_parameters_instance.to_dict()
# create an instance of DatabaseAccountPatchParameters from a dict
database_account_patch_parameters_from_dict = DatabaseAccountPatchParameters.from_dict(database_account_patch_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


