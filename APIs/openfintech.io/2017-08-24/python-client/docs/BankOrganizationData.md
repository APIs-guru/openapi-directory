# BankOrganizationData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Organization&#x60;s ID | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.bank_organization_data import BankOrganizationData

# TODO update the JSON string below
json = "{}"
# create an instance of BankOrganizationData from a JSON string
bank_organization_data_instance = BankOrganizationData.from_json(json)
# print the JSON string representation of the object
print(BankOrganizationData.to_json())

# convert the object into a dict
bank_organization_data_dict = bank_organization_data_instance.to_dict()
# create an instance of BankOrganizationData from a dict
bank_organization_data_from_dict = BankOrganizationData.from_dict(bank_organization_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


