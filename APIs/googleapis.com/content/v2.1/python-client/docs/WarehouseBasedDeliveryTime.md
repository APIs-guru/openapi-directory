# WarehouseBasedDeliveryTime


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**carrier** | **str** | Required. Carrier, such as &#x60;\&quot;UPS\&quot;&#x60; or &#x60;\&quot;Fedex\&quot;&#x60;. The list of supported carriers can be retrieved through the &#x60;listSupportedCarriers&#x60; method. | [optional] 
**carrier_service** | **str** | Required. Carrier service, such as &#x60;\&quot;ground\&quot;&#x60; or &#x60;\&quot;2 days\&quot;&#x60;. The list of supported services for a carrier can be retrieved through the &#x60;listSupportedCarriers&#x60; method. The name of the service must be in the eddSupportedServices list. | [optional] 
**origin_administrative_area** | **str** | Shipping origin&#39;s state. | [optional] 
**origin_city** | **str** | Shipping origin&#39;s city. | [optional] 
**origin_country** | **str** | Shipping origin&#39;s country represented as a [CLDR territory code](https://github.com/unicode-org/cldr/blob/latest/common/main/en.xml). | [optional] 
**origin_postal_code** | **str** | Shipping origin. | [optional] 
**origin_street_address** | **str** | Shipping origin&#39;s street address. | [optional] 
**warehouse_name** | **str** | The name of the warehouse. Warehouse name need to be matched with name. If warehouseName is set, the below fields will be ignored. The warehouse info will be read from warehouse. | [optional] 

## Example

```python
from openapi_client.models.warehouse_based_delivery_time import WarehouseBasedDeliveryTime

# TODO update the JSON string below
json = "{}"
# create an instance of WarehouseBasedDeliveryTime from a JSON string
warehouse_based_delivery_time_instance = WarehouseBasedDeliveryTime.from_json(json)
# print the JSON string representation of the object
print(WarehouseBasedDeliveryTime.to_json())

# convert the object into a dict
warehouse_based_delivery_time_dict = warehouse_based_delivery_time_instance.to_dict()
# create an instance of WarehouseBasedDeliveryTime from a dict
warehouse_based_delivery_time_from_dict = WarehouseBasedDeliveryTime.from_dict(warehouse_based_delivery_time_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


