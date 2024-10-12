# V1beta1GenerateServiceAccountResponse

Response message for the `GenerateServiceAccount` method. This response message is assigned to the `response` field of the returned Operation when that operation is done.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account** | [**V1beta1ServiceAccount**](V1beta1ServiceAccount.md) |  | [optional] 

## Example

```python
from openapi_client.models.v1beta1_generate_service_account_response import V1beta1GenerateServiceAccountResponse

# TODO update the JSON string below
json = "{}"
# create an instance of V1beta1GenerateServiceAccountResponse from a JSON string
v1beta1_generate_service_account_response_instance = V1beta1GenerateServiceAccountResponse.from_json(json)
# print the JSON string representation of the object
print(V1beta1GenerateServiceAccountResponse.to_json())

# convert the object into a dict
v1beta1_generate_service_account_response_dict = v1beta1_generate_service_account_response_instance.to_dict()
# create an instance of V1beta1GenerateServiceAccountResponse from a dict
v1beta1_generate_service_account_response_from_dict = V1beta1GenerateServiceAccountResponse.from_dict(v1beta1_generate_service_account_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


