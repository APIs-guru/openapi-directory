# ListAllLicenses200ResponseResultsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dependencies** | [**List[ListAllLicenses200ResponseResultsInnerDependenciesInner]**](ListAllLicenses200ResponseResultsInnerDependenciesInner.md) | The dependencies of projects in the organization which have the license | 
**id** | **str** | The identifier of the license | 
**instructions** | **str** | Custom instructions assigned to this license | [optional] 
**projects** | [**List[ListAllDependencies200ResponseResultsInnerProjectsInner]**](ListAllDependencies200ResponseResultsInnerProjectsInner.md) | The projects which contain the license | 
**severity** | **str** | The severity assigned to this license | [optional] 

## Example

```python
from openapi_client.models.list_all_licenses200_response_results_inner import ListAllLicenses200ResponseResultsInner

# TODO update the JSON string below
json = "{}"
# create an instance of ListAllLicenses200ResponseResultsInner from a JSON string
list_all_licenses200_response_results_inner_instance = ListAllLicenses200ResponseResultsInner.from_json(json)
# print the JSON string representation of the object
print(ListAllLicenses200ResponseResultsInner.to_json())

# convert the object into a dict
list_all_licenses200_response_results_inner_dict = list_all_licenses200_response_results_inner_instance.to_dict()
# create an instance of ListAllLicenses200ResponseResultsInner from a dict
list_all_licenses200_response_results_inner_from_dict = ListAllLicenses200ResponseResultsInner.from_dict(list_all_licenses200_response_results_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


