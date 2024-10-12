# TransportMobytJsonldPut

The TransportMobyt resource is a collection of transports that carry dispatched alerts to the external Mobyt service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**mobyt_access_token** | **str** | The access token for the Mobyt service. Stored in encrypted format. | 
**mobyt_from** | **str** | The sender for the Mobyt service. | 
**mobyt_type_quality** | **str** | The quality of your message: &#39;N&#39; for high, &#39;L&#39; for medium, &#39;LL&#39; for low, for the Mobyt service. | 
**mobyt_user_key** | **str** | The user key for the Mobyt service. | 
**transport_name** | **str** | The name of the transport. | 

## Example

```python
from openapi_client.models.transport_mobyt_jsonld_put import TransportMobytJsonldPut

# TODO update the JSON string below
json = "{}"
# create an instance of TransportMobytJsonldPut from a JSON string
transport_mobyt_jsonld_put_instance = TransportMobytJsonldPut.from_json(json)
# print the JSON string representation of the object
print(TransportMobytJsonldPut.to_json())

# convert the object into a dict
transport_mobyt_jsonld_put_dict = transport_mobyt_jsonld_put_instance.to_dict()
# create an instance of TransportMobytJsonldPut from a dict
transport_mobyt_jsonld_put_from_dict = TransportMobytJsonldPut.from_dict(transport_mobyt_jsonld_put_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


