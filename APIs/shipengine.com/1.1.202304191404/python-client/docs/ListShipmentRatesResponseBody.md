# ListShipmentRatesResponseBody

A list shipment rates response body

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **str** | When the rate was created | 
**errors** | [**List[Error]**](Error.md) |  | 
**invalid_rates** | [**List[Rate]**](Rate.md) | An array of invalid shipment rates | [readonly] [default to []]
**rate_request_id** | **str** | A string that uniquely identifies the rate request | [readonly] 
**rates** | [**List[Rate]**](Rate.md) | An array of shipment rates | [readonly] 
**shipment_id** | **str** | A string that uniquely identifies the shipment | [readonly] 
**status** | [**RateResponseStatus**](RateResponseStatus.md) |  | [readonly] 

## Example

```python
from openapi_client.models.list_shipment_rates_response_body import ListShipmentRatesResponseBody

# TODO update the JSON string below
json = "{}"
# create an instance of ListShipmentRatesResponseBody from a JSON string
list_shipment_rates_response_body_instance = ListShipmentRatesResponseBody.from_json(json)
# print the JSON string representation of the object
print(ListShipmentRatesResponseBody.to_json())

# convert the object into a dict
list_shipment_rates_response_body_dict = list_shipment_rates_response_body_instance.to_dict()
# create an instance of ListShipmentRatesResponseBody from a dict
list_shipment_rates_response_body_from_dict = ListShipmentRatesResponseBody.from_dict(list_shipment_rates_response_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


