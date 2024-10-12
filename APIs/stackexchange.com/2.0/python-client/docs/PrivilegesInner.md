# PrivilegesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** |  | [optional] 
**reputation** | **int** |  | [optional] 
**short_description** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.privileges_inner import PrivilegesInner

# TODO update the JSON string below
json = "{}"
# create an instance of PrivilegesInner from a JSON string
privileges_inner_instance = PrivilegesInner.from_json(json)
# print the JSON string representation of the object
print(PrivilegesInner.to_json())

# convert the object into a dict
privileges_inner_dict = privileges_inner_instance.to_dict()
# create an instance of PrivilegesInner from a dict
privileges_inner_from_dict = PrivilegesInner.from_dict(privileges_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


