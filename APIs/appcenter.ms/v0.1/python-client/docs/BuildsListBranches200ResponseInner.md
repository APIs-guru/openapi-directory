# BuildsListBranches200ResponseInner

The branch build status

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**configured** | **bool** |  | 
**last_build** | [**BuildsListBranches200ResponseInnerLastBuild**](BuildsListBranches200ResponseInnerLastBuild.md) |  | [optional] 

## Example

```python
from openapi_client.models.builds_list_branches200_response_inner import BuildsListBranches200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of BuildsListBranches200ResponseInner from a JSON string
builds_list_branches200_response_inner_instance = BuildsListBranches200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(BuildsListBranches200ResponseInner.to_json())

# convert the object into a dict
builds_list_branches200_response_inner_dict = builds_list_branches200_response_inner_instance.to_dict()
# create an instance of BuildsListBranches200ResponseInner from a dict
builds_list_branches200_response_inner_from_dict = BuildsListBranches200ResponseInner.from_dict(builds_list_branches200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


