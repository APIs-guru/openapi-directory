# IntegrationAccountPartnerProperties


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**changed_time** | **datetime** | The changed time. | [optional] [readonly] 
**content** | [**PartnerContent**](PartnerContent.md) |  | [optional] 
**created_time** | **datetime** | The created time. | [optional] [readonly] 
**metadata** | **object** | The metadata. | [optional] 
**partner_type** | [**PartnerType**](PartnerType.md) |  | [optional] 

## Example

```python
from openapi_client.models.integration_account_partner_properties import IntegrationAccountPartnerProperties

# TODO update the JSON string below
json = "{}"
# create an instance of IntegrationAccountPartnerProperties from a JSON string
integration_account_partner_properties_instance = IntegrationAccountPartnerProperties.from_json(json)
# print the JSON string representation of the object
print(IntegrationAccountPartnerProperties.to_json())

# convert the object into a dict
integration_account_partner_properties_dict = integration_account_partner_properties_instance.to_dict()
# create an instance of IntegrationAccountPartnerProperties from a dict
integration_account_partner_properties_from_dict = IntegrationAccountPartnerProperties.from_dict(integration_account_partner_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


