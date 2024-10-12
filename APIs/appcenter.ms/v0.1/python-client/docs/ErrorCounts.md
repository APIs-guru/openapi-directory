# ErrorCounts


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** | total error count | [optional] 
**errors** | [**List[ErrorsCountsPerDay200ResponseErrorsInner]**](ErrorsCountsPerDay200ResponseErrorsInner.md) | the total error count for day | [optional] 

## Example

```python
from openapi_client.models.error_counts import ErrorCounts

# TODO update the JSON string below
json = "{}"
# create an instance of ErrorCounts from a JSON string
error_counts_instance = ErrorCounts.from_json(json)
# print the JSON string representation of the object
print(ErrorCounts.to_json())

# convert the object into a dict
error_counts_dict = error_counts_instance.to_dict()
# create an instance of ErrorCounts from a dict
error_counts_from_dict = ErrorCounts.from_dict(error_counts_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


