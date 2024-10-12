# AutoscaleProfile

Autoscale profile.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**capacity** | [**ScaleCapacity**](ScaleCapacity.md) |  | 
**fixed_date** | [**TimeWindow**](TimeWindow.md) |  | [optional] 
**name** | **str** | the name of the profile. | 
**recurrence** | [**Recurrence**](Recurrence.md) |  | [optional] 
**rules** | [**List[ScaleRule]**](ScaleRule.md) | the collection of rules that provide the triggers and parameters for the scaling action. A maximum of 10 rules can be specified. | 

## Example

```python
from openapi_client.models.autoscale_profile import AutoscaleProfile

# TODO update the JSON string below
json = "{}"
# create an instance of AutoscaleProfile from a JSON string
autoscale_profile_instance = AutoscaleProfile.from_json(json)
# print the JSON string representation of the object
print(AutoscaleProfile.to_json())

# convert the object into a dict
autoscale_profile_dict = autoscale_profile_instance.to_dict()
# create an instance of AutoscaleProfile from a dict
autoscale_profile_from_dict = AutoscaleProfile.from_dict(autoscale_profile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


