# EnvironmentResource

An environment is a set of time-series data available for query, and is the top level Azure Time Series Insights resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**EnvironmentResourceProperties**](EnvironmentResourceProperties.md) |  | [optional] 
**sku** | [**Sku**](Sku.md) |  | [optional] 
**location** | **str** | Resource location | 
**tags** | **Dict[str, str]** | Resource tags | [optional] 
**id** | **str** | Resource Id | [optional] [readonly] 
**name** | **str** | Resource name | [optional] [readonly] 
**type** | **str** | Resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.environment_resource import EnvironmentResource

# TODO update the JSON string below
json = "{}"
# create an instance of EnvironmentResource from a JSON string
environment_resource_instance = EnvironmentResource.from_json(json)
# print the JSON string representation of the object
print(EnvironmentResource.to_json())

# convert the object into a dict
environment_resource_dict = environment_resource_instance.to_dict()
# create an instance of EnvironmentResource from a dict
environment_resource_from_dict = EnvironmentResource.from_dict(environment_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


