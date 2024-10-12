# DscConfigurationUpdateParameters

The parameters supplied to the create or update configuration operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Gets or sets name of the resource. | [optional] 
**properties** | [**DscConfigurationCreateOrUpdateProperties**](DscConfigurationCreateOrUpdateProperties.md) |  | [optional] 
**tags** | **Dict[str, str]** | Gets or sets the tags attached to the resource. | [optional] 

## Example

```python
from openapi_client.models.dsc_configuration_update_parameters import DscConfigurationUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of DscConfigurationUpdateParameters from a JSON string
dsc_configuration_update_parameters_instance = DscConfigurationUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(DscConfigurationUpdateParameters.to_json())

# convert the object into a dict
dsc_configuration_update_parameters_dict = dsc_configuration_update_parameters_instance.to_dict()
# create an instance of DscConfigurationUpdateParameters from a dict
dsc_configuration_update_parameters_from_dict = DscConfigurationUpdateParameters.from_dict(dsc_configuration_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


