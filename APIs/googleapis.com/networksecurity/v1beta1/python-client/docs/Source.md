# Source

Specification of traffic source attributes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ip_blocks** | **List[str]** | Optional. List of CIDR ranges to match based on source IP address. At least one IP block should match. Single IP (e.g., \&quot;1.2.3.4\&quot;) and CIDR (e.g., \&quot;1.2.3.0/24\&quot;) are supported. Authorization based on source IP alone should be avoided. The IP addresses of any load balancers or proxies should be considered untrusted. | [optional] 
**principals** | **List[str]** | Optional. List of peer identities to match for authorization. At least one principal should match. Each peer can be an exact match, or a prefix match (example, \&quot;namespace/*\&quot;) or a suffix match (example, \&quot;*/service-account\&quot;) or a presence match \&quot;*\&quot;. Authorization based on the principal name without certificate validation (configured by ServerTlsPolicy resource) is considered insecure. | [optional] 

## Example

```python
from openapi_client.models.source import Source

# TODO update the JSON string below
json = "{}"
# create an instance of Source from a JSON string
source_instance = Source.from_json(json)
# print the JSON string representation of the object
print(Source.to_json())

# convert the object into a dict
source_dict = source_instance.to_dict()
# create an instance of Source from a dict
source_from_dict = Source.from_dict(source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


