# GooglePrivacyDlpV2TransformationConfig

User specified templates and configs for how to deidentify structured, unstructures, and image files. User must provide either a unstructured deidentify template or at least one redact image config.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deidentify_template** | **str** | De-identify template. If this template is specified, it will serve as the default de-identify template. This template cannot contain &#x60;record_transformations&#x60; since it can be used for unstructured content such as free-form text files. If this template is not set, a default &#x60;ReplaceWithInfoTypeConfig&#x60; will be used to de-identify unstructured content. | [optional] 
**image_redact_template** | **str** | Image redact template. If this template is specified, it will serve as the de-identify template for images. If this template is not set, all findings in the image will be redacted with a black box. | [optional] 
**structured_deidentify_template** | **str** | Structured de-identify template. If this template is specified, it will serve as the de-identify template for structured content such as delimited files and tables. If this template is not set but the &#x60;deidentify_template&#x60; is set, then &#x60;deidentify_template&#x60; will also apply to the structured content. If neither template is set, a default &#x60;ReplaceWithInfoTypeConfig&#x60; will be used to de-identify structured content. | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_transformation_config import GooglePrivacyDlpV2TransformationConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2TransformationConfig from a JSON string
google_privacy_dlp_v2_transformation_config_instance = GooglePrivacyDlpV2TransformationConfig.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2TransformationConfig.to_json())

# convert the object into a dict
google_privacy_dlp_v2_transformation_config_dict = google_privacy_dlp_v2_transformation_config_instance.to_dict()
# create an instance of GooglePrivacyDlpV2TransformationConfig from a dict
google_privacy_dlp_v2_transformation_config_from_dict = GooglePrivacyDlpV2TransformationConfig.from_dict(google_privacy_dlp_v2_transformation_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


