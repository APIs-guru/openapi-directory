# ParameterListResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parameter_list** | [**ParameterList**](ParameterList.md) |  | [optional] 

## Example

```python
from openapi_client.models.parameter_list_response import ParameterListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ParameterListResponse from a JSON string
parameter_list_response_instance = ParameterListResponse.from_json(json)
# print the JSON string representation of the object
print(ParameterListResponse.to_json())

# convert the object into a dict
parameter_list_response_dict = parameter_list_response_instance.to_dict()
# create an instance of ParameterListResponse from a dict
parameter_list_response_from_dict = ParameterListResponse.from_dict(parameter_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


