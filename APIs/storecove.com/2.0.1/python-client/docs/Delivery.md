# Delivery


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actual_date** | **str** | The actual date of the delivery. Used only for Invoice | [optional] 
**delivery_location** | [**DeliveryDeliveryLocation**](DeliveryDeliveryLocation.md) |  | [optional] 
**delivery_party** | [**DeliveryParty**](DeliveryParty.md) |  | [optional] 
**delivery_party_name** | **str** | Use deliveryParty. The name of the party that took delivery. Used only for Invoice | [optional] 
**quantity** | **float** | The quantity of the delivery. Used only for Invoice | [optional] [default to 1]
**requested_delivery_period** | **str** | The requested delivery period. Used only for DocumentOrder. | [optional] 
**shipping_marks** | **str** | A text that the buyer requests to be printed on the packing labels. Used only for DocumentOrder. | [optional] 

## Example

```python
from openapi_client.models.delivery import Delivery

# TODO update the JSON string below
json = "{}"
# create an instance of Delivery from a JSON string
delivery_instance = Delivery.from_json(json)
# print the JSON string representation of the object
print(Delivery.to_json())

# convert the object into a dict
delivery_dict = delivery_instance.to_dict()
# create an instance of Delivery from a dict
delivery_from_dict = Delivery.from_dict(delivery_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


