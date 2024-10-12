# PagingPolicy

Paging policy fields

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contact_type** | **str** |  | [optional] 
**ext_id** | **str** |  | [optional] 
**order** | **int** |  | [optional] 
**timeout** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.paging_policy import PagingPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of PagingPolicy from a JSON string
paging_policy_instance = PagingPolicy.from_json(json)
# print the JSON string representation of the object
print(PagingPolicy.to_json())

# convert the object into a dict
paging_policy_dict = paging_policy_instance.to_dict()
# create an instance of PagingPolicy from a dict
paging_policy_from_dict = PagingPolicy.from_dict(paging_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


