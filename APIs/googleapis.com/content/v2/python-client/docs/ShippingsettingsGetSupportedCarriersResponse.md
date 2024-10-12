# ShippingsettingsGetSupportedCarriersResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**carriers** | [**List[CarriersCarrier]**](CarriersCarrier.md) | A list of supported carriers. May be empty. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;content#shippingsettingsGetSupportedCarriersResponse\&quot;. | [optional] 

## Example

```python
from openapi_client.models.shippingsettings_get_supported_carriers_response import ShippingsettingsGetSupportedCarriersResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ShippingsettingsGetSupportedCarriersResponse from a JSON string
shippingsettings_get_supported_carriers_response_instance = ShippingsettingsGetSupportedCarriersResponse.from_json(json)
# print the JSON string representation of the object
print(ShippingsettingsGetSupportedCarriersResponse.to_json())

# convert the object into a dict
shippingsettings_get_supported_carriers_response_dict = shippingsettings_get_supported_carriers_response_instance.to_dict()
# create an instance of ShippingsettingsGetSupportedCarriersResponse from a dict
shippingsettings_get_supported_carriers_response_from_dict = ShippingsettingsGetSupportedCarriersResponse.from_dict(shippingsettings_get_supported_carriers_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


