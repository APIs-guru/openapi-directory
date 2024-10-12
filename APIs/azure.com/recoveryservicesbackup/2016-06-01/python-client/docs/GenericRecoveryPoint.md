# GenericRecoveryPoint

Generic backup copy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**friendly_name** | **str** | Friendly name of the backup copy. | [optional] 
**recovery_point_additional_info** | **str** | Additional information associated with this backup copy. | [optional] 
**recovery_point_time** | **datetime** | The time when this backup copy was created. | [optional] 
**recovery_point_type** | **str** | Type of the backup copy. | [optional] 

## Example

```python
from openapi_client.models.generic_recovery_point import GenericRecoveryPoint

# TODO update the JSON string below
json = "{}"
# create an instance of GenericRecoveryPoint from a JSON string
generic_recovery_point_instance = GenericRecoveryPoint.from_json(json)
# print the JSON string representation of the object
print(GenericRecoveryPoint.to_json())

# convert the object into a dict
generic_recovery_point_dict = generic_recovery_point_instance.to_dict()
# create an instance of GenericRecoveryPoint from a dict
generic_recovery_point_from_dict = GenericRecoveryPoint.from_dict(generic_recovery_point_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


