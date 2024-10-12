# TransportOctopushPost

The TransportOctopush resource is a collection of transports that carry dispatched alerts to the external Octopush service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**octopush_api_key** | **str** | The API key for the Octopush service. Stored in encrypted format. | 
**octopush_from** | **str** | The sender value for the Octopush service. | 
**octopush_type** | **str** | The SMS type (&#39;XXX&#39; &#x3D; SMS LowCost; &#39;FR&#39; &#x3D; SMS Premium; &#39;WWW&#39; &#x3D; SMS World) for the Octopush service. | 
**octopush_user_login** | **str** | The user login (email) for the Octopush service. | 
**partition** | **str** | The partition that contains this resource instance. The resource cannot be moved to another partition. | 
**transport_name** | **str** | The name of the transport. | 

## Example

```python
from openapi_client.models.transport_octopush_post import TransportOctopushPost

# TODO update the JSON string below
json = "{}"
# create an instance of TransportOctopushPost from a JSON string
transport_octopush_post_instance = TransportOctopushPost.from_json(json)
# print the JSON string representation of the object
print(TransportOctopushPost.to_json())

# convert the object into a dict
transport_octopush_post_dict = transport_octopush_post_instance.to_dict()
# create an instance of TransportOctopushPost from a dict
transport_octopush_post_from_dict = TransportOctopushPost.from_dict(transport_octopush_post_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


