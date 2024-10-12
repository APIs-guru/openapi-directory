# RackRole


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**color** | **str** |  | [optional] 
**created** | **datetime** |  | [optional] [readonly] 
**custom_fields** | **object** |  | [optional] 
**description** | **str** |  | [optional] 
**display** | **str** |  | [optional] [readonly] 
**id** | **int** |  | [optional] [readonly] 
**last_updated** | **datetime** |  | [optional] [readonly] 
**name** | **str** |  | 
**rack_count** | **int** |  | [optional] [readonly] 
**slug** | **str** |  | 
**tags** | [**List[NestedTag]**](NestedTag.md) |  | [optional] 
**url** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.rack_role import RackRole

# TODO update the JSON string below
json = "{}"
# create an instance of RackRole from a JSON string
rack_role_instance = RackRole.from_json(json)
# print the JSON string representation of the object
print(RackRole.to_json())

# convert the object into a dict
rack_role_dict = rack_role_instance.to_dict()
# create an instance of RackRole from a dict
rack_role_from_dict = RackRole.from_dict(rack_role_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


