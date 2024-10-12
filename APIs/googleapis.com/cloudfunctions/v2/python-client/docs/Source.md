# Source

The location of the function source code.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**git_uri** | **str** | If provided, get the source from GitHub repository. This option is valid only for GCF 1st Gen function. Example: https://github.com///blob// | [optional] 
**repo_source** | [**RepoSource**](RepoSource.md) |  | [optional] 
**storage_source** | [**StorageSource**](StorageSource.md) |  | [optional] 

## Example

```python
from openapi_client.models.source import Source

# TODO update the JSON string below
json = "{}"
# create an instance of Source from a JSON string
source_instance = Source.from_json(json)
# print the JSON string representation of the object
print(Source.to_json())

# convert the object into a dict
source_dict = source_instance.to_dict()
# create an instance of Source from a dict
source_from_dict = Source.from_dict(source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


