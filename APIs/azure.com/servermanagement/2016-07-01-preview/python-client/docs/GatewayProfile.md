# GatewayProfile

JSON properties that the gateway service uses know how to communicate with the resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_plane_service_base_address** | **str** | The Dataplane connection URL. | [optional] 
**environment** | **str** | The environment for the gateway (DEV, DogFood, or Production). | [optional] 
**gateway_id** | **str** | The ID of the gateway. | [optional] 
**messaging_account** | **str** | Messaging Account. | [optional] 
**messaging_key** | **str** | Messaging Key. | [optional] 
**messaging_namespace** | **str** | Messaging namespace. | [optional] 
**request_queue** | **str** | Request queue name. | [optional] 
**response_topic** | **str** | Response topic name. | [optional] 
**status_blob_signature** | **str** | The gateway status blob SAS URL. | [optional] 
**upgrade_manifest_url** | **str** | Gateway upgrade manifest URL. | [optional] 

## Example

```python
from openapi_client.models.gateway_profile import GatewayProfile

# TODO update the JSON string below
json = "{}"
# create an instance of GatewayProfile from a JSON string
gateway_profile_instance = GatewayProfile.from_json(json)
# print the JSON string representation of the object
print(GatewayProfile.to_json())

# convert the object into a dict
gateway_profile_dict = gateway_profile_instance.to_dict()
# create an instance of GatewayProfile from a dict
gateway_profile_from_dict = GatewayProfile.from_dict(gateway_profile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


