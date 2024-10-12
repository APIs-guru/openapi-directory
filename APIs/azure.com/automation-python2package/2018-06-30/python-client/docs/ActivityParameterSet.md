# ActivityParameterSet

Definition of the activity parameter set.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Gets or sets the name of the activity parameter set. | [optional] 
**parameters** | [**List[ActivityParameter]**](ActivityParameter.md) | Gets or sets the parameters of the activity parameter set. | [optional] 

## Example

```python
from openapi_client.models.activity_parameter_set import ActivityParameterSet

# TODO update the JSON string below
json = "{}"
# create an instance of ActivityParameterSet from a JSON string
activity_parameter_set_instance = ActivityParameterSet.from_json(json)
# print the JSON string representation of the object
print(ActivityParameterSet.to_json())

# convert the object into a dict
activity_parameter_set_dict = activity_parameter_set_instance.to_dict()
# create an instance of ActivityParameterSet from a dict
activity_parameter_set_from_dict = ActivityParameterSet.from_dict(activity_parameter_set_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


