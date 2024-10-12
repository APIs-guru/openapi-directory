# TransportBandwidthJsonldPost

The TransportBandwidth resource is a collection of transports that carry dispatched alerts to the external Bandwidth service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bandwidth_account_id** | **str** | The account ID value for the Bandwidth service. | 
**bandwidth_application_id** | **str** | The application ID value for the Bandwidth service. | 
**bandwidth_from** | **str** | The from value for the Bandwidth service. | 
**bandwidth_password** | **str** | The password for the Bandwidth service. Stored in encrypted format. | 
**bandwidth_username** | **str** | The username for the Bandwidth service. | 
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**partition** | **str** | The partition that contains this resource instance. The resource cannot be moved to another partition. | 
**transport_name** | **str** | The name of the transport. | 

## Example

```python
from openapi_client.models.transport_bandwidth_jsonld_post import TransportBandwidthJsonldPost

# TODO update the JSON string below
json = "{}"
# create an instance of TransportBandwidthJsonldPost from a JSON string
transport_bandwidth_jsonld_post_instance = TransportBandwidthJsonldPost.from_json(json)
# print the JSON string representation of the object
print(TransportBandwidthJsonldPost.to_json())

# convert the object into a dict
transport_bandwidth_jsonld_post_dict = transport_bandwidth_jsonld_post_instance.to_dict()
# create an instance of TransportBandwidthJsonldPost from a dict
transport_bandwidth_jsonld_post_from_dict = TransportBandwidthJsonldPost.from_dict(transport_bandwidth_jsonld_post_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


