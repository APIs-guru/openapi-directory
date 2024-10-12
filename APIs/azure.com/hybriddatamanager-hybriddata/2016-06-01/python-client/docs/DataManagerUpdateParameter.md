# DataManagerUpdateParameter

The DataManagerUpdateParameter.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sku** | [**Sku**](Sku.md) |  | [optional] 
**tags** | **Dict[str, str]** | The list of key value pairs that describe the resource. These tags can be used in viewing and grouping this resource  (across resource groups). | [optional] 

## Example

```python
from openapi_client.models.data_manager_update_parameter import DataManagerUpdateParameter

# TODO update the JSON string below
json = "{}"
# create an instance of DataManagerUpdateParameter from a JSON string
data_manager_update_parameter_instance = DataManagerUpdateParameter.from_json(json)
# print the JSON string representation of the object
print(DataManagerUpdateParameter.to_json())

# convert the object into a dict
data_manager_update_parameter_dict = data_manager_update_parameter_instance.to_dict()
# create an instance of DataManagerUpdateParameter from a dict
data_manager_update_parameter_from_dict = DataManagerUpdateParameter.from_dict(data_manager_update_parameter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


