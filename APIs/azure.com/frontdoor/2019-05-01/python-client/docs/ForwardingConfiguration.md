# ForwardingConfiguration

Describes Forwarding Route.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backend_pool** | **object** | Reference to another subresource. | [optional] 
**cache_configuration** | [**CacheConfiguration**](CacheConfiguration.md) |  | [optional] 
**custom_forwarding_path** | **str** | A custom path used to rewrite resource paths matched by this rule. Leave empty to use incoming path. | [optional] 
**forwarding_protocol** | **str** | Protocol this rule will use when forwarding traffic to backends. | [optional] 

## Example

```python
from openapi_client.models.forwarding_configuration import ForwardingConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of ForwardingConfiguration from a JSON string
forwarding_configuration_instance = ForwardingConfiguration.from_json(json)
# print the JSON string representation of the object
print(ForwardingConfiguration.to_json())

# convert the object into a dict
forwarding_configuration_dict = forwarding_configuration_instance.to_dict()
# create an instance of ForwardingConfiguration from a dict
forwarding_configuration_from_dict = ForwardingConfiguration.from_dict(forwarding_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


