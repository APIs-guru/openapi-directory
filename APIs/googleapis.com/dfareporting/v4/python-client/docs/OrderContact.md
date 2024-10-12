# OrderContact

Contact of an order.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contact_info** | **str** | Free-form information about this contact. It could be any information related to this contact in addition to type, title, name, and signature user profile ID. | [optional] 
**contact_name** | **str** | Name of this contact. | [optional] 
**contact_title** | **str** | Title of this contact. | [optional] 
**contact_type** | **str** | Type of this contact. | [optional] 
**signature_user_profile_id** | **str** | ID of the user profile containing the signature that will be embedded into order documents. | [optional] 

## Example

```python
from openapi_client.models.order_contact import OrderContact

# TODO update the JSON string below
json = "{}"
# create an instance of OrderContact from a JSON string
order_contact_instance = OrderContact.from_json(json)
# print the JSON string representation of the object
print(OrderContact.to_json())

# convert the object into a dict
order_contact_dict = order_contact_instance.to_dict()
# create an instance of OrderContact from a dict
order_contact_from_dict = OrderContact.from_dict(order_contact_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


