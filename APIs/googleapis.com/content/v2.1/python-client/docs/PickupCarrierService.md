# PickupCarrierService


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**carrier_name** | **str** | The name of the pickup carrier (for example, &#x60;\&quot;UPS\&quot;&#x60;). Required. | [optional] 
**service_name** | **str** | The name of the pickup service (for example, &#x60;\&quot;Access point\&quot;&#x60;). Required. | [optional] 

## Example

```python
from openapi_client.models.pickup_carrier_service import PickupCarrierService

# TODO update the JSON string below
json = "{}"
# create an instance of PickupCarrierService from a JSON string
pickup_carrier_service_instance = PickupCarrierService.from_json(json)
# print the JSON string representation of the object
print(PickupCarrierService.to_json())

# convert the object into a dict
pickup_carrier_service_dict = pickup_carrier_service_instance.to_dict()
# create an instance of PickupCarrierService from a dict
pickup_carrier_service_from_dict = PickupCarrierService.from_dict(pickup_carrier_service_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


