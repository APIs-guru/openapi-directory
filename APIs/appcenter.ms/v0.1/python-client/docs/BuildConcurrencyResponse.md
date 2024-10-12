# BuildConcurrencyResponse

Number of pipelines

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**committed_quantity** | **float** | The number of pipelines committed, which can be equal or greater than the number from the billing plan | [optional] 
**quantity** | **float** | The number of pipelines set by the billing plan | [optional] 

## Example

```python
from openapi_client.models.build_concurrency_response import BuildConcurrencyResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BuildConcurrencyResponse from a JSON string
build_concurrency_response_instance = BuildConcurrencyResponse.from_json(json)
# print the JSON string representation of the object
print(BuildConcurrencyResponse.to_json())

# convert the object into a dict
build_concurrency_response_dict = build_concurrency_response_instance.to_dict()
# create an instance of BuildConcurrencyResponse from a dict
build_concurrency_response_from_dict = BuildConcurrencyResponse.from_dict(build_concurrency_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


