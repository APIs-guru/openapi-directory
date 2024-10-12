# ScalingMechanismDescription

Describes the mechanism for performing a scaling operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | [**ScalingMechanismKind**](ScalingMechanismKind.md) |  | 

## Example

```python
from openapi_client.models.scaling_mechanism_description import ScalingMechanismDescription

# TODO update the JSON string below
json = "{}"
# create an instance of ScalingMechanismDescription from a JSON string
scaling_mechanism_description_instance = ScalingMechanismDescription.from_json(json)
# print the JSON string representation of the object
print(ScalingMechanismDescription.to_json())

# convert the object into a dict
scaling_mechanism_description_dict = scaling_mechanism_description_instance.to_dict()
# create an instance of ScalingMechanismDescription from a dict
scaling_mechanism_description_from_dict = ScalingMechanismDescription.from_dict(scaling_mechanism_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


