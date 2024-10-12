# TransportMobytJsonldGet

The TransportMobyt resource is a collection of transports that carry dispatched alerts to the external Mobyt service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**context** | [**AlertLogJsonldGetContext**](AlertLogJsonldGetContext.md) |  | [optional] 
**id** | **str** |  | [optional] [readonly] 
**type** | **str** |  | [optional] [readonly] 
**created_at** | **datetime** | When the resource instance was created. This date-time is in the UTC timezone. | [optional] 
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**id** | **str** | The unique identifier of the resource instance. | [optional] [readonly] 
**mobyt_access_token** | **str** | The access token for the Mobyt service. Stored in encrypted format. | 
**mobyt_from** | **str** | The sender for the Mobyt service. | 
**mobyt_type_quality** | **str** | The quality of your message: &#39;N&#39; for high, &#39;L&#39; for medium, &#39;LL&#39; for low, for the Mobyt service. | 
**mobyt_user_key** | **str** | The user key for the Mobyt service. | 
**partition** | **str** | The partition that contains this resource instance. The resource cannot be moved to another partition. | 
**resource_owner** | **str** | The name of the person who owns this resource. | [optional] 
**transport_name** | **str** | The name of the transport. | 

## Example

```python
from openapi_client.models.transport_mobyt_jsonld_get import TransportMobytJsonldGet

# TODO update the JSON string below
json = "{}"
# create an instance of TransportMobytJsonldGet from a JSON string
transport_mobyt_jsonld_get_instance = TransportMobytJsonldGet.from_json(json)
# print the JSON string representation of the object
print(TransportMobytJsonldGet.to_json())

# convert the object into a dict
transport_mobyt_jsonld_get_dict = transport_mobyt_jsonld_get_instance.to_dict()
# create an instance of TransportMobytJsonldGet from a dict
transport_mobyt_jsonld_get_from_dict = TransportMobytJsonldGet.from_dict(transport_mobyt_jsonld_get_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


