# ActivityProperties

Properties of the activity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**creation_time** | **datetime** | Gets or sets the creation time. | [optional] 
**definition** | **str** | Gets or sets the user name of the activity. | [optional] 
**description** | **str** | Gets or sets the description. | [optional] 
**last_modified_time** | **datetime** | Gets or sets the last modified time. | [optional] 
**output_types** | [**List[ActivityOutputType]**](ActivityOutputType.md) | Gets or sets the output types of the activity. | [optional] 
**parameter_sets** | [**List[ActivityParameterSet]**](ActivityParameterSet.md) | Gets or sets the parameter sets of the activity. | [optional] 

## Example

```python
from openapi_client.models.activity_properties import ActivityProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ActivityProperties from a JSON string
activity_properties_instance = ActivityProperties.from_json(json)
# print the JSON string representation of the object
print(ActivityProperties.to_json())

# convert the object into a dict
activity_properties_dict = activity_properties_instance.to_dict()
# create an instance of ActivityProperties from a dict
activity_properties_from_dict = ActivityProperties.from_dict(activity_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


