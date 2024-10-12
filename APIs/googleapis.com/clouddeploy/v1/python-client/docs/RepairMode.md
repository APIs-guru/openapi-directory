# RepairMode

Configuration of the repair action.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**retry** | [**Retry**](Retry.md) |  | [optional] 
**rollback** | [**Rollback**](Rollback.md) |  | [optional] 

## Example

```python
from openapi_client.models.repair_mode import RepairMode

# TODO update the JSON string below
json = "{}"
# create an instance of RepairMode from a JSON string
repair_mode_instance = RepairMode.from_json(json)
# print the JSON string representation of the object
print(RepairMode.to_json())

# convert the object into a dict
repair_mode_dict = repair_mode_instance.to_dict()
# create an instance of RepairMode from a dict
repair_mode_from_dict = RepairMode.from_dict(repair_mode_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


