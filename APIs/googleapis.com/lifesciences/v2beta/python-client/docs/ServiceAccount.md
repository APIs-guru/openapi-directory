# ServiceAccount

Carries information about a Google Cloud service account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** | Email address of the service account. If not specified, the default Compute Engine service account for the project will be used. | [optional] 
**scopes** | **List[str]** | List of scopes to be enabled for this service account on the VM, in addition to the cloud-platform API scope that will be added by default. | [optional] 

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


