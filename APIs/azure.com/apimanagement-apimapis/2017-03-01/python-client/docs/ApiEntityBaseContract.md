# ApiEntityBaseContract

API base contract details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_revision** | **str** | Describes the Revision of the Api. If no value is provided, default revision 1 is created | [optional] 
**api_version** | **str** | Indicates the Version identifier of the API if the API is versioned | [optional] 
**api_version_set_id** | **str** | A resource identifier for the related ApiVersionSet. | [optional] 
**authentication_settings** | [**ApiContractPropertiesAllOfAuthenticationSettings**](ApiContractPropertiesAllOfAuthenticationSettings.md) |  | [optional] 
**description** | **str** | Description of the API. May include HTML formatting tags. | [optional] 
**is_current** | **bool** | Indicates if API revision is current api revision. | [optional] [readonly] 
**is_online** | **bool** | Indicates if API revision is accessible via the gateway. | [optional] [readonly] 
**subscription_key_parameter_names** | [**ApiEntityBaseContractSubscriptionKeyParameterNames**](ApiEntityBaseContractSubscriptionKeyParameterNames.md) |  | [optional] 
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


