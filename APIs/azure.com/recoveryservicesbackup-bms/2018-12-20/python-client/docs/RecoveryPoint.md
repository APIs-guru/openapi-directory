# RecoveryPoint

Base class for backup copies. Workload-specific backup copies are derived from this class.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object_type** | **str** | This property will be used as the discriminator for deciding the specific types in the polymorphic chain of types. | 

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


