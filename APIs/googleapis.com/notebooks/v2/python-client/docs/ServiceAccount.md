# ServiceAccount

A service account that acts as an identity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** | Optional. Email address of the service account. | [optional] 
**scopes** | **List[str]** | Output only. The list of scopes to be made available for this service account. Set by the CLH to https://www.googleapis.com/auth/cloud-platform | [optional] [readonly] 

## Example

```python
from openapi_client.models.service_account import ServiceAccount

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceAccount from a JSON string
service_account_instance = ServiceAccount.from_json(json)
# print the JSON string representation of the object
print(ServiceAccount.to_json())

# convert the object into a dict
service_account_dict = service_account_instance.to_dict()
# create an instance of ServiceAccount from a dict
service_account_from_dict = ServiceAccount.from_dict(service_account_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


