# DscConfigurationCreateOrUpdateParameters

The parameters supplied to the create or update configuration operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | **str** | Gets or sets the location of the resource. | [optional] 
**name** | **str** | Gets or sets name of the resource. | [optional] 
**properties** | [**DscConfigurationCreateOrUpdateProperties**](DscConfigurationCreateOrUpdateProperties.md) |  | 
**tags** | **Dict[str, str]** | Gets or sets the tags attached to the resource. | [optional] 

## Example

```python
from openapi_client.models.dsc_configuration_create_or_update_parameters import DscConfigurationCreateOrUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of DscConfigurationCreateOrUpdateParameters from a JSON string
dsc_configuration_create_or_update_parameters_instance = DscConfigurationCreateOrUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(DscConfigurationCreateOrUpdateParameters.to_json())

# convert the object into a dict
dsc_configuration_create_or_update_parameters_dict = dsc_configuration_create_or_update_parameters_instance.to_dict()
# create an instance of DscConfigurationCreateOrUpdateParameters from a dict
dsc_configuration_create_or_update_parameters_from_dict = DscConfigurationCreateOrUpdateParameters.from_dict(dsc_configuration_create_or_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


