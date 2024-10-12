# SearchResponse

Success

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | The Vonage account ID the request was for. | [optional] 
**checks** | [**List[SearchResponseChecksInner]**](SearchResponseChecksInner.md) | The list of checks made for this verification and their outcomes. | [optional] 
**currency** | **str** | The currency code. | [optional] 
**date_finalized** | **str** | The date and time the verification request was completed. This response parameter is in the following format YYYY-MM-DD HH:MM:SS. | [optional] 
**date_submitted** | **str** | The date and time the verification request was submitted, in the following format YYYY-MM-DD HH:MM:SS. | [optional] 
**estimated_price_messages_sent** | **str** | This field may not be present, depending on your pricing model. The value indicates the cost (in EUR) of the calls made and messages sent for the verification process. This value may be updated during and shortly after the request completes because user input events can overlap with message/call events. When this field is present, the total cost of the verification is the sum of this field and the &#x60;price&#x60; field.  | [optional] 
**events** | [**List[SearchResponseEventsInner]**](SearchResponseEventsInner.md) | The events that have taken place to verify this number, and their unique identifiers. | [optional] 
**first_event_date** | **str** | The time the first verification attempt was made, in the following format YYYY-MM-DD HH:MM:SS. | [optional] 
**last_event_date** | **str** | The time the last verification attempt was made, in the following format YYYY-MM-DD HH:MM:SS. | [optional] 
**number** | **str** | The phone number this verification request was used for. | [optional] 
**price** | **str** | The cost incurred for this verification request. | [optional] 
**request_id** | **str** | The &#x60;request_id&#x60; that you received in the response to the Verify request and used in the Verify search request. | [optional] 
**sender_id** | **str** | The &#x60;sender_id&#x60; you provided in the Verify request. | [optional] [default to 'verify']
**status** | **str** | Code | Description -- | -- IN PROGRESS | The search is still in progress. SUCCESS | Your user entered a correct verification code. FAILED | Your user entered an incorrect code more than three times. EXPIRED | Your user did not enter a code before the &#x60;pin_expiry&#x60; time elapsed. CANCELLED | The verification process was cancelled by a Verify control request.  | [optional] 

## Example

```python
from openapi_client.models.search_response import SearchResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SearchResponse from a JSON string
search_response_instance = SearchResponse.from_json(json)
# print the JSON string representation of the object
print(SearchResponse.to_json())

# convert the object into a dict
search_response_dict = search_response_instance.to_dict()
# create an instance of SearchResponse from a dict
search_response_from_dict = SearchResponse.from_dict(search_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


