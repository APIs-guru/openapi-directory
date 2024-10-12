# InfoFromBuyer

This container is returned if the buyer is returning one or more line items in an order that is associated with the payment dispute, and that buyer has provided return shipping tracking information and/or a note about the return.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**note** | **str** | This field shows any note that was left by the buyer in regard to the dispute. | [optional] 
**return_shipment_tracking** | [**List[TrackingInfo]**](TrackingInfo.md) | This array shows shipment tracking information for one or more shipping packages being returned to the buyer after a payment dispute. | [optional] 

## Example

```python
from openapi_client.models.info_from_buyer import InfoFromBuyer

# TODO update the JSON string below
json = "{}"
# create an instance of InfoFromBuyer from a JSON string
info_from_buyer_instance = InfoFromBuyer.from_json(json)
# print the JSON string representation of the object
print(InfoFromBuyer.to_json())

# convert the object into a dict
info_from_buyer_dict = info_from_buyer_instance.to_dict()
# create an instance of InfoFromBuyer from a dict
info_from_buyer_from_dict = InfoFromBuyer.from_dict(info_from_buyer_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


