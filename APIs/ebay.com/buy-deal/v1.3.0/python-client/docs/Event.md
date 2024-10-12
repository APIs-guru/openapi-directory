# Event

The result set for the event search.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**applicable_coupons** | [**List[Coupon]**](Coupon.md) | A list of coupons associated with the event. | [optional] 
**description** | **str** | The event description. | [optional] 
**end_date** | **str** | The end date for the event. | [optional] 
**event_affiliate_web_url** | **str** | The URL of the View Event page for the event, which includes the affiliate tracking ID. | [optional] 
**event_id** | **str** | The unique identifier for the event. | [optional] 
**event_web_url** | **str** | The web URL for the event. | [optional] 
**images** | [**List[Image]**](Image.md) | The images for the event. | [optional] 
**start_date** | **str** | The start date for the event. | [optional] 
**terms** | [**Terms**](Terms.md) |  | [optional] 
**title** | **str** | The title of the event. | [optional] 

## Example

```python
from openapi_client.models.event import Event

# TODO update the JSON string below
json = "{}"
# create an instance of Event from a JSON string
event_instance = Event.from_json(json)
# print the JSON string representation of the object
print(Event.to_json())

# convert the object into a dict
event_dict = event_instance.to_dict()
# create an instance of Event from a dict
event_from_dict = Event.from_dict(event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


