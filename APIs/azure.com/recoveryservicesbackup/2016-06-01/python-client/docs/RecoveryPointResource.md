# RecoveryPointResource

The base class for backup copies. Workload-specific backup copies are derived from this class.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**RecoveryPoint**](RecoveryPoint.md) |  | [optional] 
**e_tag** | **str** | Optional ETag. | [optional] 
**id** | **str** | Resource ID represents the complete path to the resource. | [optional] 
**location** | **str** | Resource location. | [optional] 
**name** | **str** | Resource name associated with the resource. | [optional] 
**tags** | **Dict[str, str]** | Resource tags. | [optional] 
**type** | **str** | Resource type represents the complete path of the form Namespace/ResourceType/ResourceType/... | [optional] 

## Example

```python
from openapi_client.models.recovery_point_resource import RecoveryPointResource

# TODO update the JSON string below
json = "{}"
# create an instance of RecoveryPointResource from a JSON string
recovery_point_resource_instance = RecoveryPointResource.from_json(json)
# print the JSON string representation of the object
print(RecoveryPointResource.to_json())

# convert the object into a dict
recovery_point_resource_dict = recovery_point_resource_instance.to_dict()
# create an instance of RecoveryPointResource from a dict
recovery_point_resource_from_dict = RecoveryPointResource.from_dict(recovery_point_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


