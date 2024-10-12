# CarrierRate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**carrier_name** | **str** | Carrier service, such as &#x60;\&quot;UPS\&quot;&#x60; or &#x60;\&quot;Fedex\&quot;&#x60;. The list of supported carriers can be retrieved through the &#x60;getSupportedCarriers&#x60; method. Required. | [optional] 
**carrier_service** | **str** | Carrier service, such as &#x60;\&quot;ground\&quot;&#x60; or &#x60;\&quot;2 days\&quot;&#x60;. The list of supported services for a carrier can be retrieved through the &#x60;getSupportedCarriers&#x60; method. Required. | [optional] 
**flat_adjustment** | [**Price**](Price.md) |  | [optional] 
**name** | **str** | Name of the carrier rate. Must be unique per rate group. Required. | [optional] 
**origin_postal_code** | **str** | Shipping origin for this carrier rate. Required. | [optional] 
**percentage_adjustment** | **str** | Multiplicative shipping rate modifier as a number in decimal notation. Can be negative. For example &#x60;\&quot;5.4\&quot;&#x60; increases the rate by 5.4%, &#x60;\&quot;-3\&quot;&#x60; decreases the rate by 3%. Optional. | [optional] 

## Example

```python
from openapi_client.models.carrier_rate import CarrierRate

# TODO update the JSON string below
json = "{}"
# create an instance of CarrierRate from a JSON string
carrier_rate_instance = CarrierRate.from_json(json)
# print the JSON string representation of the object
print(CarrierRate.to_json())

# convert the object into a dict
carrier_rate_dict = carrier_rate_instance.to_dict()
# create an instance of CarrierRate from a dict
carrier_rate_from_dict = CarrierRate.from_dict(carrier_rate_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


