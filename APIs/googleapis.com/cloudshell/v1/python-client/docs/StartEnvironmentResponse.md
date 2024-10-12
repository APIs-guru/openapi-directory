# StartEnvironmentResponse

Message included in the response field of operations returned from StartEnvironment once the operation is complete.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**environment** | [**Environment**](Environment.md) |  | [optional] 

## Example

```python
from openapi_client.models.start_environment_response import StartEnvironmentResponse

# TODO update the JSON string below
json = "{}"
# create an instance of StartEnvironmentResponse from a JSON string
start_environment_response_instance = StartEnvironmentResponse.from_json(json)
# print the JSON string representation of the object
print(StartEnvironmentResponse.to_json())

# convert the object into a dict
start_environment_response_dict = start_environment_response_instance.to_dict()
# create an instance of StartEnvironmentResponse from a dict
start_environment_response_from_dict = StartEnvironmentResponse.from_dict(start_environment_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


