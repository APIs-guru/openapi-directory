# IpMapping

Database instance IP mapping

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ip_address** | **str** | The IP address assigned. | [optional] 
**time_to_retire** | **str** | The due time for this IP to be retired in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example &#x60;2012-11-15T16:19:00.094Z&#x60;. This field is only available when the IP is scheduled to be retired. | [optional] 
**type** | **str** | The type of this IP address. A &#x60;PRIMARY&#x60; address is a public address that can accept incoming connections. A &#x60;PRIVATE&#x60; address is a private address that can accept incoming connections. An &#x60;OUTGOING&#x60; address is the source address of connections originating from the instance, if supported. | [optional] 

## Example

```python
from openapi_client.models.ip_mapping import IpMapping

# TODO update the JSON string below
json = "{}"
# create an instance of IpMapping from a JSON string
ip_mapping_instance = IpMapping.from_json(json)
# print the JSON string representation of the object
print(IpMapping.to_json())

# convert the object into a dict
ip_mapping_dict = ip_mapping_instance.to_dict()
# create an instance of IpMapping from a dict
ip_mapping_from_dict = IpMapping.from_dict(ip_mapping_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


