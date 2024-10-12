# SipAddress

A person's SIP address. Session Initial Protocol addresses are used for VoIP communications to make voice or video calls over the internet.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**formatted_type** | **str** | Output only. The type of the SIP address translated and formatted in the viewer&#39;s account locale or the &#x60;Accept-Language&#x60; HTTP header locale. | [optional] [readonly] 
**metadata** | [**FieldMetadata**](FieldMetadata.md) |  | [optional] 
**type** | **str** | The type of the SIP address. The type can be custom or or one of these predefined values: * &#x60;home&#x60; * &#x60;work&#x60; * &#x60;mobile&#x60; * &#x60;other&#x60; | [optional] 
**value** | **str** | The SIP address in the [RFC 3261 19.1](https://tools.ietf.org/html/rfc3261#section-19.1) SIP URI format. | [optional] 

## Example

```python
from openapi_client.models.sip_address import SipAddress

# TODO update the JSON string below
json = "{}"
# create an instance of SipAddress from a JSON string
sip_address_instance = SipAddress.from_json(json)
# print the JSON string representation of the object
print(SipAddress.to_json())

# convert the object into a dict
sip_address_dict = sip_address_instance.to_dict()
# create an instance of SipAddress from a dict
sip_address_from_dict = SipAddress.from_dict(sip_address_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


