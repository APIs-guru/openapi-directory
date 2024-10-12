# TransportOctopushPatch

The TransportOctopush resource is a collection of transports that carry dispatched alerts to the external Octopush service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**octopush_api_key** | **str** | The API key for the Octopush service. Stored in encrypted format. | 
**octopush_from** | **str** | The sender value for the Octopush service. | 
**octopush_type** | **str** | The SMS type (&#39;XXX&#39; &#x3D; SMS LowCost; &#39;FR&#39; &#x3D; SMS Premium; &#39;WWW&#39; &#x3D; SMS World) for the Octopush service. | 
**octopush_user_login** | **str** | The user login (email) for the Octopush service. | 
**transport_name** | **str** | The name of the transport. | 

## Example

```python
from openapi_client.models.transport_octopush_patch import TransportOctopushPatch

# TODO update the JSON string below
json = "{}"
# create an instance of TransportOctopushPatch from a JSON string
transport_octopush_patch_instance = TransportOctopushPatch.from_json(json)
# print the JSON string representation of the object
print(TransportOctopushPatch.to_json())

# convert the object into a dict
transport_octopush_patch_dict = transport_octopush_patch_instance.to_dict()
# create an instance of TransportOctopushPatch from a dict
transport_octopush_patch_from_dict = TransportOctopushPatch.from_dict(transport_octopush_patch_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


