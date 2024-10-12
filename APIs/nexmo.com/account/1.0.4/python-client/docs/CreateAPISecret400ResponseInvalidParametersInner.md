# CreateAPISecret400ResponseInvalidParametersInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Field name | [optional] 
**reason** | **str** | Explanation of why parameter is considered invalid | [optional] 

## Example

```python
from openapi_client.models.create_api_secret400_response_invalid_parameters_inner import CreateAPISecret400ResponseInvalidParametersInner

# TODO update the JSON string below
json = "{}"
# create an instance of CreateAPISecret400ResponseInvalidParametersInner from a JSON string
create_api_secret400_response_invalid_parameters_inner_instance = CreateAPISecret400ResponseInvalidParametersInner.from_json(json)
# print the JSON string representation of the object
print(CreateAPISecret400ResponseInvalidParametersInner.to_json())

# convert the object into a dict
create_api_secret400_response_invalid_parameters_inner_dict = create_api_secret400_response_invalid_parameters_inner_instance.to_dict()
# create an instance of CreateAPISecret400ResponseInvalidParametersInner from a dict
create_api_secret400_response_invalid_parameters_inner_from_dict = CreateAPISecret400ResponseInvalidParametersInner.from_dict(create_api_secret400_response_invalid_parameters_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


