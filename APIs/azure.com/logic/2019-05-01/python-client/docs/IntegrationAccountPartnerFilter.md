# IntegrationAccountPartnerFilter

The integration account partner filter for odata query.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**partner_type** | [**PartnerType**](PartnerType.md) |  | 

## Example

```python
from openapi_client.models.integration_account_partner_filter import IntegrationAccountPartnerFilter

# TODO update the JSON string below
json = "{}"
# create an instance of IntegrationAccountPartnerFilter from a JSON string
integration_account_partner_filter_instance = IntegrationAccountPartnerFilter.from_json(json)
# print the JSON string representation of the object
print(IntegrationAccountPartnerFilter.to_json())

# convert the object into a dict
integration_account_partner_filter_dict = integration_account_partner_filter_instance.to_dict()
# create an instance of IntegrationAccountPartnerFilter from a dict
integration_account_partner_filter_from_dict = IntegrationAccountPartnerFilter.from_dict(integration_account_partner_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


