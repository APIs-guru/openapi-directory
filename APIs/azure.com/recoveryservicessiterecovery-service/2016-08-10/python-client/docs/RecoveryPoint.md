# RecoveryPoint

Base class representing a recovery point.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**RecoveryPointProperties**](RecoveryPointProperties.md) |  | [optional] 
**id** | **str** | Resource Id | [optional] [readonly] 
**location** | **str** | Resource Location | [optional] 
**name** | **str** | Resource Name | [optional] [readonly] 
**type** | **str** | Resource Type | [optional] [readonly] 

## Example

```python
from openapi_client.models.recovery_point import RecoveryPoint

# TODO update the JSON string below
json = "{}"
# create an instance of RecoveryPoint from a JSON string
recovery_point_instance = RecoveryPoint.from_json(json)
# print the JSON string representation of the object
print(RecoveryPoint.to_json())

# convert the object into a dict
recovery_point_dict = recovery_point_instance.to_dict()
# create an instance of RecoveryPoint from a dict
recovery_point_from_dict = RecoveryPoint.from_dict(recovery_point_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


