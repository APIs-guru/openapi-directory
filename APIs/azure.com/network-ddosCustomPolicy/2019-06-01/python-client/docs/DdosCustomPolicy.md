# DdosCustomPolicy

A DDoS custom policy in a resource group.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | A unique read-only string that changes whenever the resource is updated. | [optional] [readonly] 
**properties** | [**DdosCustomPolicyPropertiesFormat**](DdosCustomPolicyPropertiesFormat.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] 
**location** | **str** | Resource location. | [optional] 
**name** | **str** | Resource name. | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags. | [optional] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.ddos_custom_policy import DdosCustomPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of DdosCustomPolicy from a JSON string
ddos_custom_policy_instance = DdosCustomPolicy.from_json(json)
# print the JSON string representation of the object
print(DdosCustomPolicy.to_json())

# convert the object into a dict
ddos_custom_policy_dict = ddos_custom_policy_instance.to_dict()
# create an instance of DdosCustomPolicy from a dict
ddos_custom_policy_from_dict = DdosCustomPolicy.from_dict(ddos_custom_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


