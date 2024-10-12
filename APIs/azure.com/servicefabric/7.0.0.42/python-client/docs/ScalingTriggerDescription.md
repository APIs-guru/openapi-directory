# ScalingTriggerDescription

Describes the trigger for performing a scaling operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | [**ScalingTriggerKind**](ScalingTriggerKind.md) |  | 

## Example

```python
from openapi_client.models.scaling_trigger_description import ScalingTriggerDescription

# TODO update the JSON string below
json = "{}"
# create an instance of ScalingTriggerDescription from a JSON string
scaling_trigger_description_instance = ScalingTriggerDescription.from_json(json)
# print the JSON string representation of the object
print(ScalingTriggerDescription.to_json())

# convert the object into a dict
scaling_trigger_description_dict = scaling_trigger_description_instance.to_dict()
# create an instance of ScalingTriggerDescription from a dict
scaling_trigger_description_from_dict = ScalingTriggerDescription.from_dict(scaling_trigger_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


