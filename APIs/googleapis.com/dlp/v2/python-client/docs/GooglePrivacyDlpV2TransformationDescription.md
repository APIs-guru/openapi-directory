# GooglePrivacyDlpV2TransformationDescription

A flattened description of a `PrimitiveTransformation` or `RecordSuppression`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**condition** | **str** | A human-readable string representation of the &#x60;RecordCondition&#x60; corresponding to this transformation. Set if a &#x60;RecordCondition&#x60; was used to determine whether or not to apply this transformation. Examples: * (age_field &gt; 85) * (age_field &lt;&#x3D; 18) * (zip_field exists) * (zip_field &#x3D;&#x3D; 01234) &amp;&amp; (city_field !&#x3D; \&quot;Springville\&quot;) * (zip_field &#x3D;&#x3D; 01234) &amp;&amp; (age_field &lt;&#x3D; 18) &amp;&amp; (city_field exists) | [optional] 
**description** | **str** | A description of the transformation. This is empty for a RECORD_SUPPRESSION, or is the output of calling toString() on the &#x60;PrimitiveTransformation&#x60; protocol buffer message for any other type of transformation. | [optional] 
**info_type** | [**GooglePrivacyDlpV2InfoType**](GooglePrivacyDlpV2InfoType.md) |  | [optional] 
**type** | **str** | The transformation type. | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_transformation_description import GooglePrivacyDlpV2TransformationDescription

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2TransformationDescription from a JSON string
google_privacy_dlp_v2_transformation_description_instance = GooglePrivacyDlpV2TransformationDescription.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2TransformationDescription.to_json())

# convert the object into a dict
google_privacy_dlp_v2_transformation_description_dict = google_privacy_dlp_v2_transformation_description_instance.to_dict()
# create an instance of GooglePrivacyDlpV2TransformationDescription from a dict
google_privacy_dlp_v2_transformation_description_from_dict = GooglePrivacyDlpV2TransformationDescription.from_dict(google_privacy_dlp_v2_transformation_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


