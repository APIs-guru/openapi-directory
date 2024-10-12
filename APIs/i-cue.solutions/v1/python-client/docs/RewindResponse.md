# RewindResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hyperparameters** | [**RewindHyperparameterResponse**](RewindHyperparameterResponse.md) |  | [optional] 
**time_series** | [**List[RewindTimeSeriesResponse]**](RewindTimeSeriesResponse.md) |  | [optional] 
**total_cost** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.rewind_response import RewindResponse

# TODO update the JSON string below
json = "{}"
# create an instance of RewindResponse from a JSON string
rewind_response_instance = RewindResponse.from_json(json)
# print the JSON string representation of the object
print(RewindResponse.to_json())

# convert the object into a dict
rewind_response_dict = rewind_response_instance.to_dict()
# create an instance of RewindResponse from a dict
rewind_response_from_dict = RewindResponse.from_dict(rewind_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


