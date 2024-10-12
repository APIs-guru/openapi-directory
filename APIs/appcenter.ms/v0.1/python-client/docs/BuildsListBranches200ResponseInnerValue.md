# BuildsListBranches200ResponseInnerValue

The branch build core properties

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**branch** | [**BuildsListBranches200ResponseInnerValueBranch**](BuildsListBranches200ResponseInnerValueBranch.md) |  | [optional] 
**enabled** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.builds_list_branches200_response_inner_value import BuildsListBranches200ResponseInnerValue

# TODO update the JSON string below
json = "{}"
# create an instance of BuildsListBranches200ResponseInnerValue from a JSON string
builds_list_branches200_response_inner_value_instance = BuildsListBranches200ResponseInnerValue.from_json(json)
# print the JSON string representation of the object
print(BuildsListBranches200ResponseInnerValue.to_json())

# convert the object into a dict
builds_list_branches200_response_inner_value_dict = builds_list_branches200_response_inner_value_instance.to_dict()
# create an instance of BuildsListBranches200ResponseInnerValue from a dict
builds_list_branches200_response_inner_value_from_dict = BuildsListBranches200ResponseInnerValue.from_dict(builds_list_branches200_response_inner_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


