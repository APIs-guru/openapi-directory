# DscConfigurationListResult

The response model for the list configuration operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Gets or sets the next link. | [optional] 
**total_count** | **int** | Gets the total number of configurations matching filter criteria. | [optional] 
**value** | [**List[DscConfiguration]**](DscConfiguration.md) | Gets or sets a list of configurations. | [optional] 

## Example

```python
from openapi_client.models.dsc_configuration_list_result import DscConfigurationListResult

# TODO update the JSON string below
json = "{}"
# create an instance of DscConfigurationListResult from a JSON string
dsc_configuration_list_result_instance = DscConfigurationListResult.from_json(json)
# print the JSON string representation of the object
print(DscConfigurationListResult.to_json())

# convert the object into a dict
dsc_configuration_list_result_dict = dsc_configuration_list_result_instance.to_dict()
# create an instance of DscConfigurationListResult from a dict
dsc_configuration_list_result_from_dict = DscConfigurationListResult.from_dict(dsc_configuration_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


