# ThresholdsRequest

Sets thresholds for AI moderation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**explicit** | [**LabelThresholdsRequest**](LabelThresholdsRequest.md) |  | [optional] 
**spam** | [**LabelThresholdsRequest**](LabelThresholdsRequest.md) |  | [optional] 
**toxic** | [**LabelThresholdsRequest**](LabelThresholdsRequest.md) |  | [optional] 

## Example

```python
from openapi_client.models.thresholds_request import ThresholdsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ThresholdsRequest from a JSON string
thresholds_request_instance = ThresholdsRequest.from_json(json)
# print the JSON string representation of the object
print(ThresholdsRequest.to_json())

# convert the object into a dict
thresholds_request_dict = thresholds_request_instance.to_dict()
# create an instance of ThresholdsRequest from a dict
thresholds_request_from_dict = ThresholdsRequest.from_dict(thresholds_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


