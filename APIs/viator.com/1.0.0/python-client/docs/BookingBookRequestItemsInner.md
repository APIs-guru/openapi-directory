# BookingBookRequestItemsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**booking_question_answers** | [**List[BookingBookRequestItemsInnerBookingQuestionAnswersInner]**](BookingBookRequestItemsInnerBookingQuestionAnswersInner.md) | **array** of objects containing booking questions and the answers provided for them for *this* product - If a booking question is available in the &#x60;bookingQuestions&#x60; array in the response from [/product](#operation/product) for *this* product, the matching &#x60;bookingQuestionAnswers&#x60; must be passed to *this* service.  - If a product does not have any booking questions, you can omit the &#x60;bookingQuestionAnswers&#x60; array in your request.  - Any invalid or unrequired booking-question answers that are passed to *this* service will be ignored (and, no exceptions will be raised)  - You will need to include this array if [/product](#operation/product) returns any questions in the &#x60;bookingQuestions&#x60; array.  | [optional] 
**hotel_id** | **str** | **specifer** of the hotel If [/product](#operation/product) returns &#x60;hotelPickup&#x60;: &#x60;true&#x60; and a list of hotels is available for *this* product in [/booking/hotels](#operation/bookingHotels), a &#x60;hotelId&#x60; must be captured (as per the hotel service id field); or, use an alternative &#x60;hotelId&#x60;, such as:    - &#x60;\&quot;notBooked\&quot;&#x60;: the customer has not yet booked their hotel  - &#x60;\&quot;notListed\&quot;&#x60;: the customer&#39;s hotel is not listed   If the customer chooses one of these options, the product supplier may need to correspond with the user to find out their pick-up location. The best way to do this is by enabling [Closed-Loop-Communication (CLC)](#section/Merchant-APIs/Supplier-communications).  | [optional] 
**language_option_code** | **str** | **specifier** of language service provided for this product that has been chosen for this booking (usually in the format langcode/Service eg en/SERVICE_GUIDE. If the product details service [/product](#operation/product) for the product returns a langService, this must be provided.) | [optional] 
**partner_item_detail** | [**BookingBookRequestItemsInnerPartnerItemDetail**](BookingBookRequestItemsInnerPartnerItemDetail.md) |  | [optional] 
**pickup_point** | **str** | **details** about the hotel pick-up point (must be provided if the &#x60;hotelId&#x60; selected by the user is &#x60;&#39;notListed&#39;&#x60; or if no hotels are returned for *this* product in [/booking/hotels](#operation/bookingHotels) where &#x60;hotelPickup&#x60; is &#x60;true&#x60;. | [optional] 
**product_code** | **str** | **unique alphanumeric identifier** of the product to be booked | [optional] 
**special_requirements** | **str** | **text field** to capture any additional requirements for the booking, such as dietary requirements or if a wheelchair is required | [optional] 
**tour_grade_code** | **str** | **specifier** of the tour grade to be booked (if tour grades are supplied in [/product](#operation/product), you must allow the customer to select a tour grade code. If no tour grades are available for *this* product, set this to &#x60;&#39;DEFAULT&#39;&#x60;.) | [optional] 
**travel_date** | **str** | **date** of travel for the item in format yyyy-mm-dd | [optional] 
**travellers** | [**List[BookingBookRequestItemsInnerTravellersInner]**](BookingBookRequestItemsInnerTravellersInner.md) | **array** of traveler names, details and whether they are the lead traveller | [optional] 

## Example

```python
from openapi_client.models.booking_book_request_items_inner import BookingBookRequestItemsInner

# TODO update the JSON string below
json = "{}"
# create an instance of BookingBookRequestItemsInner from a JSON string
booking_book_request_items_inner_instance = BookingBookRequestItemsInner.from_json(json)
# print the JSON string representation of the object
print(BookingBookRequestItemsInner.to_json())

# convert the object into a dict
booking_book_request_items_inner_dict = booking_book_request_items_inner_instance.to_dict()
# create an instance of BookingBookRequestItemsInner from a dict
booking_book_request_items_inner_from_dict = BookingBookRequestItemsInner.from_dict(booking_book_request_items_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


