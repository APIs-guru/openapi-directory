# Endpoint

An individual endpoint that provides a service. The service must already exist to create an endpoint.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **str** | Optional. An IPv4 or IPv6 address. Service Directory rejects bad addresses like: * &#x60;8.8.8&#x60; * &#x60;8.8.8.8:53&#x60; * &#x60;test:bad:address&#x60; * &#x60;[::1]&#x60; * &#x60;[::1]:8080&#x60; Limited to 45 characters. | [optional] 
**create_time** | **str** | Output only. The timestamp when the endpoint was created. | [optional] [readonly] 
**metadata** | **Dict[str, str]** | Optional. Metadata for the endpoint. This data can be consumed by service clients. Restrictions: * The entire metadata dictionary may contain up to 512 characters, spread accoss all key-value pairs. Metadata that goes beyond this limit are rejected * Valid metadata keys have two segments: an optional prefix and name, separated by a slash (/). The name segment is required and must be 63 characters or less, beginning and ending with an alphanumeric character ([a-z0-9A-Z]) with dashes (-), underscores (_), dots (.), and alphanumerics between. The prefix is optional. If specified, the prefix must be a DNS subdomain: a series of DNS labels separated by dots (.), not longer than 253 characters in total, followed by a slash (/). Metadata that fails to meet these requirements are rejected Note: This field is equivalent to the &#x60;annotations&#x60; field in the v1 API. They have the same syntax and read/write to the same location in Service Directory. | [optional] 
**name** | **str** | Immutable. The resource name for the endpoint in the format &#x60;projects/*/locations/*/namespaces/*/services/*/endpoints/*&#x60;. | [optional] 
**network** | **str** | Immutable. The Google Compute Engine network (VPC) of the endpoint in the format &#x60;projects//locations/global/networks/*&#x60;. The project must be specified by project number (project id is rejected). Incorrectly formatted networks are rejected, but no other validation is performed on this field (ex. network or project existence, reachability, or permissions). | [optional] 
**port** | **int** | Optional. Service Directory rejects values outside of &#x60;[0, 65535]&#x60;. | [optional] 
**uid** | **str** | Output only. A globally unique identifier (in UUID4 format) for this endpoint. | [optional] [readonly] 
**update_time** | **str** | Output only. The timestamp when the endpoint was last updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.endpoint import Endpoint

# TODO update the JSON string below
json = "{}"
# create an instance of Endpoint from a JSON string
endpoint_instance = Endpoint.from_json(json)
# print the JSON string representation of the object
print(Endpoint.to_json())

# convert the object into a dict
endpoint_dict = endpoint_instance.to_dict()
# create an instance of Endpoint from a dict
endpoint_from_dict = Endpoint.from_dict(endpoint_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


