# ProtectionIntentResource

Base class for backup ProtectionIntent.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ProtectionIntent**](ProtectionIntent.md) |  | [optional] 
**e_tag** | **str** | Optional ETag. | [optional] 
**id** | **str** | Resource Id represents the complete path to the resource. | [optional] [readonly] 
**location** | **str** | Resource location. | [optional] 
**name** | **str** | Resource name associated with the resource. | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags. | [optional] 
**type** | **str** | Resource type represents the complete path of the form Namespace/ResourceType/ResourceType/... | [optional] [readonly] 

## Example

```python
from openapi_client.models.protection_intent_resource import ProtectionIntentResource

# TODO update the JSON string below
json = "{}"
# create an instance of ProtectionIntentResource from a JSON string
protection_intent_resource_instance = ProtectionIntentResource.from_json(json)
# print the JSON string representation of the object
print(ProtectionIntentResource.to_json())

# convert the object into a dict
protection_intent_resource_dict = protection_intent_resource_instance.to_dict()
# create an instance of ProtectionIntentResource from a dict
protection_intent_resource_from_dict = ProtectionIntentResource.from_dict(protection_intent_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


