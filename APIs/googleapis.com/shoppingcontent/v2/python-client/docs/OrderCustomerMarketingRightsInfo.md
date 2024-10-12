# OrderCustomerMarketingRightsInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**explicit_marketing_preference** | **str** | Last known customer selection regarding marketing preferences. In certain cases this selection might not be known, so this field would be empty. If a customer selected &#x60;granted&#x60; in their most recent order, they can be subscribed to marketing emails. Customers who have chosen &#x60;denied&#x60; must not be subscribed, or must be unsubscribed if already opted-in. Acceptable values are: - \&quot;&#x60;denied&#x60;\&quot; - \&quot;&#x60;granted&#x60;\&quot;  | [optional] 
**last_updated_timestamp** | **str** | Timestamp when last time marketing preference was updated. Could be empty, if user wasn&#39;t offered a selection yet. | [optional] 
**marketing_email_address** | **str** | Email address that can be used for marketing purposes. The field may be empty even if &#x60;explicitMarketingPreference&#x60; is &#39;granted&#39;. This happens when retrieving an old order from the customer who deleted their account. | [optional] 

## Example

```python
from openapi_client.models.order_customer_marketing_rights_info import OrderCustomerMarketingRightsInfo

# TODO update the JSON string below
json = "{}"
# create an instance of OrderCustomerMarketingRightsInfo from a JSON string
order_customer_marketing_rights_info_instance = OrderCustomerMarketingRightsInfo.from_json(json)
# print the JSON string representation of the object
print(OrderCustomerMarketingRightsInfo.to_json())

# convert the object into a dict
order_customer_marketing_rights_info_dict = order_customer_marketing_rights_info_instance.to_dict()
# create an instance of OrderCustomerMarketingRightsInfo from a dict
order_customer_marketing_rights_info_from_dict = OrderCustomerMarketingRightsInfo.from_dict(order_customer_marketing_rights_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


