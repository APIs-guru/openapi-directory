# RankingMetrics

Evaluation metrics used by weighted-ALS models specified by feedback_type=implicit.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**average_rank** | **float** | Determines the goodness of a ranking by computing the percentile rank from the predicted confidence and dividing it by the original rank. | [optional] 
**mean_average_precision** | **float** | Calculates a precision per user for all the items by ranking them and then averages all the precisions across all the users. | [optional] 
**mean_squared_error** | **float** | Similar to the mean squared error computed in regression and explicit recommendation models except instead of computing the rating directly, the output from evaluate is computed against a preference which is 1 or 0 depending on if the rating exists or not. | [optional] 
**normalized_discounted_cumulative_gain** | **float** | A metric to determine the goodness of a ranking calculated from the predicted confidence by comparing it to an ideal rank measured by the original ratings. | [optional] 

## Example

```python
from openapi_client.models.ranking_metrics import RankingMetrics

# TODO update the JSON string below
json = "{}"
# create an instance of RankingMetrics from a JSON string
ranking_metrics_instance = RankingMetrics.from_json(json)
# print the JSON string representation of the object
print(RankingMetrics.to_json())

# convert the object into a dict
ranking_metrics_dict = ranking_metrics_instance.to_dict()
# create an instance of RankingMetrics from a dict
ranking_metrics_from_dict = RankingMetrics.from_dict(ranking_metrics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


