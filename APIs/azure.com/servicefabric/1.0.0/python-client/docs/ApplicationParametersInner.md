# ApplicationParametersInner

The parameters

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** |  | [optional] 
**value** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.application_parameters_inner import ApplicationParametersInner

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationParametersInner from a JSON string
application_parameters_inner_instance = ApplicationParametersInner.from_json(json)
# print the JSON string representation of the object
print(ApplicationParametersInner.to_json())

# convert the object into a dict
application_parameters_inner_dict = application_parameters_inner_instance.to_dict()
# create an instance of ApplicationParametersInner from a dict
application_parameters_inner_from_dict = ApplicationParametersInner.from_dict(application_parameters_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


