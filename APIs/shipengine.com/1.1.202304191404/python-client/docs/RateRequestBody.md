# RateRequestBody

A rate request body

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**calculate_tax_amount** | **bool** | Calculate the duties and tariffs for cross border shipments. | [optional] 
**carrier_ids** | **List[str]** | Array of carrier ids to get rates for | 
**is_return** | **bool** | Indicate if it&#39;s a return shipment | [optional] 
**package_types** | **List[str]** |  | [optional] 
**preferred_currency** | **str** | The currencies that are supported by ShipEngine are the ones that specified by ISO 4217: https://www.iso.org/iso-4217-currency-codes.html  | [optional] 
**service_codes** | **List[str]** |  | [optional] 

## Example

```python
from openapi_client.models.rate_request_body import RateRequestBody

# TODO update the JSON string below
json = "{}"
# create an instance of RateRequestBody from a JSON string
rate_request_body_instance = RateRequestBody.from_json(json)
# print the JSON string representation of the object
print(RateRequestBody.to_json())

# convert the object into a dict
rate_request_body_dict = rate_request_body_instance.to_dict()
# create an instance of RateRequestBody from a dict
rate_request_body_from_dict = RateRequestBody.from_dict(rate_request_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


