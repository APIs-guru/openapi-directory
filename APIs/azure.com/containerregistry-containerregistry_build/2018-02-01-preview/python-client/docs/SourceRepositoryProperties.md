# SourceRepositoryProperties

The properties of the source code repository.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_commit_trigger_enabled** | **bool** | The value of this property indicates whether the source control commit trigger is enabled or not. | [optional] [default to False]
**repository_url** | **str** | The full URL to the source code repository | 
**source_control_auth_properties** | [**SourceControlAuthInfo**](SourceControlAuthInfo.md) |  | [optional] 
**source_control_type** | **str** | The type of source control service. | 

## Example

```python
from openapi_client.models.source_repository_properties import SourceRepositoryProperties

# TODO update the JSON string below
json = "{}"
# create an instance of SourceRepositoryProperties from a JSON string
source_repository_properties_instance = SourceRepositoryProperties.from_json(json)
# print the JSON string representation of the object
print(SourceRepositoryProperties.to_json())

# convert the object into a dict
source_repository_properties_dict = source_repository_properties_instance.to_dict()
# create an instance of SourceRepositoryProperties from a dict
source_repository_properties_from_dict = SourceRepositoryProperties.from_dict(source_repository_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


