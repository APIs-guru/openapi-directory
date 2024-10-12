# APIDefinitionUptimeTestsCORS


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_credentials** | **bool** |  | [optional] 
**allowed_headers** | **List[str]** |  | [optional] 
**allowed_methods** | **List[str]** |  | [optional] 
**allowed_origins** | **List[str]** |  | [optional] 
**debug** | **bool** |  | [optional] 
**enable** | **bool** |  | [optional] 
**exposed_headers** | **List[str]** |  | [optional] 
**max_age** | **float** |  | [optional] 
**options_passthrough** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.api_definition_uptime_tests_cors import APIDefinitionUptimeTestsCORS

# TODO update the JSON string below
json = "{}"
# create an instance of APIDefinitionUptimeTestsCORS from a JSON string
api_definition_uptime_tests_cors_instance = APIDefinitionUptimeTestsCORS.from_json(json)
# print the JSON string representation of the object
print(APIDefinitionUptimeTestsCORS.to_json())

# convert the object into a dict
api_definition_uptime_tests_cors_dict = api_definition_uptime_tests_cors_instance.to_dict()
# create an instance of APIDefinitionUptimeTestsCORS from a dict
api_definition_uptime_tests_cors_from_dict = APIDefinitionUptimeTestsCORS.from_dict(api_definition_uptime_tests_cors_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


