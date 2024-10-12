# SummarizePriceAccuracyResponse

Response message for PriceAccuracyViewService.SummarizePriceAccuracy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current_book_on_google_score** | **str** | The current Book on Google price accuracy score. | [optional] 
**current_overall_score** | **str** | The current price accuracy score combining both website and Book on Google scores. | [optional] 
**current_score** | **str** | The current price accuracy score. Contains the same value as &#x60;current_website_score&#x60;. For clarity, use either &#x60;current_website_score&#x60; or &#39;current_overall_score&#x60; depending upon which is needed. | [optional] 
**current_website_score** | **str** | The current website price accuracy score. | [optional] 
**predicted_book_on_google_score** | **str** | The predicted Book on Google price accuracy score. | [optional] 
**predicted_overall_score** | **str** | The predicted price accuracy score combining both website and Book on Google scores. | [optional] 
**predicted_score** | **str** | The predicted price accuracy score. Contains the same value as &#x60;predicted_website_score&#x60;. For clarity, use either &#x60;predicted_website_score&#x60; or &#39;predicted_overall_score&#x60; depending upon which is needed. | [optional] 
**predicted_website_score** | **str** | The predicted website price accuracy score. | [optional] 
**update_time** | **str** | The update timestamp for the current score. | [optional] 

## Example

```python
from openapi_client.models.summarize_price_accuracy_response import SummarizePriceAccuracyResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SummarizePriceAccuracyResponse from a JSON string
summarize_price_accuracy_response_instance = SummarizePriceAccuracyResponse.from_json(json)
# print the JSON string representation of the object
print(SummarizePriceAccuracyResponse.to_json())

# convert the object into a dict
summarize_price_accuracy_response_dict = summarize_price_accuracy_response_instance.to_dict()
# create an instance of SummarizePriceAccuracyResponse from a dict
summarize_price_accuracy_response_from_dict = SummarizePriceAccuracyResponse.from_dict(summarize_price_accuracy_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


