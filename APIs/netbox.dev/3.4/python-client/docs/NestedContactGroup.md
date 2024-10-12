# NestedContactGroup


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**depth** | **int** |  | [optional] [readonly] 
**contact_count** | **int** |  | [optional] [readonly] 
**display** | **str** |  | [optional] [readonly] 
**id** | **int** |  | [optional] [readonly] 
**name** | **str** |  | 
**slug** | **str** |  | 
**url** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.nested_contact_group import NestedContactGroup

# TODO update the JSON string below
json = "{}"
# create an instance of NestedContactGroup from a JSON string
nested_contact_group_instance = NestedContactGroup.from_json(json)
# print the JSON string representation of the object
print(NestedContactGroup.to_json())

# convert the object into a dict
nested_contact_group_dict = nested_contact_group_instance.to_dict()
# create an instance of NestedContactGroup from a dict
nested_contact_group_from_dict = NestedContactGroup.from_dict(nested_contact_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


