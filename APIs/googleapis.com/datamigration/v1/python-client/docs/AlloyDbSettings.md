# AlloyDbSettings

Settings for creating an AlloyDB cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**database_version** | **str** | Optional. The database engine major version. This is an optional field. If a database version is not supplied at cluster creation time, then a default database version will be used. | [optional] 
**encryption_config** | [**EncryptionConfig**](EncryptionConfig.md) |  | [optional] 
**initial_user** | [**UserPassword**](UserPassword.md) |  | [optional] 
**labels** | **Dict[str, str]** | Labels for the AlloyDB cluster created by DMS. An object containing a list of &#39;key&#39;, &#39;value&#39; pairs. | [optional] 
**primary_instance_settings** | [**PrimaryInstanceSettings**](PrimaryInstanceSettings.md) |  | [optional] 
**vpc_network** | **str** | Required. The resource link for the VPC network in which cluster resources are created and from which they are accessible via Private IP. The network must belong to the same project as the cluster. It is specified in the form: \&quot;projects/{project_number}/global/networks/{network_id}\&quot;. This is required to create a cluster. | [optional] 

## Example

```python
from openapi_client.models.alloy_db_settings import AlloyDbSettings

# TODO update the JSON string below
json = "{}"
# create an instance of AlloyDbSettings from a JSON string
alloy_db_settings_instance = AlloyDbSettings.from_json(json)
# print the JSON string representation of the object
print(AlloyDbSettings.to_json())

# convert the object into a dict
alloy_db_settings_dict = alloy_db_settings_instance.to_dict()
# create an instance of AlloyDbSettings from a dict
alloy_db_settings_from_dict = AlloyDbSettings.from_dict(alloy_db_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


