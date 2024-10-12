# DataManager

The DataManager resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | Etag of the Resource. | [optional] 
**id** | **str** | The Resource Id. | [optional] [readonly] 
**location** | **str** | The location of the resource. This will be one of the supported and registered Azure Geo Regions (e.g. West US, East  US, Southeast Asia, etc.). The geo region of a resource cannot be changed once it is created, but if an identical geo  region is specified on update the request will succeed. | 
**name** | **str** | The Resource Name. | [optional] [readonly] 
**sku** | [**Sku**](Sku.md) |  | [optional] 
**tags** | **Dict[str, str]** | The list of key value pairs that describe the resource. These tags can be used in viewing and grouping this resource  (across resource groups). | [optional] 
**type** | **str** | The Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.data_manager import DataManager

# TODO update the JSON string below
json = "{}"
# create an instance of DataManager from a JSON string
data_manager_instance = DataManager.from_json(json)
# print the JSON string representation of the object
print(DataManager.to_json())

# convert the object into a dict
data_manager_dict = data_manager_instance.to_dict()
# create an instance of DataManager from a dict
data_manager_from_dict = DataManager.from_dict(data_manager_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


