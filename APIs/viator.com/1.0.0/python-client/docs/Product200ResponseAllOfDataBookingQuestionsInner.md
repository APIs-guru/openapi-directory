# Product200ResponseAllOfDataBookingQuestionsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** | **natural-language instructions** for *this* booking question - **note**: see [Booking questions](#section/Appendices/Booking-questions) for more information  | [optional] 
**question_id** | **int** | **unique numeric identifier** for *this* booking question - **note**: see [Booking questions](#section/Appendices/Booking-questions) for more information  | [optional] 
**required** | **bool** | **boolean indicator**: - &#x60;true&#x60; if the answer to *this* booking question &amp;lt;u&amp;gt;must&amp;lt;/u&amp;gt; be included in the request object to the b service when booking *this* product - **note**: see [Booking questions](#section/Appendices/Booking-questions) for more information  | [optional] 
**sort_order** | **int** | **sort order** for *this* booking question | [optional] 
**string_question_id** | **str** | **unique alphanumeric identifier** for the booking question - **note**: see [Booking questions](#section/Appendices/Booking-questions) for more information  | [optional] 
**sub_title** | **str** | **natural-language subtitle** for *this* booking question - **note**: see [Booking questions](#section/Appendices/Booking-questions) for more information  | [optional] 
**title** | **str** | **natural-language title** for *this* booking question - **note**: see [Booking questions](#section/Appendices/Booking-questions) for more information  | [optional] 

## Example

```python
from openapi_client.models.product200_response_all_of_data_booking_questions_inner import Product200ResponseAllOfDataBookingQuestionsInner

# TODO update the JSON string below
json = "{}"
# create an instance of Product200ResponseAllOfDataBookingQuestionsInner from a JSON string
product200_response_all_of_data_booking_questions_inner_instance = Product200ResponseAllOfDataBookingQuestionsInner.from_json(json)
# print the JSON string representation of the object
print(Product200ResponseAllOfDataBookingQuestionsInner.to_json())

# convert the object into a dict
product200_response_all_of_data_booking_questions_inner_dict = product200_response_all_of_data_booking_questions_inner_instance.to_dict()
# create an instance of Product200ResponseAllOfDataBookingQuestionsInner from a dict
product200_response_all_of_data_booking_questions_inner_from_dict = Product200ResponseAllOfDataBookingQuestionsInner.from_dict(product200_response_all_of_data_booking_questions_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


