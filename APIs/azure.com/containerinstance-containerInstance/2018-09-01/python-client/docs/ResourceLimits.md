# ResourceLimits

The resource limits.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cpu** | **float** | The CPU limit of this container instance. | [optional] 
**memory_in_gb** | **float** | The memory limit in GB of this container instance. | [optional] 

## Example

```python
from openapi_client.models.resource_limits import ResourceLimits

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceLimits from a JSON string
resource_limits_instance = ResourceLimits.from_json(json)
# print the JSON string representation of the object
print(ResourceLimits.to_json())

# convert the object into a dict
resource_limits_dict = resource_limits_instance.to_dict()
# create an instance of ResourceLimits from a dict
resource_limits_from_dict = ResourceLimits.from_dict(resource_limits_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


