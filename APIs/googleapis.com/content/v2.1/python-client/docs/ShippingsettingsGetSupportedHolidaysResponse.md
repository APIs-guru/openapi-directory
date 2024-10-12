# ShippingsettingsGetSupportedHolidaysResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**holidays** | [**List[HolidaysHoliday]**](HolidaysHoliday.md) | A list of holidays applicable for delivery guarantees. May be empty. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;&#x60;content#shippingsettingsGetSupportedHolidaysResponse&#x60;\&quot;. | [optional] 

## Example

```python
from openapi_client.models.shippingsettings_get_supported_holidays_response import ShippingsettingsGetSupportedHolidaysResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ShippingsettingsGetSupportedHolidaysResponse from a JSON string
shippingsettings_get_supported_holidays_response_instance = ShippingsettingsGetSupportedHolidaysResponse.from_json(json)
# print the JSON string representation of the object
print(ShippingsettingsGetSupportedHolidaysResponse.to_json())

# convert the object into a dict
shippingsettings_get_supported_holidays_response_dict = shippingsettings_get_supported_holidays_response_instance.to_dict()
# create an instance of ShippingsettingsGetSupportedHolidaysResponse from a dict
shippingsettings_get_supported_holidays_response_from_dict = ShippingsettingsGetSupportedHolidaysResponse.from_dict(shippingsettings_get_supported_holidays_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


