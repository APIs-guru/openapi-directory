# GetServiceAccountResponse

Response object of GetServiceAccount

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** | The service account email address. | [optional] 
**kind** | **str** | The resource type of the response. | [optional] [default to 'bigquery#getServiceAccountResponse']

## Example

```python
from openapi_client.models.get_service_account_response import GetServiceAccountResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetServiceAccountResponse from a JSON string
get_service_account_response_instance = GetServiceAccountResponse.from_json(json)
# print the JSON string representation of the object
print(GetServiceAccountResponse.to_json())

# convert the object into a dict
get_service_account_response_dict = get_service_account_response_instance.to_dict()
# create an instance of GetServiceAccountResponse from a dict
get_service_account_response_from_dict = GetServiceAccountResponse.from_dict(get_service_account_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


