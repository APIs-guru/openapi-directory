# BulkRate

A bulk rate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | An [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) string that represents a date and time.  | [readonly] 
**errors** | [**List[Error]**](Error.md) | An array of errors that were returned while retrieving the bulk rate | [readonly] 
**rate_request_id** | **str** | A string that uniquely identifies the rate request | [readonly] 
**shipment_id** | **str** | A string that uniquely identifies the shipment | [readonly] 
**status** | [**RateResponseStatus**](RateResponseStatus.md) |  | [readonly] 

## Example

```python
from openapi_client.models.bulk_rate import BulkRate

# TODO update the JSON string below
json = "{}"
# create an instance of BulkRate from a JSON string
bulk_rate_instance = BulkRate.from_json(json)
# print the JSON string representation of the object
print(BulkRate.to_json())

# convert the object into a dict
bulk_rate_dict = bulk_rate_instance.to_dict()
# create an instance of BulkRate from a dict
bulk_rate_from_dict = BulkRate.from_dict(bulk_rate_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


