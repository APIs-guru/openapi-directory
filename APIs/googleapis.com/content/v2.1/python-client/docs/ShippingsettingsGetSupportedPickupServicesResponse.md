# ShippingsettingsGetSupportedPickupServicesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;&#x60;content#shippingsettingsGetSupportedPickupServicesResponse&#x60;\&quot;. | [optional] 
**pickup_services** | [**List[PickupServicesPickupService]**](PickupServicesPickupService.md) | A list of supported pickup services. May be empty. | [optional] 

## Example

```python
from openapi_client.models.shippingsettings_get_supported_pickup_services_response import ShippingsettingsGetSupportedPickupServicesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ShippingsettingsGetSupportedPickupServicesResponse from a JSON string
shippingsettings_get_supported_pickup_services_response_instance = ShippingsettingsGetSupportedPickupServicesResponse.from_json(json)
# print the JSON string representation of the object
print(ShippingsettingsGetSupportedPickupServicesResponse.to_json())

# convert the object into a dict
shippingsettings_get_supported_pickup_services_response_dict = shippingsettings_get_supported_pickup_services_response_instance.to_dict()
# create an instance of ShippingsettingsGetSupportedPickupServicesResponse from a dict
shippingsettings_get_supported_pickup_services_response_from_dict = ShippingsettingsGetSupportedPickupServicesResponse.from_dict(shippingsettings_get_supported_pickup_services_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


