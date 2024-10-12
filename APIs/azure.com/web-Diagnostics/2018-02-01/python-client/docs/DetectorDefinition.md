# DetectorDefinition

Class representing detector definition

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **object** | DetectorDefinition resource specific properties | [optional] 
**id** | **str** | Resource Id. | [optional] [readonly] 
**kind** | **str** | Kind of resource. | [optional] 
**name** | **str** | Resource Name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.detector_definition import DetectorDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of DetectorDefinition from a JSON string
detector_definition_instance = DetectorDefinition.from_json(json)
# print the JSON string representation of the object
print(DetectorDefinition.to_json())

# convert the object into a dict
detector_definition_dict = detector_definition_instance.to_dict()
# create an instance of DetectorDefinition from a dict
detector_definition_from_dict = DetectorDefinition.from_dict(detector_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


