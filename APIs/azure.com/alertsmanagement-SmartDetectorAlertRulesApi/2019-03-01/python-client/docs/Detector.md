# Detector

The detector information. By default this is not populated, unless it's specified in expandDetector

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The Smart Detector description. By default this is not populated, unless it&#39;s specified in expandDetector | [optional] 
**id** | **str** | The detector id. | 
**image_paths** | **List[str]** | The Smart Detector image path. By default this is not populated, unless it&#39;s specified in expandDetector | [optional] 
**name** | **str** | The Smart Detector name. By default this is not populated, unless it&#39;s specified in expandDetector | [optional] 
**parameters** | **Dict[str, object]** | The detector&#39;s parameters.&#39; | [optional] 
**supported_resource_types** | **List[str]** | The Smart Detector supported resource types. By default this is not populated, unless it&#39;s specified in expandDetector | [optional] 

## Example

```python
from openapi_client.models.detector import Detector

# TODO update the JSON string below
json = "{}"
# create an instance of Detector from a JSON string
detector_instance = Detector.from_json(json)
# print the JSON string representation of the object
print(Detector.to_json())

# convert the object into a dict
detector_dict = detector_instance.to_dict()
# create an instance of Detector from a dict
detector_from_dict = Detector.from_dict(detector_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


