# ServiceAccount

A Compute Engine service account, identical to the Compute Engine resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** | The service account email address, for example: 123845678986@project.gserviceaccount.com | [optional] 
**scopes** | **List[str]** | The list of OAuth2 scopes to obtain for the service account, for example: https://www.googleapis.com/auth/devstorage.full_control | [optional] 

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


