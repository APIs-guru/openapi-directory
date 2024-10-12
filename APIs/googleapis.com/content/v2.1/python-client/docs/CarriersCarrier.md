# CarriersCarrier


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country** | **str** | The CLDR country code of the carrier (for example, \&quot;US\&quot;). Always present. | [optional] 
**edd_services** | **List[str]** | A list of services supported for EDD (Estimated Delivery Date) calculation. This is the list of valid values for WarehouseBasedDeliveryTime.carrierService. | [optional] 
**name** | **str** | The name of the carrier (for example, &#x60;\&quot;UPS\&quot;&#x60;). Always present. | [optional] 
**services** | **List[str]** | A list of supported services (for example, &#x60;\&quot;ground\&quot;&#x60;) for that carrier. Contains at least one service. This is the list of valid values for CarrierRate.carrierService. | [optional] 

## Example

```python
from openapi_client.models.carriers_carrier import CarriersCarrier

# TODO update the JSON string below
json = "{}"
# create an instance of CarriersCarrier from a JSON string
carriers_carrier_instance = CarriersCarrier.from_json(json)
# print the JSON string representation of the object
print(CarriersCarrier.to_json())

# convert the object into a dict
carriers_carrier_dict = carriers_carrier_instance.to_dict()
# create an instance of CarriersCarrier from a dict
carriers_carrier_from_dict = CarriersCarrier.from_dict(carriers_carrier_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


