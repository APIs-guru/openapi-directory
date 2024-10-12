# TransportFortySixElksJsonldPost

The TransportFortySixElks resource is a collection of transports that carry dispatched alerts to the external 46elks service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**forty_six_elks_api_password** | **str** | The API password for the 46elks service. Stored in encrypted format. | 
**forty_six_elks_api_username** | **str** | The API username for the 46elks service. | 
**forty_six_elks_from** | **str** | The alphanumeric originator for the message to appear to originate from for the 46elks service. | 
**partition** | **str** | The partition that contains this resource instance. The resource cannot be moved to another partition. | 
**transport_name** | **str** | The name of the transport. | 

## Example

```python
from openapi_client.models.transport_forty_six_elks_jsonld_post import TransportFortySixElksJsonldPost

# TODO update the JSON string below
json = "{}"
# create an instance of TransportFortySixElksJsonldPost from a JSON string
transport_forty_six_elks_jsonld_post_instance = TransportFortySixElksJsonldPost.from_json(json)
# print the JSON string representation of the object
print(TransportFortySixElksJsonldPost.to_json())

# convert the object into a dict
transport_forty_six_elks_jsonld_post_dict = transport_forty_six_elks_jsonld_post_instance.to_dict()
# create an instance of TransportFortySixElksJsonldPost from a dict
transport_forty_six_elks_jsonld_post_from_dict = TransportFortySixElksJsonldPost.from_dict(transport_forty_six_elks_jsonld_post_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


