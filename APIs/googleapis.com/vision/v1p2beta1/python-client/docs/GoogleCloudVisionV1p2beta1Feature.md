# GoogleCloudVisionV1p2beta1Feature

The type of Google Cloud Vision API detection to perform, and the maximum number of results to return for that type. Multiple `Feature` objects can be specified in the `features` list.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_results** | **int** | Maximum number of results of this type. Does not apply to &#x60;TEXT_DETECTION&#x60;, &#x60;DOCUMENT_TEXT_DETECTION&#x60;, or &#x60;CROP_HINTS&#x60;. | [optional] 
**model** | **str** | Model to use for the feature. Supported values: \&quot;builtin/stable\&quot; (the default if unset) and \&quot;builtin/latest\&quot;. &#x60;DOCUMENT_TEXT_DETECTION&#x60; and &#x60;TEXT_DETECTION&#x60; also support \&quot;builtin/weekly\&quot; for the bleeding edge release updated weekly. | [optional] 
**type** | **str** | The feature type. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_vision_v1p2beta1_feature import GoogleCloudVisionV1p2beta1Feature

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudVisionV1p2beta1Feature from a JSON string
google_cloud_vision_v1p2beta1_feature_instance = GoogleCloudVisionV1p2beta1Feature.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudVisionV1p2beta1Feature.to_json())

# convert the object into a dict
google_cloud_vision_v1p2beta1_feature_dict = google_cloud_vision_v1p2beta1_feature_instance.to_dict()
# create an instance of GoogleCloudVisionV1p2beta1Feature from a dict
google_cloud_vision_v1p2beta1_feature_from_dict = GoogleCloudVisionV1p2beta1Feature.from_dict(google_cloud_vision_v1p2beta1_feature_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


