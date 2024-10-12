# CompareBulkRatesRequestBody

A rate shipments request body

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rate_options** | [**RateRequestBody**](RateRequestBody.md) | The rate options | 

## Example

```python
from openapi_client.models.compare_bulk_rates_request_body import CompareBulkRatesRequestBody

# TODO update the JSON string below
json = "{}"
# create an instance of CompareBulkRatesRequestBody from a JSON string
compare_bulk_rates_request_body_instance = CompareBulkRatesRequestBody.from_json(json)
# print the JSON string representation of the object
print(CompareBulkRatesRequestBody.to_json())

# convert the object into a dict
compare_bulk_rates_request_body_dict = compare_bulk_rates_request_body_instance.to_dict()
# create an instance of CompareBulkRatesRequestBody from a dict
compare_bulk_rates_request_body_from_dict = CompareBulkRatesRequestBody.from_dict(compare_bulk_rates_request_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


