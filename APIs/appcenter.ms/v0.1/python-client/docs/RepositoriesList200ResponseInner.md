# RepositoriesList200ResponseInner

The source repository

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clone_url** | **str** | URL used to clone the repository | [optional] 
**name** | **str** | The repository name | [optional] 

## Example

```python
from openapi_client.models.repositories_list200_response_inner import RepositoriesList200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of RepositoriesList200ResponseInner from a JSON string
repositories_list200_response_inner_instance = RepositoriesList200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(RepositoriesList200ResponseInner.to_json())

# convert the object into a dict
repositories_list200_response_inner_dict = repositories_list200_response_inner_instance.to_dict()
# create an instance of RepositoriesList200ResponseInner from a dict
repositories_list200_response_inner_from_dict = RepositoriesList200ResponseInner.from_dict(repositories_list200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


