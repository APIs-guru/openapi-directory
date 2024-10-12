# ResourceUsage

Output of check resource usage API.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current_value** | **int** | Actual value of usage on the specified resource type. | [optional] [readonly] 
**limit** | **int** | Quota of the specified resource type. | [optional] [readonly] 
**resource_type** | **str** | Resource type for which the usage is provided. | [optional] [readonly] 
**unit** | **str** | Unit of the usage. e.g. Count. | [optional] [readonly] 

## Example

```python
from openapi_client.models.resource_usage import ResourceUsage

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceUsage from a JSON string
resource_usage_instance = ResourceUsage.from_json(json)
# print the JSON string representation of the object
print(ResourceUsage.to_json())

# convert the object into a dict
resource_usage_dict = resource_usage_instance.to_dict()
# create an instance of ResourceUsage from a dict
resource_usage_from_dict = ResourceUsage.from_dict(resource_usage_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


