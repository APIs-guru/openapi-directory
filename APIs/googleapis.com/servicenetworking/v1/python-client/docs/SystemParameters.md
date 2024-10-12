# SystemParameters

### System parameter configuration A system parameter is a special kind of parameter defined by the API system, not by an individual API. It is typically mapped to an HTTP header and/or a URL query parameter. This configuration specifies which methods change the names of the system parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rules** | [**List[SystemParameterRule]**](SystemParameterRule.md) | Define system parameters. The parameters defined here will override the default parameters implemented by the system. If this field is missing from the service config, default system parameters will be used. Default system parameters and names is implementation-dependent. Example: define api key for all methods system_parameters rules: - selector: \&quot;*\&quot; parameters: - name: api_key url_query_parameter: api_key Example: define 2 api key names for a specific method. system_parameters rules: - selector: \&quot;/ListShelves\&quot; parameters: - name: api_key http_header: Api-Key1 - name: api_key http_header: Api-Key2 **NOTE:** All service configuration rules follow \&quot;last one wins\&quot; order. | [optional] 

## Example

```python
from openapi_client.models.system_parameters import SystemParameters

# TODO update the JSON string below
json = "{}"
# create an instance of SystemParameters from a JSON string
system_parameters_instance = SystemParameters.from_json(json)
# print the JSON string representation of the object
print(SystemParameters.to_json())

# convert the object into a dict
system_parameters_dict = system_parameters_instance.to_dict()
# create an instance of SystemParameters from a dict
system_parameters_from_dict = SystemParameters.from_dict(system_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


