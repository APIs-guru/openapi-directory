# ExampleRequest

Sample input data for the service's input(s).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**global_parameters** | **Dict[str, object]** | Sample input data for the web service&#39;s global parameters | [optional] 
**inputs** | **Dict[str, List[List[object]]]** | Sample input data for the web service&#39;s input(s) given as an input name to sample input values matrix map. | [optional] 

## Example

```python
from openapi_client.models.example_request import ExampleRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ExampleRequest from a JSON string
example_request_instance = ExampleRequest.from_json(json)
# print the JSON string representation of the object
print(ExampleRequest.to_json())

# convert the object into a dict
example_request_dict = example_request_instance.to_dict()
# create an instance of ExampleRequest from a dict
example_request_from_dict = ExampleRequest.from_dict(example_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


