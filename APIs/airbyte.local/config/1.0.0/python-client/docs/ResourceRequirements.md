# ResourceRequirements

optional resource requirements to run workers (blank for unbounded allocations)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cpu_limit** | **str** |  | [optional] 
**cpu_request** | **str** |  | [optional] 
**memory_limit** | **str** |  | [optional] 
**memory_request** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.resource_requirements import ResourceRequirements

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceRequirements from a JSON string
resource_requirements_instance = ResourceRequirements.from_json(json)
# print the JSON string representation of the object
print(ResourceRequirements.to_json())

# convert the object into a dict
resource_requirements_dict = resource_requirements_instance.to_dict()
# create an instance of ResourceRequirements from a dict
resource_requirements_from_dict = ResourceRequirements.from_dict(resource_requirements_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


