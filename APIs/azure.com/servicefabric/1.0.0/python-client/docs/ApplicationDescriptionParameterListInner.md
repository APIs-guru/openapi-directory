# ApplicationDescriptionParameterListInner

The list of the parameter

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** |  | [optional] 
**value** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.application_description_parameter_list_inner import ApplicationDescriptionParameterListInner

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationDescriptionParameterListInner from a JSON string
application_description_parameter_list_inner_instance = ApplicationDescriptionParameterListInner.from_json(json)
# print the JSON string representation of the object
print(ApplicationDescriptionParameterListInner.to_json())

# convert the object into a dict
application_description_parameter_list_inner_dict = application_description_parameter_list_inner_instance.to_dict()
# create an instance of ApplicationDescriptionParameterListInner from a dict
application_description_parameter_list_inner_from_dict = ApplicationDescriptionParameterListInner.from_dict(application_description_parameter_list_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


