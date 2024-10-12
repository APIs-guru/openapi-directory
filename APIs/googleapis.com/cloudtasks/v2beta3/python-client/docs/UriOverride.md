# UriOverride

URI Override. When specified, all the HTTP tasks inside the queue will be partially or fully overridden depending on the configured values.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**host** | **str** | Host override. When specified, replaces the host part of the task URL. For example, if the task URL is \&quot;https://www.google.com,\&quot; and host value is set to \&quot;example.net\&quot;, the overridden URI will be changed to \&quot;https://example.net.\&quot; Host value cannot be an empty string (INVALID_ARGUMENT). | [optional] 
**path_override** | [**PathOverride**](PathOverride.md) |  | [optional] 
**port** | **str** | Port override. When specified, replaces the port part of the task URI. For instance, for a URI http://www.google.com/foo and port&#x3D;123, the overridden URI becomes http://www.google.com:123/foo. Note that the port value must be a positive integer. Setting the port to 0 (Zero) clears the URI port. | [optional] 
**query_override** | [**QueryOverride**](QueryOverride.md) |  | [optional] 
**scheme** | **str** | Scheme override. When specified, the task URI scheme is replaced by the provided value (HTTP or HTTPS). | [optional] 
**uri_override_enforce_mode** | **str** | URI Override Enforce Mode When specified, determines the Target UriOverride mode. If not specified, it defaults to ALWAYS. | [optional] 

## Example

```python
from openapi_client.models.uri_override import UriOverride

# TODO update the JSON string below
json = "{}"
# create an instance of UriOverride from a JSON string
uri_override_instance = UriOverride.from_json(json)
# print the JSON string representation of the object
print(UriOverride.to_json())

# convert the object into a dict
uri_override_dict = uri_override_instance.to_dict()
# create an instance of UriOverride from a dict
uri_override_from_dict = UriOverride.from_dict(uri_override_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


