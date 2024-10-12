# CreativeRotation

Creative Rotation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**creative_assignments** | [**List[CreativeAssignment]**](CreativeAssignment.md) | Creative assignments in this creative rotation. | [optional] 
**creative_optimization_configuration_id** | **str** | Creative optimization configuration that is used by this ad. It should refer to one of the existing optimization configurations in the ad&#39;s campaign. If it is unset or set to 0, then the campaign&#39;s default optimization configuration will be used for this ad. | [optional] 
**type** | **str** | Type of creative rotation. Can be used to specify whether to use sequential or random rotation. | [optional] 
**weight_calculation_strategy** | **str** | Strategy for calculating weights. Used with CREATIVE_ROTATION_TYPE_RANDOM. | [optional] 

## Example

```python
from openapi_client.models.creative_rotation import CreativeRotation

# TODO update the JSON string below
json = "{}"
# create an instance of CreativeRotation from a JSON string
creative_rotation_instance = CreativeRotation.from_json(json)
# print the JSON string representation of the object
print(CreativeRotation.to_json())

# convert the object into a dict
creative_rotation_dict = creative_rotation_instance.to_dict()
# create an instance of CreativeRotation from a dict
creative_rotation_from_dict = CreativeRotation.from_dict(creative_rotation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


