# AccountFailedWebhooks200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**result** | [**AccountFailedWebhooks200ResponseResult**](AccountFailedWebhooks200ResponseResult.md) |  | [optional] 
**return_code** | **int** |  | [optional] 
**return_message** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.account_failed_webhooks200_response import AccountFailedWebhooks200Response

# TODO update the JSON string below
json = "{}"
# create an instance of AccountFailedWebhooks200Response from a JSON string
account_failed_webhooks200_response_instance = AccountFailedWebhooks200Response.from_json(json)
# print the JSON string representation of the object
print(AccountFailedWebhooks200Response.to_json())

# convert the object into a dict
account_failed_webhooks200_response_dict = account_failed_webhooks200_response_instance.to_dict()
# create an instance of AccountFailedWebhooks200Response from a dict
account_failed_webhooks200_response_from_dict = AccountFailedWebhooks200Response.from_dict(account_failed_webhooks200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


