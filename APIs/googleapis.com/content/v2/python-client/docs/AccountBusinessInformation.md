# AccountBusinessInformation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | [**AccountAddress**](AccountAddress.md) |  | [optional] 
**customer_service** | [**AccountCustomerService**](AccountCustomerService.md) |  | [optional] 
**korean_business_registration_number** | **str** | The 10-digit [Korean business registration number](https://support.google.com/merchants/answer/9037766) separated with dashes in the format: XXX-XX-XXXXX. This field will only be updated if explicitly set. | [optional] 
**phone_number** | **str** | The phone number of the business. | [optional] 

## Example

```python
from openapi_client.models.account_business_information import AccountBusinessInformation

# TODO update the JSON string below
json = "{}"
# create an instance of AccountBusinessInformation from a JSON string
account_business_information_instance = AccountBusinessInformation.from_json(json)
# print the JSON string representation of the object
print(AccountBusinessInformation.to_json())

# convert the object into a dict
account_business_information_dict = account_business_information_instance.to_dict()
# create an instance of AccountBusinessInformation from a dict
account_business_information_from_dict = AccountBusinessInformation.from_dict(account_business_information_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


