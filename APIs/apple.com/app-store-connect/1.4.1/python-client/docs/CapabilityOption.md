# CapabilityOption


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** |  | [optional] 
**enabled** | **bool** |  | [optional] 
**enabled_by_default** | **bool** |  | [optional] 
**key** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**supports_wildcard** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.capability_option import CapabilityOption

# TODO update the JSON string below
json = "{}"
# create an instance of CapabilityOption from a JSON string
capability_option_instance = CapabilityOption.from_json(json)
# print the JSON string representation of the object
print(CapabilityOption.to_json())

# convert the object into a dict
capability_option_dict = capability_option_instance.to_dict()
# create an instance of CapabilityOption from a dict
capability_option_from_dict = CapabilityOption.from_dict(capability_option_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


