# RepositoryConfig

Configuration for dependency repositories

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pypi_repository_config** | [**PyPiRepositoryConfig**](PyPiRepositoryConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.repository_config import RepositoryConfig

# TODO update the JSON string below
json = "{}"
# create an instance of RepositoryConfig from a JSON string
repository_config_instance = RepositoryConfig.from_json(json)
# print the JSON string representation of the object
print(RepositoryConfig.to_json())

# convert the object into a dict
repository_config_dict = repository_config_instance.to_dict()
# create an instance of RepositoryConfig from a dict
repository_config_from_dict = RepositoryConfig.from_dict(repository_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


