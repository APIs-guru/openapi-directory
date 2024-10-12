# OrderShipmentAdd200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**result** | [**OrderShipmentAdd200ResponseResult**](OrderShipmentAdd200ResponseResult.md) |  | [optional] 
**return_code** | **int** |  | [optional] 
**return_message** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.order_shipment_add200_response import OrderShipmentAdd200Response

# TODO update the JSON string below
json = "{}"
# create an instance of OrderShipmentAdd200Response from a JSON string
order_shipment_add200_response_instance = OrderShipmentAdd200Response.from_json(json)
# print the JSON string representation of the object
print(OrderShipmentAdd200Response.to_json())

# convert the object into a dict
order_shipment_add200_response_dict = order_shipment_add200_response_instance.to_dict()
# create an instance of OrderShipmentAdd200Response from a dict
order_shipment_add200_response_from_dict = OrderShipmentAdd200Response.from_dict(order_shipment_add200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


