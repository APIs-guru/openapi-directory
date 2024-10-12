# BankOrganization


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**BankOrganizationData**](BankOrganizationData.md) |  | [optional] 
**links** | [**BankOrganizationLinks**](BankOrganizationLinks.md) |  | [optional] 

## Example

```python
from openapi_client.models.bank_organization import BankOrganization

# TODO update the JSON string below
json = "{}"
# create an instance of BankOrganization from a JSON string
bank_organization_instance = BankOrganization.from_json(json)
# print the JSON string representation of the object
print(BankOrganization.to_json())

# convert the object into a dict
bank_organization_dict = bank_organization_instance.to_dict()
# create an instance of BankOrganization from a dict
bank_organization_from_dict = BankOrganization.from_dict(bank_organization_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


