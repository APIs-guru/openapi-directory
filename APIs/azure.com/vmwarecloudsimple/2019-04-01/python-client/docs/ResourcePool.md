# ResourcePool

Resource pool model

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | resource pool id (privateCloudId:vsphereId) | 
**location** | **str** | Azure region | [optional] [readonly] 
**name** | **str** | {ResourcePoolName} | [optional] [readonly] 
**private_cloud_id** | **str** | The Private Cloud Id | [optional] [readonly] 
**properties** | [**ResourcePoolProperties**](ResourcePoolProperties.md) |  | [optional] 
**type** | **str** | {resourceProviderNamespace}/{resourceType} | [optional] [readonly] 

## Example

```python
from openapi_client.models.resource_pool import ResourcePool

# TODO update the JSON string below
json = "{}"
# create an instance of ResourcePool from a JSON string
resource_pool_instance = ResourcePool.from_json(json)
# print the JSON string representation of the object
print(ResourcePool.to_json())

# convert the object into a dict
resource_pool_dict = resource_pool_instance.to_dict()
# create an instance of ResourcePool from a dict
resource_pool_from_dict = ResourcePool.from_dict(resource_pool_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


