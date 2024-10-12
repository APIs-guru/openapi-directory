# StartEnvironmentRequest

Request message for StartEnvironment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_token** | **str** | The initial access token passed to the environment. If this is present and valid, the environment will be pre-authenticated with gcloud so that the user can run gcloud commands in Cloud Shell without having to log in. This code can be updated later by calling AuthorizeEnvironment. | [optional] 
**public_keys** | **List[str]** | Public keys that should be added to the environment before it is started. | [optional] 

## Example

```python
from openapi_client.models.start_environment_request import StartEnvironmentRequest

# TODO update the JSON string below
json = "{}"
# create an instance of StartEnvironmentRequest from a JSON string
start_environment_request_instance = StartEnvironmentRequest.from_json(json)
# print the JSON string representation of the object
print(StartEnvironmentRequest.to_json())

# convert the object into a dict
start_environment_request_dict = start_environment_request_instance.to_dict()
# create an instance of StartEnvironmentRequest from a dict
start_environment_request_from_dict = StartEnvironmentRequest.from_dict(start_environment_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


