# Instance

An Instance represents the instance resources of the Registry. Currently, only one instance is allowed for each project.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**build** | [**Build**](Build.md) |  | [optional] 
**config** | [**Config**](Config.md) |  | [optional] 
**create_time** | **str** | Output only. Creation timestamp. | [optional] [readonly] 
**name** | **str** | Format: &#x60;projects/*/locations/*/instance&#x60;. Currently only &#x60;locations/global&#x60; is supported. | [optional] 
**state** | **str** | Output only. The current state of the Instance. | [optional] [readonly] 
**state_message** | **str** | Output only. Extra information of Instance.State if the state is &#x60;FAILED&#x60;. | [optional] [readonly] 
**update_time** | **str** | Output only. Last update timestamp. | [optional] [readonly] 

## Example

```python
from openapi_client.models.instance import Instance

# TODO update the JSON string below
json = "{}"
# create an instance of Instance from a JSON string
instance_instance = Instance.from_json(json)
# print the JSON string representation of the object
print(Instance.to_json())

# convert the object into a dict
instance_dict = instance_instance.to_dict()
# create an instance of Instance from a dict
instance_from_dict = Instance.from_dict(instance_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


