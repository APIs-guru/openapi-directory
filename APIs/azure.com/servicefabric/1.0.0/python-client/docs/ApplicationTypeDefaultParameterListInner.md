# ApplicationTypeDefaultParameterListInner

The list of the default parameter

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** |  | [optional] 
**value** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.application_type_default_parameter_list_inner import ApplicationTypeDefaultParameterListInner

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationTypeDefaultParameterListInner from a JSON string
application_type_default_parameter_list_inner_instance = ApplicationTypeDefaultParameterListInner.from_json(json)
# print the JSON string representation of the object
print(ApplicationTypeDefaultParameterListInner.to_json())

# convert the object into a dict
application_type_default_parameter_list_inner_dict = application_type_default_parameter_list_inner_instance.to_dict()
# create an instance of ApplicationTypeDefaultParameterListInner from a dict
application_type_default_parameter_list_inner_from_dict = ApplicationTypeDefaultParameterListInner.from_dict(application_type_default_parameter_list_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


