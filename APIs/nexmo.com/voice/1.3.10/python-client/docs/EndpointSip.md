# EndpointSip

Connect to a SIP Endpoint

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | The type of connection. Must be &#x60;sip&#x60; | 
**uri** | **str** | The SIP URI to connect to | [optional] 

## Example

```python
from openapi_client.models.endpoint_sip import EndpointSip

# TODO update the JSON string below
json = "{}"
# create an instance of EndpointSip from a JSON string
endpoint_sip_instance = EndpointSip.from_json(json)
# print the JSON string representation of the object
print(EndpointSip.to_json())

# convert the object into a dict
endpoint_sip_dict = endpoint_sip_instance.to_dict()
# create an instance of EndpointSip from a dict
endpoint_sip_from_dict = EndpointSip.from_dict(endpoint_sip_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


