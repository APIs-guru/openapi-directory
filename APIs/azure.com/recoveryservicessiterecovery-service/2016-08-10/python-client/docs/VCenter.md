# VCenter

vCenter definition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**VCenterProperties**](VCenterProperties.md) |  | [optional] 
**id** | **str** | Resource Id | [optional] [readonly] 
**location** | **str** | Resource Location | [optional] 
**name** | **str** | Resource Name | [optional] [readonly] 
**type** | **str** | Resource Type | [optional] [readonly] 

## Example

```python
from openapi_client.models.v_center import VCenter

# TODO update the JSON string below
json = "{}"
# create an instance of VCenter from a JSON string
v_center_instance = VCenter.from_json(json)
# print the JSON string representation of the object
print(VCenter.to_json())

# convert the object into a dict
v_center_dict = v_center_instance.to_dict()
# create an instance of VCenter from a dict
v_center_from_dict = VCenter.from_dict(v_center_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


