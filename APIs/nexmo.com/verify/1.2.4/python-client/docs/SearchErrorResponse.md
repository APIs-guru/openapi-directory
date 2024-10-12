# SearchErrorResponse

Error

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_text** | **str** | If &#x60;status&#x60; is not &#x60;SUCCESS&#x60;, this message explains the issue encountered. | [optional] 
**request_id** | **str** | The &#x60;request_id&#x60; that you received in the response to the Verify request and used in the Verify search request. May be empty in an error situation. | [optional] 
**status** | **str** | Code | Description -- | -- IN PROGRESS | The search is still in progress. SUCCESS | Your user entered a correct verification code. FAILED | Your user entered an incorrect code more than three times. EXPIRED | Your user did not enter a code before the &#x60;pin_expiry&#x60; time elapsed. CANCELLED | The verification process was cancelled by a Verify control request. 101 | You supplied an invalid &#x60;request_id&#x60;, or the data is not available. Note that for recently-completed requests, there can be a delay of up to 1 minute before the results are available in search.  | [optional] 

## Example

```python
from openapi_client.models.search_error_response import SearchErrorResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SearchErrorResponse from a JSON string
search_error_response_instance = SearchErrorResponse.from_json(json)
# print the JSON string representation of the object
print(SearchErrorResponse.to_json())

# convert the object into a dict
search_error_response_dict = search_error_response_instance.to_dict()
# create an instance of SearchErrorResponse from a dict
search_error_response_from_dict = SearchErrorResponse.from_dict(search_error_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


