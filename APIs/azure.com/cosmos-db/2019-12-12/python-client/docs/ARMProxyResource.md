# ARMProxyResource

The resource model definition for a ARM proxy resource. It will have everything other than required location and tags

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The unique resource identifier of the database account. | [optional] [readonly] 
**name** | **str** | The name of the database account. | [optional] [readonly] 
**type** | **str** | The type of Azure resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.arm_proxy_resource import ARMProxyResource

# TODO update the JSON string below
json = "{}"
# create an instance of ARMProxyResource from a JSON string
arm_proxy_resource_instance = ARMProxyResource.from_json(json)
# print the JSON string representation of the object
print(ARMProxyResource.to_json())

# convert the object into a dict
arm_proxy_resource_dict = arm_proxy_resource_instance.to_dict()
# create an instance of ARMProxyResource from a dict
arm_proxy_resource_from_dict = ARMProxyResource.from_dict(arm_proxy_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


