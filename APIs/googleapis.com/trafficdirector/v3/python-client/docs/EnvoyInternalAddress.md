# EnvoyInternalAddress

The address represents an envoy internal listener. [#comment: 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**endpoint_id** | **str** | Specifies an endpoint identifier to distinguish between multiple endpoints for the same internal listener in a single upstream pool. Only used in the upstream addresses for tracking changes to individual endpoints. This, for example, may be set to the final destination IP for the target internal listener. | [optional] 
**server_listener_name** | **str** | Specifies the :ref:&#x60;name &#x60; of the internal listener. | [optional] 

## Example

```python
from openapi_client.models.envoy_internal_address import EnvoyInternalAddress

# TODO update the JSON string below
json = "{}"
# create an instance of EnvoyInternalAddress from a JSON string
envoy_internal_address_instance = EnvoyInternalAddress.from_json(json)
# print the JSON string representation of the object
print(EnvoyInternalAddress.to_json())

# convert the object into a dict
envoy_internal_address_dict = envoy_internal_address_instance.to_dict()
# create an instance of EnvoyInternalAddress from a dict
envoy_internal_address_from_dict = EnvoyInternalAddress.from_dict(envoy_internal_address_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


