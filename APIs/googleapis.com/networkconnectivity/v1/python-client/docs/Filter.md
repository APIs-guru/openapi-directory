# Filter

Filter matches L4 traffic.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dest_range** | **str** | Optional. The destination IP range of outgoing packets that this policy-based route applies to. Default is \&quot;0.0.0.0/0\&quot; if protocol version is IPv4. | [optional] 
**ip_protocol** | **str** | Optional. The IP protocol that this policy-based route applies to. Valid values are &#39;TCP&#39;, &#39;UDP&#39;, and &#39;ALL&#39;. Default is &#39;ALL&#39;. | [optional] 
**protocol_version** | **str** | Required. Internet protocol versions this policy-based route applies to. For this version, only IPV4 is supported. | [optional] 
**src_range** | **str** | Optional. The source IP range of outgoing packets that this policy-based route applies to. Default is \&quot;0.0.0.0/0\&quot; if protocol version is IPv4. | [optional] 

## Example

```python
from openapi_client.models.filter import Filter

# TODO update the JSON string below
json = "{}"
# create an instance of Filter from a JSON string
filter_instance = Filter.from_json(json)
# print the JSON string representation of the object
print(Filter.to_json())

# convert the object into a dict
filter_dict = filter_instance.to_dict()
# create an instance of Filter from a dict
filter_from_dict = Filter.from_dict(filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


