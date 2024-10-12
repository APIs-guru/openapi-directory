# LabelThresholdsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**block** | **float** | Threshold for automatic message block | [optional] 
**flag** | **float** | Threshold for automatic message flag | [optional] 

## Example

```python
from openapi_client.models.label_thresholds_request import LabelThresholdsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of LabelThresholdsRequest from a JSON string
label_thresholds_request_instance = LabelThresholdsRequest.from_json(json)
# print the JSON string representation of the object
print(LabelThresholdsRequest.to_json())

# convert the object into a dict
label_thresholds_request_dict = label_thresholds_request_instance.to_dict()
# create an instance of LabelThresholdsRequest from a dict
label_thresholds_request_from_dict = LabelThresholdsRequest.from_dict(label_thresholds_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


