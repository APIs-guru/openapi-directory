# ParameterList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **str** | Total number of records returned from the query. | [optional] 
**message** | **str** | Success/Failure. | [optional] 
**parameter_array** | [**ParameterArray**](ParameterArray.md) |  | [optional] 

## Example

```python
from openapi_client.models.parameter_list import ParameterList

# TODO update the JSON string below
json = "{}"
# create an instance of ParameterList from a JSON string
parameter_list_instance = ParameterList.from_json(json)
# print the JSON string representation of the object
print(ParameterList.to_json())

# convert the object into a dict
parameter_list_dict = parameter_list_instance.to_dict()
# create an instance of ParameterList from a dict
parameter_list_from_dict = ParameterList.from_dict(parameter_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


