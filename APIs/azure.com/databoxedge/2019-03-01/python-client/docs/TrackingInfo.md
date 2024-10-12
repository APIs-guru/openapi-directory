# TrackingInfo

Tracking courier information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**carrier_name** | **str** | Name of the carrier used in the delivery. | [optional] 
**serial_number** | **str** | Serial number of the device being tracked. | [optional] 
**tracking_id** | **str** | Tracking ID of the shipment. | [optional] 
**tracking_url** | **str** | Tracking URL of the shipment. | [optional] 

## Example

```python
from openapi_client.models.tracking_info import TrackingInfo

# TODO update the JSON string below
json = "{}"
# create an instance of TrackingInfo from a JSON string
tracking_info_instance = TrackingInfo.from_json(json)
# print the JSON string representation of the object
print(TrackingInfo.to_json())

# convert the object into a dict
tracking_info_dict = tracking_info_instance.to_dict()
# create an instance of TrackingInfo from a dict
tracking_info_from_dict = TrackingInfo.from_dict(tracking_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


