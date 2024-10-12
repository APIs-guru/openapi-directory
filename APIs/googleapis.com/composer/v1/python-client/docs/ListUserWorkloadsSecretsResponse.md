# ListUserWorkloadsSecretsResponse

The user workloads Secrets for a given environment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | The page token used to query for the next page if one exists. | [optional] 
**user_workloads_secrets** | [**List[UserWorkloadsSecret]**](UserWorkloadsSecret.md) | The list of Secrets returned by a ListUserWorkloadsSecretsRequest. | [optional] 

## Example

```python
from openapi_client.models.list_user_workloads_secrets_response import ListUserWorkloadsSecretsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListUserWorkloadsSecretsResponse from a JSON string
list_user_workloads_secrets_response_instance = ListUserWorkloadsSecretsResponse.from_json(json)
# print the JSON string representation of the object
print(ListUserWorkloadsSecretsResponse.to_json())

# convert the object into a dict
list_user_workloads_secrets_response_dict = list_user_workloads_secrets_response_instance.to_dict()
# create an instance of ListUserWorkloadsSecretsResponse from a dict
list_user_workloads_secrets_response_from_dict = ListUserWorkloadsSecretsResponse.from_dict(list_user_workloads_secrets_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


