# SourceRepositoryUpdateParameters

The properties for updating the source code repository configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_commit_trigger_enabled** | **bool** | The value of this property indicates whether the source control commit trigger is enabled or not. | [optional] 
**source_control_auth_properties** | [**SourceControlAuthInfo**](SourceControlAuthInfo.md) |  | [optional] 

## Example

```python
from openapi_client.models.source_repository_update_parameters import SourceRepositoryUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of SourceRepositoryUpdateParameters from a JSON string
source_repository_update_parameters_instance = SourceRepositoryUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(SourceRepositoryUpdateParameters.to_json())

# convert the object into a dict
source_repository_update_parameters_dict = source_repository_update_parameters_instance.to_dict()
# create an instance of SourceRepositoryUpdateParameters from a dict
source_repository_update_parameters_from_dict = SourceRepositoryUpdateParameters.from_dict(source_repository_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


