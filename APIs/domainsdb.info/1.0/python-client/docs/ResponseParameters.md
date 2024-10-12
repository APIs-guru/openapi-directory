# ResponseParameters


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page** | **str** | Next page id | [optional] 
**time** | **str** | Time took | 
**total** | **int** | Total days reported | [optional] 

## Example

```python
from openapi_client.models.response_parameters import ResponseParameters

# TODO update the JSON string below
json = "{}"
# create an instance of ResponseParameters from a JSON string
response_parameters_instance = ResponseParameters.from_json(json)
# print the JSON string representation of the object
print(ResponseParameters.to_json())

# convert the object into a dict
response_parameters_dict = response_parameters_instance.to_dict()
# create an instance of ResponseParameters from a dict
response_parameters_from_dict = ResponseParameters.from_dict(response_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


