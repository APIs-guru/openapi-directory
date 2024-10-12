# SystemParameter

Define a parameter's name and location. The parameter may be passed as either an HTTP header or a URL query parameter, and if both are passed the behavior is implementation-dependent.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**http_header** | **str** | Define the HTTP header name to use for the parameter. It is case insensitive. | [optional] 
**name** | **str** | Define the name of the parameter, such as \&quot;api_key\&quot; . It is case sensitive. | [optional] 
**url_query_parameter** | **str** | Define the URL query parameter name to use for the parameter. It is case sensitive. | [optional] 

## Example

```python
from openapi_client.models.system_parameter import SystemParameter

# TODO update the JSON string below
json = "{}"
# create an instance of SystemParameter from a JSON string
system_parameter_instance = SystemParameter.from_json(json)
# print the JSON string representation of the object
print(SystemParameter.to_json())

# convert the object into a dict
system_parameter_dict = system_parameter_instance.to_dict()
# create an instance of SystemParameter from a dict
system_parameter_from_dict = SystemParameter.from_dict(system_parameter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


