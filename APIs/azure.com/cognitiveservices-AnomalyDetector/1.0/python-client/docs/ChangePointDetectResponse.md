# ChangePointDetectResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**confidence_scores** | **List[float]** | the change point confidence of each point | 
**is_change_point** | **List[bool]** | isChangePoint contains change point properties for each input point. True means an anomaly either negative or positive has been detected. The index of the array is consistent with the input series. | 
**period** | **int** | Frequency extracted from the series, zero means no recurrent pattern has been found. | 

## Example

```python
from openapi_client.models.change_point_detect_response import ChangePointDetectResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ChangePointDetectResponse from a JSON string
change_point_detect_response_instance = ChangePointDetectResponse.from_json(json)
# print the JSON string representation of the object
print(ChangePointDetectResponse.to_json())

# convert the object into a dict
change_point_detect_response_dict = change_point_detect_response_instance.to_dict()
# create an instance of ChangePointDetectResponse from a dict
change_point_detect_response_from_dict = ChangePointDetectResponse.from_dict(change_point_detect_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


