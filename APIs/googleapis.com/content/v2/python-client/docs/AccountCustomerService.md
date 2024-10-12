# AccountCustomerService


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** | Customer service email. | [optional] 
**phone_number** | **str** | Customer service phone number. | [optional] 
**url** | **str** | Customer service URL. | [optional] 

## Example

```python
from openapi_client.models.account_customer_service import AccountCustomerService

# TODO update the JSON string below
json = "{}"
# create an instance of AccountCustomerService from a JSON string
account_customer_service_instance = AccountCustomerService.from_json(json)
# print the JSON string representation of the object
print(AccountCustomerService.to_json())

# convert the object into a dict
account_customer_service_dict = account_customer_service_instance.to_dict()
# create an instance of AccountCustomerService from a dict
account_customer_service_from_dict = AccountCustomerService.from_dict(account_customer_service_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


