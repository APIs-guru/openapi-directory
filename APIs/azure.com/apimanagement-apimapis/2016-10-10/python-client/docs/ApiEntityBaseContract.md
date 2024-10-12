# ApiEntityBaseContract

API base contract details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authentication_settings** | [**AuthenticationSettingsContract**](AuthenticationSettingsContract.md) |  | [optional] 
**description** | **str** | Description of the API. May include HTML formatting tags. | [optional] 
**subscription_key_parameter_names** | [**SubscriptionKeyParameterNamesContract**](SubscriptionKeyParameterNamesContract.md) |  | [optional] 
**type** | **str** | Type of API. | [optional] 

## Example

```python
from openapi_client.models.api_entity_base_contract import ApiEntityBaseContract

# TODO update the JSON string below
json = "{}"
# create an instance of ApiEntityBaseContract from a JSON string
api_entity_base_contract_instance = ApiEntityBaseContract.from_json(json)
# print the JSON string representation of the object
print(ApiEntityBaseContract.to_json())

# convert the object into a dict
api_entity_base_contract_dict = api_entity_base_contract_instance.to_dict()
# create an instance of ApiEntityBaseContract from a dict
api_entity_base_contract_from_dict = ApiEntityBaseContract.from_dict(api_entity_base_contract_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


