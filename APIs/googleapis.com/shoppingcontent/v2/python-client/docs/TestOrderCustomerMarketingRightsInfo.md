# TestOrderCustomerMarketingRightsInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**explicit_marketing_preference** | **str** | Last know user use selection regards marketing preferences. In certain cases selection might not be known, so this field would be empty. Acceptable values are: - \&quot;&#x60;denied&#x60;\&quot; - \&quot;&#x60;granted&#x60;\&quot;  | [optional] 
**last_updated_timestamp** | **str** | Timestamp when last time marketing preference was updated. Could be empty, if user wasn&#39;t offered a selection yet. | [optional] 

## Example

```python
from openapi_client.models.test_order_customer_marketing_rights_info import TestOrderCustomerMarketingRightsInfo

# TODO update the JSON string below
json = "{}"
# create an instance of TestOrderCustomerMarketingRightsInfo from a JSON string
test_order_customer_marketing_rights_info_instance = TestOrderCustomerMarketingRightsInfo.from_json(json)
# print the JSON string representation of the object
print(TestOrderCustomerMarketingRightsInfo.to_json())

# convert the object into a dict
test_order_customer_marketing_rights_info_dict = test_order_customer_marketing_rights_info_instance.to_dict()
# create an instance of TestOrderCustomerMarketingRightsInfo from a dict
test_order_customer_marketing_rights_info_from_dict = TestOrderCustomerMarketingRightsInfo.from_dict(test_order_customer_marketing_rights_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


