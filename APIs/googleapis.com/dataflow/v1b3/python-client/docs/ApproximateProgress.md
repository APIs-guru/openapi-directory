# ApproximateProgress

Obsolete in favor of ApproximateReportedProgress and ApproximateSplitRequest.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**percent_complete** | **float** | Obsolete. | [optional] 
**position** | [**Position**](Position.md) |  | [optional] 
**remaining_time** | **str** | Obsolete. | [optional] 

## Example

```python
from openapi_client.models.approximate_progress import ApproximateProgress

# TODO update the JSON string below
json = "{}"
# create an instance of ApproximateProgress from a JSON string
approximate_progress_instance = ApproximateProgress.from_json(json)
# print the JSON string representation of the object
print(ApproximateProgress.to_json())

# convert the object into a dict
approximate_progress_dict = approximate_progress_instance.to_dict()
# create an instance of ApproximateProgress from a dict
approximate_progress_from_dict = ApproximateProgress.from_dict(approximate_progress_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


