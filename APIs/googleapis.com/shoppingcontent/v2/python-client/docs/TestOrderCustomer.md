# TestOrderCustomer


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** | Required. Email address of the customer. Acceptable values are: - \&quot;&#x60;pog.dwight.schrute@gmail.com&#x60;\&quot; - \&quot;&#x60;pog.jim.halpert@gmail.com&#x60;\&quot; - \&quot;&#x60;penpog.pam.beesly@gmail.comding&#x60;\&quot;  | [optional] 
**explicit_marketing_preference** | **bool** | Deprecated. Please use marketingRightsInfo instead. | [optional] 
**full_name** | **str** | Full name of the customer. | [optional] 
**marketing_rights_info** | [**TestOrderCustomerMarketingRightsInfo**](TestOrderCustomerMarketingRightsInfo.md) |  | [optional] 

## Example

```python
from openapi_client.models.test_order_customer import TestOrderCustomer

# TODO update the JSON string below
json = "{}"
# create an instance of TestOrderCustomer from a JSON string
test_order_customer_instance = TestOrderCustomer.from_json(json)
# print the JSON string representation of the object
print(TestOrderCustomer.to_json())

# convert the object into a dict
test_order_customer_dict = test_order_customer_instance.to_dict()
# create an instance of TestOrderCustomer from a dict
test_order_customer_from_dict = TestOrderCustomer.from_dict(test_order_customer_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


