# DscNodeConfigurationListResult

The response model for the list job operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Gets or sets the next link. | [optional] 
**total_count** | **int** | Gets or sets the total rows in query. | [optional] 
**value** | [**List[DscNodeConfiguration]**](DscNodeConfiguration.md) | Gets or sets a list of Dsc node configurations. | [optional] 

## Example

```python
from openapi_client.models.dsc_node_configuration_list_result import DscNodeConfigurationListResult

# TODO update the JSON string below
json = "{}"
# create an instance of DscNodeConfigurationListResult from a JSON string
dsc_node_configuration_list_result_instance = DscNodeConfigurationListResult.from_json(json)
# print the JSON string representation of the object
print(DscNodeConfigurationListResult.to_json())

# convert the object into a dict
dsc_node_configuration_list_result_dict = dsc_node_configuration_list_result_instance.to_dict()
# create an instance of DscNodeConfigurationListResult from a dict
dsc_node_configuration_list_result_from_dict = DscNodeConfigurationListResult.from_dict(dsc_node_configuration_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


