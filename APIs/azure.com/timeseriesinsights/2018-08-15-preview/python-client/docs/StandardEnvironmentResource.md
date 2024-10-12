# StandardEnvironmentResource

An environment is a set of time-series data available for query, and is the top level Azure Time Series Insights resource. Standard environments have data retention limits.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**StandardEnvironmentResourceProperties**](StandardEnvironmentResourceProperties.md) |  | 
**kind** | **str** | The kind of the environment. | 
**sku** | [**Sku**](Sku.md) |  | 
**location** | **str** | Resource location | 
**tags** | **Dict[str, str]** | Resource tags | [optional] 
**id** | **str** | Resource Id | [optional] [readonly] 
**name** | **str** | Resource name | [optional] [readonly] 
**type** | **str** | Resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.standard_environment_resource import StandardEnvironmentResource

# TODO update the JSON string below
json = "{}"
# create an instance of StandardEnvironmentResource from a JSON string
standard_environment_resource_instance = StandardEnvironmentResource.from_json(json)
# print the JSON string representation of the object
print(StandardEnvironmentResource.to_json())

# convert the object into a dict
standard_environment_resource_dict = standard_environment_resource_instance.to_dict()
# create an instance of StandardEnvironmentResource from a dict
standard_environment_resource_from_dict = StandardEnvironmentResource.from_dict(standard_environment_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


