# PaymentProviderOrganizationData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Organization&#x60;s ID | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.payment_provider_organization_data import PaymentProviderOrganizationData

# TODO update the JSON string below
json = "{}"
# create an instance of PaymentProviderOrganizationData from a JSON string
payment_provider_organization_data_instance = PaymentProviderOrganizationData.from_json(json)
# print the JSON string representation of the object
print(PaymentProviderOrganizationData.to_json())

# convert the object into a dict
payment_provider_organization_data_dict = payment_provider_organization_data_instance.to_dict()
# create an instance of PaymentProviderOrganizationData from a dict
payment_provider_organization_data_from_dict = PaymentProviderOrganizationData.from_dict(payment_provider_organization_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


