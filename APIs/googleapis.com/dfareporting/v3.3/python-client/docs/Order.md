# Order

Describes properties of a Planning order.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | Account ID of this order. | [optional] 
**advertiser_id** | **str** | Advertiser ID of this order. | [optional] 
**approver_user_profile_ids** | **List[str]** | IDs for users that have to approve documents created for this order. | [optional] 
**buyer_invoice_id** | **str** | Buyer invoice ID associated with this order. | [optional] 
**buyer_organization_name** | **str** | Name of the buyer organization. | [optional] 
**comments** | **str** | Comments in this order. | [optional] 
**contacts** | [**List[OrderContact]**](OrderContact.md) | Contacts for this order. | [optional] 
**id** | **str** | ID of this order. This is a read-only, auto-generated field. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#order\&quot;. | [optional] 
**last_modified_info** | [**LastModifiedInfo**](LastModifiedInfo.md) |  | [optional] 
**name** | **str** | Name of this order. | [optional] 
**notes** | **str** | Notes of this order. | [optional] 
**planning_term_id** | **str** | ID of the terms and conditions template used in this order. | [optional] 
**project_id** | **str** | Project ID of this order. | [optional] 
**seller_order_id** | **str** | Seller order ID associated with this order. | [optional] 
**seller_organization_name** | **str** | Name of the seller organization. | [optional] 
**site_id** | **List[str]** | Site IDs this order is associated with. | [optional] 
**site_names** | **List[str]** | Free-form site names this order is associated with. | [optional] 
**subaccount_id** | **str** | Subaccount ID of this order. | [optional] 
**terms_and_conditions** | **str** | Terms and conditions of this order. | [optional] 

## Example

```python
from openapi_client.models.order import Order

# TODO update the JSON string below
json = "{}"
# create an instance of Order from a JSON string
order_instance = Order.from_json(json)
# print the JSON string representation of the object
print(Order.to_json())

# convert the object into a dict
order_dict = order_instance.to_dict()
# create an instance of Order from a dict
order_from_dict = Order.from_dict(order_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


