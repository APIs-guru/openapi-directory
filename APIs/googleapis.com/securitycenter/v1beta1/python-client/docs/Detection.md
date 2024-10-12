# Detection

Memory hash detection contributing to the binary family match.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**binary** | **str** | The name of the binary associated with the memory hash signature detection. | [optional] 
**percent_pages_matched** | **float** | The percentage of memory page hashes in the signature that were matched. | [optional] 

## Example

```python
from openapi_client.models.detection import Detection

# TODO update the JSON string below
json = "{}"
# create an instance of Detection from a JSON string
detection_instance = Detection.from_json(json)
# print the JSON string representation of the object
print(Detection.to_json())

# convert the object into a dict
detection_dict = detection_instance.to_dict()
# create an instance of Detection from a dict
detection_from_dict = Detection.from_dict(detection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


