# CreativeOptimizationConfiguration

Creative optimization settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | ID of this creative optimization config. This field is auto-generated when the campaign is inserted or updated. It can be null for existing campaigns. | [optional] 
**name** | **str** | Name of this creative optimization config. This is a required field and must be less than 129 characters long. | [optional] 
**optimization_activitys** | [**List[OptimizationActivity]**](OptimizationActivity.md) | List of optimization activities associated with this configuration. | [optional] 
**optimization_model** | **str** | Optimization model for this configuration. | [optional] 

## Example

```python
from openapi_client.models.creative_optimization_configuration import CreativeOptimizationConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of CreativeOptimizationConfiguration from a JSON string
creative_optimization_configuration_instance = CreativeOptimizationConfiguration.from_json(json)
# print the JSON string representation of the object
print(CreativeOptimizationConfiguration.to_json())

# convert the object into a dict
creative_optimization_configuration_dict = creative_optimization_configuration_instance.to_dict()
# create an instance of CreativeOptimizationConfiguration from a dict
creative_optimization_configuration_from_dict = CreativeOptimizationConfiguration.from_dict(creative_optimization_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


