# BillbeeInterfacesBillbeeAPIModelOrderUser


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billbee_shop_id** | **int** | The Billbee internal id of the shop connection | [optional] 
**billbee_shop_name** | **str** | The name of shop connection in Billbee | [optional] 
**email** | **str** | The email address of this customer | [optional] 
**first_name** | **str** | The first name of this customer | [optional] 
**full_name** | **str** | The full name (\&quot;firstname lastname\&quot;) of this customer | [optional] [readonly] 
**id** | **str** | The Billbee internal id of this customer | [optional] 
**last_name** | **str** | The last name of this customer | [optional] 
**nick** | **str** | The nick name (if available) from the original system | [optional] 
**platform** | **str** | The name of the platform from which this customer originated | [optional] 

## Example

```python
from openapi_client.models.billbee_interfaces_billbee_api_model_order_user import BillbeeInterfacesBillbeeAPIModelOrderUser

# TODO update the JSON string below
json = "{}"
# create an instance of BillbeeInterfacesBillbeeAPIModelOrderUser from a JSON string
billbee_interfaces_billbee_api_model_order_user_instance = BillbeeInterfacesBillbeeAPIModelOrderUser.from_json(json)
# print the JSON string representation of the object
print(BillbeeInterfacesBillbeeAPIModelOrderUser.to_json())

# convert the object into a dict
billbee_interfaces_billbee_api_model_order_user_dict = billbee_interfaces_billbee_api_model_order_user_instance.to_dict()
# create an instance of BillbeeInterfacesBillbeeAPIModelOrderUser from a dict
billbee_interfaces_billbee_api_model_order_user_from_dict = BillbeeInterfacesBillbeeAPIModelOrderUser.from_dict(billbee_interfaces_billbee_api_model_order_user_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


