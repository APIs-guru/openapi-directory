# Destination

Specification of traffic destination attributes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hosts** | **List[str]** | Required. List of host names to match. Matched against the \&quot;:authority\&quot; header in http requests. At least one host should match. Each host can be an exact match, or a prefix match (example \&quot;mydomain.*\&quot;) or a suffix match (example \&quot;*.myorg.com\&quot;) or a presence (any) match \&quot;*\&quot;. | [optional] 
**http_header_match** | [**HttpHeaderMatch**](HttpHeaderMatch.md) |  | [optional] 
**methods** | **List[str]** | Optional. A list of HTTP methods to match. At least one method should match. Should not be set for gRPC services. | [optional] 
**ports** | **List[int]** | Required. List of destination ports to match. At least one port should match. | [optional] 

## Example

```python
from openapi_client.models.destination import Destination

# TODO update the JSON string below
json = "{}"
# create an instance of Destination from a JSON string
destination_instance = Destination.from_json(json)
# print the JSON string representation of the object
print(Destination.to_json())

# convert the object into a dict
destination_dict = destination_instance.to_dict()
# create an instance of Destination from a dict
destination_from_dict = Destination.from_dict(destination_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


