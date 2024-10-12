# V1ServiceAccount

A service account in the Identity and Access Management API.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** | The email address of the service account. | [optional] 
**iam_account_name** | **str** | Deprecated. See b/136209818. | [optional] 
**name** | **str** | P4 SA resource name. An example name would be: &#x60;services/serviceconsumermanagement.googleapis.com/projects/123/serviceAccounts/default&#x60; | [optional] 
**tag** | **str** | The P4 SA configuration tag. This must be defined in activation_grants. If not specified when creating the account, the tag is set to \&quot;default\&quot;. | [optional] 
**unique_id** | **str** | The unique and stable id of the service account. | [optional] 

## Example

```python
from openapi_client.models.v1_service_account import V1ServiceAccount

# TODO update the JSON string below
json = "{}"
# create an instance of V1ServiceAccount from a JSON string
v1_service_account_instance = V1ServiceAccount.from_json(json)
# print the JSON string representation of the object
print(V1ServiceAccount.to_json())

# convert the object into a dict
v1_service_account_dict = v1_service_account_instance.to_dict()
# create an instance of V1ServiceAccount from a dict
v1_service_account_from_dict = V1ServiceAccount.from_dict(v1_service_account_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


