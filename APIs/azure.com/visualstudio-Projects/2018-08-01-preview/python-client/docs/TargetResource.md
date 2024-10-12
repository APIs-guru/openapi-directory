# TargetResource

Defines a single resource used as target for a VSTS pipeline.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authorization_reference** | **str** | Reference to the authorization info used to access the target resource. This value is used as a key into the global authorization details dictionary. | [optional] 
**id** | **str** | Unique identifier of the target resource. | 
**role** | **str** | Role of the target resource. | 

## Example

```python
from openapi_client.models.target_resource import TargetResource

# TODO update the JSON string below
json = "{}"
# create an instance of TargetResource from a JSON string
target_resource_instance = TargetResource.from_json(json)
# print the JSON string representation of the object
print(TargetResource.to_json())

# convert the object into a dict
target_resource_dict = target_resource_instance.to_dict()
# create an instance of TargetResource from a dict
target_resource_from_dict = TargetResource.from_dict(target_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


