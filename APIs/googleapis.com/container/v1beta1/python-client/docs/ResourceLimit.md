# ResourceLimit

Contains information about amount of some resource in the cluster. For memory, value should be in GB.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**maximum** | **str** | Maximum amount of the resource in the cluster. | [optional] 
**minimum** | **str** | Minimum amount of the resource in the cluster. | [optional] 
**resource_type** | **str** | Resource name \&quot;cpu\&quot;, \&quot;memory\&quot; or gpu-specific string. | [optional] 

## Example

```python
from openapi_client.models.resource_limit import ResourceLimit

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceLimit from a JSON string
resource_limit_instance = ResourceLimit.from_json(json)
# print the JSON string representation of the object
print(ResourceLimit.to_json())

# convert the object into a dict
resource_limit_dict = resource_limit_instance.to_dict()
# create an instance of ResourceLimit from a dict
resource_limit_from_dict = ResourceLimit.from_dict(resource_limit_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


