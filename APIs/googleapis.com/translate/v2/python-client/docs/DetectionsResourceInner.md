# DetectionsResourceInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**confidence** | **float** | The confidence of the detection result of this language. | [optional] 
**is_reliable** | **bool** | A boolean to indicate is the language detection result reliable. | [optional] 
**language** | **str** | The language we detected. | [optional] 

## Example

```python
from openapi_client.models.detections_resource_inner import DetectionsResourceInner

# TODO update the JSON string below
json = "{}"
# create an instance of DetectionsResourceInner from a JSON string
detections_resource_inner_instance = DetectionsResourceInner.from_json(json)
# print the JSON string representation of the object
print(DetectionsResourceInner.to_json())

# convert the object into a dict
detections_resource_inner_dict = detections_resource_inner_instance.to_dict()
# create an instance of DetectionsResourceInner from a dict
detections_resource_inner_from_dict = DetectionsResourceInner.from_dict(detections_resource_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


