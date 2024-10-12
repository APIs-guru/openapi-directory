# PickupServicesPickupService


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**carrier_name** | **str** | The name of the carrier (for example, &#x60;\&quot;UPS\&quot;&#x60;). Always present. | [optional] 
**country** | **str** | The CLDR country code of the carrier (for example, \&quot;US\&quot;). Always present. | [optional] 
**service_name** | **str** | The name of the pickup service (for example, &#x60;\&quot;Access point\&quot;&#x60;). Always present. | [optional] 

## Example

```python
from openapi_client.models.pickup_services_pickup_service import PickupServicesPickupService

# TODO update the JSON string below
json = "{}"
# create an instance of PickupServicesPickupService from a JSON string
pickup_services_pickup_service_instance = PickupServicesPickupService.from_json(json)
# print the JSON string representation of the object
print(PickupServicesPickupService.to_json())

# convert the object into a dict
pickup_services_pickup_service_dict = pickup_services_pickup_service_instance.to_dict()
# create an instance of PickupServicesPickupService from a dict
pickup_services_pickup_service_from_dict = PickupServicesPickupService.from_dict(pickup_services_pickup_service_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


