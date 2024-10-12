# RecoveryPointResourceList

The list of RecoveryPoint resources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[RecoveryPointResource]**](RecoveryPointResource.md) | The list of resources. | [optional] 
**next_link** | **str** | The URI to GET the next page of resources. Call ListNext() gets the next page of resources. | [optional] 

## Example

```python
from openapi_client.models.recovery_point_resource_list import RecoveryPointResourceList

# TODO update the JSON string below
json = "{}"
# create an instance of RecoveryPointResourceList from a JSON string
recovery_point_resource_list_instance = RecoveryPointResourceList.from_json(json)
# print the JSON string representation of the object
print(RecoveryPointResourceList.to_json())

# convert the object into a dict
recovery_point_resource_list_dict = recovery_point_resource_list_instance.to_dict()
# create an instance of RecoveryPointResourceList from a dict
recovery_point_resource_list_from_dict = RecoveryPointResourceList.from_dict(recovery_point_resource_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


