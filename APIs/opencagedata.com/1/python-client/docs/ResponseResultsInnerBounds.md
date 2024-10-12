# ResponseResultsInnerBounds


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**northeast** | [**LatLng**](LatLng.md) |  | [optional] 
**southwest** | [**LatLng**](LatLng.md) |  | [optional] 

## Example

```python
from openapi_client.models.response_results_inner_bounds import ResponseResultsInnerBounds

# TODO update the JSON string below
json = "{}"
# create an instance of ResponseResultsInnerBounds from a JSON string
response_results_inner_bounds_instance = ResponseResultsInnerBounds.from_json(json)
# print the JSON string representation of the object
print(ResponseResultsInnerBounds.to_json())

# convert the object into a dict
response_results_inner_bounds_dict = response_results_inner_bounds_instance.to_dict()
# create an instance of ResponseResultsInnerBounds from a dict
response_results_inner_bounds_from_dict = ResponseResultsInnerBounds.from_dict(response_results_inner_bounds_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


