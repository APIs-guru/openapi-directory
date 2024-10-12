# RecoveryPointCollection

Collection of recovery point details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The value of next link. | [optional] 
**value** | [**List[RecoveryPoint]**](RecoveryPoint.md) | The recovery point details. | [optional] 

## Example

```python
from openapi_client.models.recovery_point_collection import RecoveryPointCollection

# TODO update the JSON string below
json = "{}"
# create an instance of RecoveryPointCollection from a JSON string
recovery_point_collection_instance = RecoveryPointCollection.from_json(json)
# print the JSON string representation of the object
print(RecoveryPointCollection.to_json())

# convert the object into a dict
recovery_point_collection_dict = recovery_point_collection_instance.to_dict()
# create an instance of RecoveryPointCollection from a dict
recovery_point_collection_from_dict = RecoveryPointCollection.from_dict(recovery_point_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


