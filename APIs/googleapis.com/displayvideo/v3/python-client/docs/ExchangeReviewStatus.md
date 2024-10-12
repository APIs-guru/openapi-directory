# ExchangeReviewStatus

Exchange review status for the creative.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exchange** | **str** | The exchange reviewing the creative. | [optional] 
**status** | **str** | Status of the exchange review. | [optional] 

## Example

```python
from openapi_client.models.exchange_review_status import ExchangeReviewStatus

# TODO update the JSON string below
json = "{}"
# create an instance of ExchangeReviewStatus from a JSON string
exchange_review_status_instance = ExchangeReviewStatus.from_json(json)
# print the JSON string representation of the object
print(ExchangeReviewStatus.to_json())

# convert the object into a dict
exchange_review_status_dict = exchange_review_status_instance.to_dict()
# create an instance of ExchangeReviewStatus from a dict
exchange_review_status_from_dict = ExchangeReviewStatus.from_dict(exchange_review_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


