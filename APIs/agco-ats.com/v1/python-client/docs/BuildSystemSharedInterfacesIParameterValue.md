# BuildSystemSharedInterfacesIParameterValue

Declares members that must be implemented by parameter value objects.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**direction** | **str** | Gets or sets a value indicating whether the parameter value is an               input to the build part or an output from the build part. | [optional] 
**name** | **str** | Gets or sets the name of the parameter. | [optional] 
**value** | **str** | Gets or sets the value of the parameter. | [optional] 

## Example

```python
from openapi_client.models.build_system_shared_interfaces_i_parameter_value import BuildSystemSharedInterfacesIParameterValue

# TODO update the JSON string below
json = "{}"
# create an instance of BuildSystemSharedInterfacesIParameterValue from a JSON string
build_system_shared_interfaces_i_parameter_value_instance = BuildSystemSharedInterfacesIParameterValue.from_json(json)
# print the JSON string representation of the object
print(BuildSystemSharedInterfacesIParameterValue.to_json())

# convert the object into a dict
build_system_shared_interfaces_i_parameter_value_dict = build_system_shared_interfaces_i_parameter_value_instance.to_dict()
# create an instance of BuildSystemSharedInterfacesIParameterValue from a dict
build_system_shared_interfaces_i_parameter_value_from_dict = BuildSystemSharedInterfacesIParameterValue.from_dict(build_system_shared_interfaces_i_parameter_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


