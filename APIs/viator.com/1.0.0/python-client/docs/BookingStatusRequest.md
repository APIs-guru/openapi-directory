# BookingStatusRequest

**note**: all items are optional, but at least one needs to be included

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**booking_date_from** | **str** | **earliest date** for *this* booking (must be in the future) | [optional] 
**booking_date_to** | **str** | **latest date** for *this* booking (must be in the future) | [optional] 
**distributor_item_refs** | **List[str]** | **array** of partner-defined distributor item reference identifiers e.g. &#x60;[&#39;refItem1&#39;,&#39;refItem2&#39;,&#39;refItem3&#39;]&#x60; | [optional] 
**distributor_refs** | **List[str]** | **array** of partner-defined distributor reference identifiers | [optional] 
**item_ids** | **List[int]** | **array** of item identifiers to check | [optional] 
**lead_first_name** | **str** | **first name** of the lead traveler | [optional] 
**lead_surname** | **str** | **surname** of the lead traveler | [optional] 
**test** | **bool** | **specifier**: - &#x60;true&#x60;: bypass the poll limit in the prelive environment only (recommended for testing) - &#x60;false&#x60;: (default)  | [optional] 

## Example

```python
from openapi_client.models.booking_status_request import BookingStatusRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BookingStatusRequest from a JSON string
booking_status_request_instance = BookingStatusRequest.from_json(json)
# print the JSON string representation of the object
print(BookingStatusRequest.to_json())

# convert the object into a dict
booking_status_request_dict = booking_status_request_instance.to_dict()
# create an instance of BookingStatusRequest from a dict
booking_status_request_from_dict = BookingStatusRequest.from_dict(booking_status_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


