# VerifySearch200Response


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
**request_id** | **str** | The &#x60;request_id&#x60; that you received in the response to the Verify request and used in the Verify search request. May be empty in an error situation. | [optional] 
**sender_id** | **str** | The &#x60;sender_id&#x60; you provided in the Verify request. | [optional] [default to 'verify']
**status** | **str** | Code | Description -- | -- IN PROGRESS | The search is still in progress. SUCCESS | Your user entered a correct verification code. FAILED | Your user entered an incorrect code more than three times. EXPIRED | Your user did not enter a code before the &#x60;pin_expiry&#x60; time elapsed. CANCELLED | The verification process was cancelled by a Verify control request. 101 | You supplied an invalid &#x60;request_id&#x60;, or the data is not available. Note that for recently-completed requests, there can be a delay of up to 1 minute before the results are available in search.  | [optional] 
**error_text** | **str** | If &#x60;status&#x60; is not &#x60;SUCCESS&#x60;, this message explains the issue encountered. | [optional] 

## Example

```python
from openapi_client.models.verify_search200_response import VerifySearch200Response

# TODO update the JSON string below
json = "{}"
# create an instance of VerifySearch200Response from a JSON string
verify_search200_response_instance = VerifySearch200Response.from_json(json)
# print the JSON string representation of the object
print(VerifySearch200Response.to_json())

# convert the object into a dict
verify_search200_response_dict = verify_search200_response_instance.to_dict()
# create an instance of VerifySearch200Response from a dict
verify_search200_response_from_dict = VerifySearch200Response.from_dict(verify_search200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


