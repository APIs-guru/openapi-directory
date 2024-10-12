# ServiceAccount

An IAM service account. A service account is an account for an application or a virtual machine (VM) instance, not a person. You can use a service account to call Google APIs. To learn more, read the [overview of service accounts](https://cloud.google.com/iam/help/service-accounts/overview). When you create a service account, you specify the project ID that owns the service account, as well as a name that must be unique within the project. IAM uses these values to create an email address that identifies the service account. //

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Optional. A user-specified, human-readable description of the service account. The maximum length is 256 UTF-8 bytes. | [optional] 
**disabled** | **bool** | Output only. Whether the service account is disabled. | [optional] [readonly] 
**display_name** | **str** | Optional. A user-specified, human-readable name for the service account. The maximum length is 100 UTF-8 bytes. | [optional] 
**email** | **str** | Output only. The email address of the service account. | [optional] [readonly] 
**etag** | **bytearray** | Deprecated. Do not use. | [optional] 
**name** | **str** | The resource name of the service account. Use one of the following formats: * &#x60;projects/{PROJECT_ID}/serviceAccounts/{EMAIL_ADDRESS}&#x60; * &#x60;projects/{PROJECT_ID}/serviceAccounts/{UNIQUE_ID}&#x60; As an alternative, you can use the &#x60;-&#x60; wildcard character instead of the project ID: * &#x60;projects/-/serviceAccounts/{EMAIL_ADDRESS}&#x60; * &#x60;projects/-/serviceAccounts/{UNIQUE_ID}&#x60; When possible, avoid using the &#x60;-&#x60; wildcard character, because it can cause response messages to contain misleading error codes. For example, if you try to access the service account &#x60;projects/-/serviceAccounts/fake@example.com&#x60;, which does not exist, the response contains an HTTP &#x60;403 Forbidden&#x60; error instead of a &#x60;404 Not Found&#x60; error. | [optional] 
**oauth2_client_id** | **str** | Output only. The OAuth 2.0 client ID for the service account. | [optional] [readonly] 
**project_id** | **str** | Output only. The ID of the project that owns the service account. | [optional] [readonly] 
**unique_id** | **str** | Output only. The unique, stable numeric ID for the service account. Each service account retains its unique ID even if you delete the service account. For example, if you delete a service account, then create a new service account with the same name, the new service account has a different unique ID than the deleted service account. | [optional] [readonly] 

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


