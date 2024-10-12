# CognitiveServicesAccountProperties

Properties of Cognitive Services account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_properties** | [**CognitiveServicesAccountApiProperties**](CognitiveServicesAccountApiProperties.md) |  | [optional] 
**custom_sub_domain_name** | **str** | Optional subdomain name used for token-based authentication. | [optional] 
**endpoint** | **str** | Endpoint of the created account. | [optional] [readonly] 
**internal_id** | **str** | The internal identifier. | [optional] [readonly] 
**network_acls** | [**NetworkRuleSet**](NetworkRuleSet.md) |  | [optional] 
**provisioning_state** | **str** | Gets the status of the cognitive services account at the time the operation was called. | [optional] [readonly] 

## Example

```python
from openapi_client.models.cognitive_services_account_properties import CognitiveServicesAccountProperties

# TODO update the JSON string below
json = "{}"
# create an instance of CognitiveServicesAccountProperties from a JSON string
cognitive_services_account_properties_instance = CognitiveServicesAccountProperties.from_json(json)
# print the JSON string representation of the object
print(CognitiveServicesAccountProperties.to_json())

# convert the object into a dict
cognitive_services_account_properties_dict = cognitive_services_account_properties_instance.to_dict()
# create an instance of CognitiveServicesAccountProperties from a dict
cognitive_services_account_properties_from_dict = CognitiveServicesAccountProperties.from_dict(cognitive_services_account_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


