# PaymentProviderOrganization


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**PaymentProviderOrganizationData**](PaymentProviderOrganizationData.md) |  | [optional] 
**links** | [**PaymentProviderOrganizationLinks**](PaymentProviderOrganizationLinks.md) |  | [optional] 

## Example

```python
from openapi_client.models.payment_provider_organization import PaymentProviderOrganization

# TODO update the JSON string below
json = "{}"
# create an instance of PaymentProviderOrganization from a JSON string
payment_provider_organization_instance = PaymentProviderOrganization.from_json(json)
# print the JSON string representation of the object
print(PaymentProviderOrganization.to_json())

# convert the object into a dict
payment_provider_organization_dict = payment_provider_organization_instance.to_dict()
# create an instance of PaymentProviderOrganization from a dict
payment_provider_organization_from_dict = PaymentProviderOrganization.from_dict(payment_provider_organization_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


