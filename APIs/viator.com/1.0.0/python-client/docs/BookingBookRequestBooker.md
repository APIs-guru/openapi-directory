# BookingBookRequestBooker

**object** containing details about the primary contact (**note**: this contact needn't be a traveller)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cell_phone** | **str** | **telephone number** of the lead traveler  **Note**:    * Must be included to enable CLC communications   * See [Supplier communications](#section/Merchant-APIs/Supplier-communications) for more information  | [optional] 
**cell_phone_country_code** | **str** | **country code** for the telephone number of the lead traveler  **Note**:     * Must be included to enable CLC communications.    * See [Supplier communications](#section/Merchant-APIs/Supplier-communications) for more information  | [optional] 
**email** | **str** | **email address** of the primary contact | [optional] 
**firstname** | **str** | **first name** of the primary contact  | 
**home_phone** | **str** | **phone number** (home) of the primary contact | [optional] 
**surname** | **str** | **surname** of the primary contact | 
**title** | **str** | **title** of the primary contact | [optional] 

## Example

```python
from openapi_client.models.booking_book_request_booker import BookingBookRequestBooker

# TODO update the JSON string below
json = "{}"
# create an instance of BookingBookRequestBooker from a JSON string
booking_book_request_booker_instance = BookingBookRequestBooker.from_json(json)
# print the JSON string representation of the object
print(BookingBookRequestBooker.to_json())

# convert the object into a dict
booking_book_request_booker_dict = booking_book_request_booker_instance.to_dict()
# create an instance of BookingBookRequestBooker from a dict
booking_book_request_booker_from_dict = BookingBookRequestBooker.from_dict(booking_book_request_booker_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


