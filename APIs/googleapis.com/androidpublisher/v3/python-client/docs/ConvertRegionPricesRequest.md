# ConvertRegionPricesRequest

Request message for ConvertRegionPrices.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**price** | [**Money**](Money.md) |  | [optional] 

## Example

```python
from openapi_client.models.convert_region_prices_request import ConvertRegionPricesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ConvertRegionPricesRequest from a JSON string
convert_region_prices_request_instance = ConvertRegionPricesRequest.from_json(json)
# print the JSON string representation of the object
print(ConvertRegionPricesRequest.to_json())

# convert the object into a dict
convert_region_prices_request_dict = convert_region_prices_request_instance.to_dict()
# create an instance of ConvertRegionPricesRequest from a dict
convert_region_prices_request_from_dict = ConvertRegionPricesRequest.from_dict(convert_region_prices_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


