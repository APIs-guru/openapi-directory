# ErrorsCountsPerDay200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** | total error count | [optional] 
**errors** | [**List[ErrorsCountsPerDay200ResponseErrorsInner]**](ErrorsCountsPerDay200ResponseErrorsInner.md) | the total error count for day | [optional] 

## Example

```python
from openapi_client.models.errors_counts_per_day200_response import ErrorsCountsPerDay200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ErrorsCountsPerDay200Response from a JSON string
errors_counts_per_day200_response_instance = ErrorsCountsPerDay200Response.from_json(json)
# print the JSON string representation of the object
print(ErrorsCountsPerDay200Response.to_json())

# convert the object into a dict
errors_counts_per_day200_response_dict = errors_counts_per_day200_response_instance.to_dict()
# create an instance of ErrorsCountsPerDay200Response from a dict
errors_counts_per_day200_response_from_dict = ErrorsCountsPerDay200Response.from_dict(errors_counts_per_day200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


