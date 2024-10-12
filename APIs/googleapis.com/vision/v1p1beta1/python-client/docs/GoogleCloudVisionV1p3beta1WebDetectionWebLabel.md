# GoogleCloudVisionV1p3beta1WebDetectionWebLabel

Label to provide extra metadata for the web detection.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**label** | **str** | Label for extra metadata. | [optional] 
**language_code** | **str** | The BCP-47 language code for &#x60;label&#x60;, such as \&quot;en-US\&quot; or \&quot;sr-Latn\&quot;. For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_vision_v1p3beta1_web_detection_web_label import GoogleCloudVisionV1p3beta1WebDetectionWebLabel

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudVisionV1p3beta1WebDetectionWebLabel from a JSON string
google_cloud_vision_v1p3beta1_web_detection_web_label_instance = GoogleCloudVisionV1p3beta1WebDetectionWebLabel.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudVisionV1p3beta1WebDetectionWebLabel.to_json())

# convert the object into a dict
google_cloud_vision_v1p3beta1_web_detection_web_label_dict = google_cloud_vision_v1p3beta1_web_detection_web_label_instance.to_dict()
# create an instance of GoogleCloudVisionV1p3beta1WebDetectionWebLabel from a dict
google_cloud_vision_v1p3beta1_web_detection_web_label_from_dict = GoogleCloudVisionV1p3beta1WebDetectionWebLabel.from_dict(google_cloud_vision_v1p3beta1_web_detection_web_label_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


