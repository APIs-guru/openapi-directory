# Resource

Model of the Resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The Resource Id. | [optional] [readonly] 
**location** | **str** | The location of the resource. This will be one of the supported and registered Azure Geo Regions (e.g. West US, East  US, Southeast Asia, etc.). The geo region of a resource cannot be changed once it is created, but if an identical geo  region is specified on update the request will succeed. | 
**name** | **str** | The Resource Name. | [optional] [readonly] 
**sku** | [**Sku**](Sku.md) |  | [optional] 
**tags** | **Dict[str, str]** | The list of key value pairs that describe the resource. These tags can be used in viewing and grouping this resource  (across resource groups). | [optional] 
**type** | **str** | The Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.resource import Resource

# TODO update the JSON string below
json = "{}"
# create an instance of Resource from a JSON string
resource_instance = Resource.from_json(json)
# print the JSON string representation of the object
print(Resource.to_json())

# convert the object into a dict
resource_dict = resource_instance.to_dict()
# create an instance of Resource from a dict
resource_from_dict = Resource.from_dict(resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


