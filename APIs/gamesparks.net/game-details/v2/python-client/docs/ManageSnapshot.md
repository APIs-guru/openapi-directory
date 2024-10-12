# ManageSnapshot


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_date** | **datetime** |  | [optional] 
**description** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**published** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.manage_snapshot import ManageSnapshot

# TODO update the JSON string below
json = "{}"
# create an instance of ManageSnapshot from a JSON string
manage_snapshot_instance = ManageSnapshot.from_json(json)
# print the JSON string representation of the object
print(ManageSnapshot.to_json())

# convert the object into a dict
manage_snapshot_dict = manage_snapshot_instance.to_dict()
# create an instance of ManageSnapshot from a dict
manage_snapshot_from_dict = ManageSnapshot.from_dict(manage_snapshot_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


