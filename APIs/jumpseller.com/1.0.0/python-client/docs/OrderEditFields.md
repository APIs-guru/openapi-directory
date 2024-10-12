# OrderEditFields


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_fields** | [**List[OrderAdditionalFields]**](OrderAdditionalFields.md) | Array of additional fields for the given Order | [optional] 
**additional_information** | **str** | Additional information for the given Order | [optional] 
**shipment_status** | **str** | Status of the Order Shipping | [optional] 
**status** | **str** | Status of the Order | [optional] 
**tracking_company** | **str** | Shipping Company used for the given Order | [optional] 
**tracking_number** | **str** | Shipping Tracking Number used for the given Order | [optional] 
**tracking_url** | **str** | URL to check delivery information for the given Order | [optional] 

## Example

```python
from openapi_client.models.order_edit_fields import OrderEditFields

# TODO update the JSON string below
json = "{}"
# create an instance of OrderEditFields from a JSON string
order_edit_fields_instance = OrderEditFields.from_json(json)
# print the JSON string representation of the object
print(OrderEditFields.to_json())

# convert the object into a dict
order_edit_fields_dict = order_edit_fields_instance.to_dict()
# create an instance of OrderEditFields from a dict
order_edit_fields_from_dict = OrderEditFields.from_dict(order_edit_fields_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


