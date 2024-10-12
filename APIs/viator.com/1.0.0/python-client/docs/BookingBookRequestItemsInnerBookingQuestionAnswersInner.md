# BookingBookRequestItemsInnerBookingQuestionAnswersInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**answer** | **str** | **answer** to the question for the &#x60;questionId&#x60; listed (recommended length for the answer is 500 characters)  **Note**: To specify answers for each traveler, separate the values with a comma as in the per_person_booking_questions request example  | [optional] 
**question_id** | **int** | **numeric identifier** for the question (**note**: &#x60;questionId&#x60; can be retrieved from the [/product](#operation/product) service) | [optional] 

## Example

```python
from openapi_client.models.booking_book_request_items_inner_booking_question_answers_inner import BookingBookRequestItemsInnerBookingQuestionAnswersInner

# TODO update the JSON string below
json = "{}"
# create an instance of BookingBookRequestItemsInnerBookingQuestionAnswersInner from a JSON string
booking_book_request_items_inner_booking_question_answers_inner_instance = BookingBookRequestItemsInnerBookingQuestionAnswersInner.from_json(json)
# print the JSON string representation of the object
print(BookingBookRequestItemsInnerBookingQuestionAnswersInner.to_json())

# convert the object into a dict
booking_book_request_items_inner_booking_question_answers_inner_dict = booking_book_request_items_inner_booking_question_answers_inner_instance.to_dict()
# create an instance of BookingBookRequestItemsInnerBookingQuestionAnswersInner from a dict
booking_book_request_items_inner_booking_question_answers_inner_from_dict = BookingBookRequestItemsInnerBookingQuestionAnswersInner.from_dict(booking_book_request_items_inner_booking_question_answers_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


