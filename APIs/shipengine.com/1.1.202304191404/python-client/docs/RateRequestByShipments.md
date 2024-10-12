# RateRequestByShipments


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**shipments** | [**List[AddressValidatingShipment]**](AddressValidatingShipment.md) | The array of shipments to get bulk rate estimates for | 

## Example

```python
from openapi_client.models.rate_request_by_shipments import RateRequestByShipments

# TODO update the JSON string below
json = "{}"
# create an instance of RateRequestByShipments from a JSON string
rate_request_by_shipments_instance = RateRequestByShipments.from_json(json)
# print the JSON string representation of the object
print(RateRequestByShipments.to_json())

# convert the object into a dict
rate_request_by_shipments_dict = rate_request_by_shipments_instance.to_dict()
# create an instance of RateRequestByShipments from a dict
rate_request_by_shipments_from_dict = RateRequestByShipments.from_dict(rate_request_by_shipments_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


