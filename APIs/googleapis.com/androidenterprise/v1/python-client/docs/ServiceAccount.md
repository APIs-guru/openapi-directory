# ServiceAccount

A service account identity, including the name and credentials that can be used to authenticate as the service account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | [**ServiceAccountKey**](ServiceAccountKey.md) |  | [optional] 
**name** | **str** | The account name of the service account, in the form of an email address. Assigned by the server. | [optional] 

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


