# DeliveryDeliveryLocation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | [**Address**](Address.md) |  | [optional] 
**id** | **str** | The location identifier. | [optional] 
**location_name** | **str** | The name of the delivery location. Only used for DocumentOrder. | [optional] 
**scheme_agency_id** | **str** | DEPRECATED. The schemeAgencyId of the location identifier (e.g. &#39;ZZZ&#39;) | [optional] 
**scheme_id** | **str** | The schemeId of the location identifier (e.g. &#39;EAN&#39;) | [optional] 

## Example

```python
from openapi_client.models.delivery_delivery_location import DeliveryDeliveryLocation

# TODO update the JSON string below
json = "{}"
# create an instance of DeliveryDeliveryLocation from a JSON string
delivery_delivery_location_instance = DeliveryDeliveryLocation.from_json(json)
# print the JSON string representation of the object
print(DeliveryDeliveryLocation.to_json())

# convert the object into a dict
delivery_delivery_location_dict = delivery_delivery_location_instance.to_dict()
# create an instance of DeliveryDeliveryLocation from a dict
delivery_delivery_location_from_dict = DeliveryDeliveryLocation.from_dict(delivery_delivery_location_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


