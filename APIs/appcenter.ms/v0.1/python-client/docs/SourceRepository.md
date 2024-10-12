# SourceRepository

The source repository

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clone_url** | **str** | URL used to clone the repository | [optional] 
**name** | **str** | The repository name | [optional] 

## Example

```python
from openapi_client.models.source_repository import SourceRepository

# TODO update the JSON string below
json = "{}"
# create an instance of SourceRepository from a JSON string
source_repository_instance = SourceRepository.from_json(json)
# print the JSON string representation of the object
print(SourceRepository.to_json())

# convert the object into a dict
source_repository_dict = source_repository_instance.to_dict()
# create an instance of SourceRepository from a dict
source_repository_from_dict = SourceRepository.from_dict(source_repository_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


