# ManagementGroupProperties

Management group properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created** | **datetime** | The datetime that the management group was created. | [optional] 
**data_received** | **datetime** | The last datetime that the management group received data. | [optional] 
**id** | **str** | The unique ID of the management group. | [optional] 
**is_gateway** | **bool** | Gets or sets a value indicating whether the management group is a gateway. | [optional] 
**name** | **str** | The name of the management group. | [optional] 
**server_count** | **int** | The number of servers connected to the management group. | [optional] 
**sku** | **str** | The SKU of System Center that is managing the management group. | [optional] 
**version** | **str** | The version of System Center that is managing the management group. | [optional] 

## Example

```python
from openapi_client.models.management_group_properties import ManagementGroupProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ManagementGroupProperties from a JSON string
management_group_properties_instance = ManagementGroupProperties.from_json(json)
# print the JSON string representation of the object
print(ManagementGroupProperties.to_json())

# convert the object into a dict
management_group_properties_dict = management_group_properties_instance.to_dict()
# create an instance of ManagementGroupProperties from a dict
management_group_properties_from_dict = ManagementGroupProperties.from_dict(management_group_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


