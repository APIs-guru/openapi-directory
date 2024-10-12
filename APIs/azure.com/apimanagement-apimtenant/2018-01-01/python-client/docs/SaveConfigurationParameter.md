# SaveConfigurationParameter

Parameters supplied to the Save Tenant Configuration operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**branch** | **str** | The name of the Git branch in which to commit the current configuration snapshot. | 
**force** | **bool** | The value if true, the current configuration database is committed to the Git repository, even if the Git repository has newer changes that would be overwritten. | [optional] 

## Example

```python
from openapi_client.models.save_configuration_parameter import SaveConfigurationParameter

# TODO update the JSON string below
json = "{}"
# create an instance of SaveConfigurationParameter from a JSON string
save_configuration_parameter_instance = SaveConfigurationParameter.from_json(json)
# print the JSON string representation of the object
print(SaveConfigurationParameter.to_json())

# convert the object into a dict
save_configuration_parameter_dict = save_configuration_parameter_instance.to_dict()
# create an instance of SaveConfigurationParameter from a dict
save_configuration_parameter_from_dict = SaveConfigurationParameter.from_dict(save_configuration_parameter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


