# PositionRole


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_date** | **date** |  | [optional] 
**start_date** | **date** |  | [optional] 
**summary** | **str** |  | [optional] 
**title** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.position_role import PositionRole

# TODO update the JSON string below
json = "{}"
# create an instance of PositionRole from a JSON string
position_role_instance = PositionRole.from_json(json)
# print the JSON string representation of the object
print(PositionRole.to_json())

# convert the object into a dict
position_role_dict = position_role_instance.to_dict()
# create an instance of PositionRole from a dict
position_role_from_dict = PositionRole.from_dict(position_role_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


