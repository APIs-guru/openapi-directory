# CreateServiceAccountKeyRequest

The service account key create request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key_algorithm** | **str** | Which type of key and algorithm to use for the key. The default is currently a 2K RSA key. However this may change in the future. | [optional] 
**private_key_type** | **str** | The output format of the private key. The default value is &#x60;TYPE_GOOGLE_CREDENTIALS_FILE&#x60;, which is the Google Credentials File format. | [optional] 

## Example

```python
from openapi_client.models.create_service_account_key_request import CreateServiceAccountKeyRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateServiceAccountKeyRequest from a JSON string
create_service_account_key_request_instance = CreateServiceAccountKeyRequest.from_json(json)
# print the JSON string representation of the object
print(CreateServiceAccountKeyRequest.to_json())

# convert the object into a dict
create_service_account_key_request_dict = create_service_account_key_request_instance.to_dict()
# create an instance of CreateServiceAccountKeyRequest from a dict
create_service_account_key_request_from_dict = CreateServiceAccountKeyRequest.from_dict(create_service_account_key_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


