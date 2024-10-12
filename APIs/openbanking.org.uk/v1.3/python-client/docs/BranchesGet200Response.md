# BranchesGet200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[Branch]**](Branch.md) |  | 
**meta** | [**MetaData**](MetaData.md) |  | 

## Example

```python
from openapi_client.models.branches_get200_response import BranchesGet200Response

# TODO update the JSON string below
json = "{}"
# create an instance of BranchesGet200Response from a JSON string
branches_get200_response_instance = BranchesGet200Response.from_json(json)
# print the JSON string representation of the object
print(BranchesGet200Response.to_json())

# convert the object into a dict
branches_get200_response_dict = branches_get200_response_instance.to_dict()
# create an instance of BranchesGet200Response from a dict
branches_get200_response_from_dict = BranchesGet200Response.from_dict(branches_get200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


