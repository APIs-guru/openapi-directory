# CreateSecretRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**secret** | **str** | The new secret must follow these rules:  * minimum 8 characters * maximum 25 characters * minimum 1 lower case character * minimum 1 upper case character * minimum 1 digit  | 

## Example

```python
from openapi_client.models.create_secret_request import CreateSecretRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateSecretRequest from a JSON string
create_secret_request_instance = CreateSecretRequest.from_json(json)
# print the JSON string representation of the object
print(CreateSecretRequest.to_json())

# convert the object into a dict
create_secret_request_dict = create_secret_request_instance.to_dict()
# create an instance of CreateSecretRequest from a dict
create_secret_request_from_dict = CreateSecretRequest.from_dict(create_secret_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


