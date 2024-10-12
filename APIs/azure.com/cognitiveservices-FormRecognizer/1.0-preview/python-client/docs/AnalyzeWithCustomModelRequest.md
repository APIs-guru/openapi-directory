# AnalyzeWithCustomModelRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**form_stream** | **bytearray** | A pdf document or image (jpg,png) file to analyze. | 

## Example

```python
from openapi_client.models.analyze_with_custom_model_request import AnalyzeWithCustomModelRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AnalyzeWithCustomModelRequest from a JSON string
analyze_with_custom_model_request_instance = AnalyzeWithCustomModelRequest.from_json(json)
# print the JSON string representation of the object
print(AnalyzeWithCustomModelRequest.to_json())

# convert the object into a dict
analyze_with_custom_model_request_dict = analyze_with_custom_model_request_instance.to_dict()
# create an instance of AnalyzeWithCustomModelRequest from a dict
analyze_with_custom_model_request_from_dict = AnalyzeWithCustomModelRequest.from_dict(analyze_with_custom_model_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


