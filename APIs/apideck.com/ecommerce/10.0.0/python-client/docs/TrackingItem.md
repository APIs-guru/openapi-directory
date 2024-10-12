# TrackingItem

Represents the tracking information associated with an ecommerce order.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**number** | **str** |  The tracking number associated with the shipment, which can be used to track the progress of the delivery. | 
**provider** | **str** | The name or code of the carrier or shipping company that is handling the shipment. | 
**updated_at** | **datetime** | The date and time when the object was last updated. | [optional] [readonly] 
**url** | **str** | The URL of the carrier&#39;s tracking page, which can be used to view detailed information about the shipment&#39;s progress. | [optional] 

## Example

```python
from openapi_client.models.tracking_item import TrackingItem

# TODO update the JSON string below
json = "{}"
# create an instance of TrackingItem from a JSON string
tracking_item_instance = TrackingItem.from_json(json)
# print the JSON string representation of the object
print(TrackingItem.to_json())

# convert the object into a dict
tracking_item_dict = tracking_item_instance.to_dict()
# create an instance of TrackingItem from a dict
tracking_item_from_dict = TrackingItem.from_dict(tracking_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


