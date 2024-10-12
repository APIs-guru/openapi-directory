# GenerateCredentialsResult

The response from the GenerateCredentials operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**passwords** | [**List[TokenPassword]**](TokenPassword.md) | The list of passwords for a container registry. | [optional] 
**username** | **str** | The username for a container registry. | [optional] 

## Example

```python
from openapi_client.models.generate_credentials_result import GenerateCredentialsResult

# TODO update the JSON string below
json = "{}"
# create an instance of GenerateCredentialsResult from a JSON string
generate_credentials_result_instance = GenerateCredentialsResult.from_json(json)
# print the JSON string representation of the object
print(GenerateCredentialsResult.to_json())

# convert the object into a dict
generate_credentials_result_dict = generate_credentials_result_instance.to_dict()
# create an instance of GenerateCredentialsResult from a dict
generate_credentials_result_from_dict = GenerateCredentialsResult.from_dict(generate_credentials_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


