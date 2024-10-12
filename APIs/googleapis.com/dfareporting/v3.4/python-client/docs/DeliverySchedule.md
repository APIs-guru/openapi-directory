# DeliverySchedule

Delivery Schedule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**frequency_cap** | [**FrequencyCap**](FrequencyCap.md) |  | [optional] 
**hard_cutoff** | **bool** | Whether or not hard cutoff is enabled. If true, the ad will not serve after the end date and time. Otherwise the ad will continue to be served until it has reached its delivery goals. | [optional] 
**impression_ratio** | **str** | Impression ratio for this ad. This ratio determines how often each ad is served relative to the others. For example, if ad A has an impression ratio of 1 and ad B has an impression ratio of 3, then Campaign Manager will serve ad B three times as often as ad A. Acceptable values are 1 to 10, inclusive. | [optional] 
**priority** | **str** | Serving priority of an ad, with respect to other ads. The lower the priority number, the greater the priority with which it is served. | [optional] 

## Example

```python
from openapi_client.models.delivery_schedule import DeliverySchedule

# TODO update the JSON string below
json = "{}"
# create an instance of DeliverySchedule from a JSON string
delivery_schedule_instance = DeliverySchedule.from_json(json)
# print the JSON string representation of the object
print(DeliverySchedule.to_json())

# convert the object into a dict
delivery_schedule_dict = delivery_schedule_instance.to_dict()
# create an instance of DeliverySchedule from a dict
delivery_schedule_from_dict = DeliverySchedule.from_dict(delivery_schedule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


