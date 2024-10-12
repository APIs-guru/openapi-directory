# RateRequestByShipmentIds


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**shipment_ids** | **List[str]** | The array of shipment IDs | 

## Example

```python
from openapi_client.models.rate_request_by_shipment_ids import RateRequestByShipmentIds

# TODO update the JSON string below
json = "{}"
# create an instance of RateRequestByShipmentIds from a JSON string
rate_request_by_shipment_ids_instance = RateRequestByShipmentIds.from_json(json)
# print the JSON string representation of the object
print(RateRequestByShipmentIds.to_json())

# convert the object into a dict
rate_request_by_shipment_ids_dict = rate_request_by_shipment_ids_instance.to_dict()
# create an instance of RateRequestByShipmentIds from a dict
rate_request_by_shipment_ids_from_dict = RateRequestByShipmentIds.from_dict(rate_request_by_shipment_ids_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


