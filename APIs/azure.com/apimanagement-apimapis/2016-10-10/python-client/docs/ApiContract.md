# ApiContract

API details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | API identifier path: /apis/{apiId} | [optional] [readonly] 
**name** | **str** | API name. | 
**path** | **str** | Relative URL uniquely identifying this API and all of its resource paths within the API Management service instance. It is appended to the API endpoint base URL specified during the service instance creation to form a public URL for this API. | 
**protocols** | **List[str]** | Describes on which protocols the operations in this API can be invoked. | 
**service_url** | **str** | Absolute URL of the backend service implementing this API. | 
**authentication_settings** | [**AuthenticationSettingsContract**](AuthenticationSettingsContract.md) |  | [optional] 
**description** | **str** | Description of the API. May include HTML formatting tags. | [optional] 
**subscription_key_parameter_names** | [**SubscriptionKeyParameterNamesContract**](SubscriptionKeyParameterNamesContract.md) |  | [optional] 
**type** | **str** | Type of API. | [optional] 

## Example

```python
from openapi_client.models.api_contract import ApiContract

# TODO update the JSON string below
json = "{}"
# create an instance of ApiContract from a JSON string
api_contract_instance = ApiContract.from_json(json)
# print the JSON string representation of the object
print(ApiContract.to_json())

# convert the object into a dict
api_contract_dict = api_contract_instance.to_dict()
# create an instance of ApiContract from a dict
api_contract_from_dict = ApiContract.from_dict(api_contract_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


