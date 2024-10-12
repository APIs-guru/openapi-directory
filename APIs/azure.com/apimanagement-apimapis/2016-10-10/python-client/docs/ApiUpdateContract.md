# ApiUpdateContract

API Update Contract details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | API identifier path: /apis/{apiId} | [optional] [readonly] 
**name** | **str** | API name. | [optional] 
**path** | **str** | Relative URL uniquely identifying this API and all of its resource paths within the API Management service instance. It is appended to the API endpoint base URL specified during the service instance creation to form a public URL for this API. | [optional] 
**protocols** | **List[str]** | Describes on which protocols the operations in this API can be invoked. | [optional] 
**service_url** | **str** | Absolute URL of the backend service implementing this API. | [optional] 
**authentication_settings** | [**AuthenticationSettingsContract**](AuthenticationSettingsContract.md) |  | [optional] 
**description** | **str** | Description of the API. May include HTML formatting tags. | [optional] 
**subscription_key_parameter_names** | [**SubscriptionKeyParameterNamesContract**](SubscriptionKeyParameterNamesContract.md) |  | [optional] 
**type** | **str** | Type of API. | [optional] 

## Example

```python
from openapi_client.models.api_update_contract import ApiUpdateContract

# TODO update the JSON string below
json = "{}"
# create an instance of ApiUpdateContract from a JSON string
api_update_contract_instance = ApiUpdateContract.from_json(json)
# print the JSON string representation of the object
print(ApiUpdateContract.to_json())

# convert the object into a dict
api_update_contract_dict = api_update_contract_instance.to_dict()
# create an instance of ApiUpdateContract from a dict
api_update_contract_from_dict = ApiUpdateContract.from_dict(api_update_contract_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


