# DiagnosticDetectorCollection

Collection of Diagnostic Detectors

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to next page of resources. | [optional] [readonly] 
**value** | [**List[DetectorDefinition]**](DetectorDefinition.md) | Collection of resources. | 

## Example

```python
from openapi_client.models.diagnostic_detector_collection import DiagnosticDetectorCollection

# TODO update the JSON string below
json = "{}"
# create an instance of DiagnosticDetectorCollection from a JSON string
diagnostic_detector_collection_instance = DiagnosticDetectorCollection.from_json(json)
# print the JSON string representation of the object
print(DiagnosticDetectorCollection.to_json())

# convert the object into a dict
diagnostic_detector_collection_dict = diagnostic_detector_collection_instance.to_dict()
# create an instance of DiagnosticDetectorCollection from a dict
diagnostic_detector_collection_from_dict = DiagnosticDetectorCollection.from_dict(diagnostic_detector_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


