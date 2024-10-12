# ResponseResultsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annotations** | **object** |  | [optional] 
**bounds** | [**ResponseResultsInnerBounds**](ResponseResultsInnerBounds.md) |  | [optional] 
**components** | **object** |  | [optional] 
**confidence** | **int** |  | [optional] 
**formatted** | **str** |  | [optional] 
**geometry** | [**LatLng**](LatLng.md) |  | [optional] 

## Example

```python
from openapi_client.models.response_results_inner import ResponseResultsInner

# TODO update the JSON string below
json = "{}"
# create an instance of ResponseResultsInner from a JSON string
response_results_inner_instance = ResponseResultsInner.from_json(json)
# print the JSON string representation of the object
print(ResponseResultsInner.to_json())

# convert the object into a dict
response_results_inner_dict = response_results_inner_instance.to_dict()
# create an instance of ResponseResultsInner from a dict
response_results_inner_from_dict = ResponseResultsInner.from_dict(response_results_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


