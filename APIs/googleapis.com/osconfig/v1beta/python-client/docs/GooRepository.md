# GooRepository

Represents a Goo package repository. These is added to a repo file that is stored at C:/ProgramData/GooGet/repos/google_osconfig.repo.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Required. The name of the repository. | [optional] 
**url** | **str** | Required. The url of the repository. | [optional] 

## Example

```python
from openapi_client.models.goo_repository import GooRepository

# TODO update the JSON string below
json = "{}"
# create an instance of GooRepository from a JSON string
goo_repository_instance = GooRepository.from_json(json)
# print the JSON string representation of the object
print(GooRepository.to_json())

# convert the object into a dict
goo_repository_dict = goo_repository_instance.to_dict()
# create an instance of GooRepository from a dict
goo_repository_from_dict = GooRepository.from_dict(goo_repository_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


