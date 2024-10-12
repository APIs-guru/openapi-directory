# WebDetectionParams

Parameters for web detection request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**include_geo_results** | **bool** | This field has no effect on results. | [optional] 

## Example

```python
from openapi_client.models.web_detection_params import WebDetectionParams

# TODO update the JSON string below
json = "{}"
# create an instance of WebDetectionParams from a JSON string
web_detection_params_instance = WebDetectionParams.from_json(json)
# print the JSON string representation of the object
print(WebDetectionParams.to_json())

# convert the object into a dict
web_detection_params_dict = web_detection_params_instance.to_dict()
# create an instance of WebDetectionParams from a dict
web_detection_params_from_dict = WebDetectionParams.from_dict(web_detection_params_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


